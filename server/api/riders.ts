import express from 'express';
import { Types } from 'mongoose';
import { ObjectId } from '../database/mongo/types';
import {
    getRiderModel,
    getAllRidersModel,
    postRiderModel,
    putRiderModel,
    deleteRiderModel
} from '../database/mongo/models';

const router = express.Router();
// Good article that doesn't work for typing express responses 
// https://liuhao.im/english/2018/06/12/use-node-express-with-typescript.html

// type RequestWithId = {
//     _id: ObjectId;
// }

// const isRequestWithId = (query: any): query is RequestWithId => {
//     return (query._id && String(query._id).length > 0);
// }
router.post('/riders', async (req, res) => {
    const { fullName, club } = req.body;

    if (!fullName || fullName.length === 0) {
        res.status(400).send('Fullname is invalid');
    }
    const rider = await postRiderModel(fullName, club);
    res.status(200).send(rider);
});

router.get('/riders', async (req, res) => {
    const riders = await getAllRidersModel();
    res.send(riders);
})

router.get('/riders/:id', async (req, res) => {
    const { id } = req.params;
    if (id && Types.ObjectId.isValid(id)) {
        const rider = await getRiderModel(id);
        if (rider) {
            res.send(rider);
        } else {
            res.status(400).send("Rider not found");
        }
    } else {
        res.status(400).send("ID is invalid");
    }

})


export default router;