import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import { google } from "googleapis";
import fetch from 'isomorphic-fetch';
import { config } from 'dotenv';


config();

const app = express();
app.use(helmet()); // sets various security headers 
app.use(express.json()); // parses incoming json request payloads
app.use(cors()); // allow cross origin requests

// scope of access
const sheets = google.sheets('v4');
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const spreadsheetId = `1Fm30zm1HnNMSrZhFq-3bm_ZlGKtJjcq4pecrW3e_NBk`;

// https://hackernoon.com/how-to-use-google-sheets-api-with-nodejs-cz3v316f
async function getAuthToken() {
    const auth = new google.auth.GoogleAuth({
        scopes: SCOPES
    });
    const authToken = await auth.getClient();
    return authToken;
}

const PORT = process.env.PORT || 9001;
const PROD = process.env.NODE_ENV === 'production';

type SpreadSheetQuery = {
    spreadsheetId: string,
    auth: any,
    sheetName: string
}

async function getSpreadSheetValues({ spreadsheetId, auth, sheetName }: SpreadSheetQuery) {
    const res = await sheets.spreadsheets.values.get({
        spreadsheetId,
        auth,
        range: sheetName
    });
    return res;
}

app.post('/', async (req, res) => {
    const auth = await getAuthToken();
    const response = await sheets.spreadsheets.values.append({
        spreadsheetId,
        auth,
        valueInputOption: "RAW",
        insertDataOption: "INSERT_ROWS",
        includeValuesInResponse: true,
        range: "Sheet1",
        requestBody: {
            values: [
                ["four", "black"]
            ]
        }

    });
    console.log('output for getSpreadSheetValues', JSON.stringify(response.data, null, 2));
    res.send(JSON.stringify(response.data, null, 2));
})

app.get(`/`, async (req, res) => {
    const auth = await getAuthToken();
    const response = await getSpreadSheetValues({
        spreadsheetId,
        sheetName: "Sheet1",
        auth
    })
    console.log('output for getSpreadSheetValues', JSON.stringify(response.data, null, 2));
    res.send(JSON.stringify(response.data, null, 2));
})

app.listen(PORT, () => {
    console.log('Server Started on PORT: ', PORT)
})
