import { google } from "googleapis";

const sheets = google.sheets('v4');
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const spreadsheetId = `1Fm30zm1HnNMSrZhFq-3bm_ZlGKtJjcq4pecrW3e_NBk`;

type SpreadSheetQuery = {
    spreadsheetId: string,
    auth: any,
    sheetName: string
}

// https://hackernoon.com/how-to-use-google-sheets-api-with-nodejs-cz3v316f
// https://docs.google.com/spreadsheets/d/1Fm30zm1HnNMSrZhFq-3bm_ZlGKtJjcq4pecrW3e_NBk/edit#gid=0

async function getAuthToken() {
    const auth = new google.auth.GoogleAuth({
        scopes: SCOPES
    });
    const authToken = await auth.getClient();
    return authToken;
}

async function getSpreadSheetValues({ spreadsheetId, sheetName }: SpreadSheetQuery) {
    const auth = await getAuthToken();
    const res = await sheets.spreadsheets.values.get({
        spreadsheetId,
        auth,
        range: sheetName
    });
    return res;
}

async function appendSpreadSheetValues() {
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
    return {};
}

export {
    SpreadSheetQuery,
    getSpreadSheetValues
}