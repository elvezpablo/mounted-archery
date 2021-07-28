import { Riders } from "./schemas";
import { Rider, ObjectId } from "./types";


// TODO: figure out if you can pick the attributes from the 
// Rider type to use as arguments 
// - you can they are called projections and are the second argument of the find
export const postRiderModel = async (rider: Rider) => {
    const newRider = new Riders(rider);
    await newRider.save();
    return newRider;
}

export const getAllRidersModel = async () => {
    const riders = await Riders.find({}).lean();
    return riders;
}

export const getRiderModel = async (_id: string) => {
    try {
        const rider = await Riders.find({ _id }).lean();
        return rider;
    } catch (e) {
        return null;
    }
}

export const putRiderModel = async (rider: Rider) => {
    // TODO: what is the best strategy to include the mongo _id field? 
    // inherit via interface or join types? 
    // TODO: Should this return anything? 
    // await Riders.findByIdAndUpdate({ _id: rider._id }, { ...rider });
}

export const deleteRiderModel = async (id: string) => {
    // TODO: Should this return anything? 
    await Riders.findByIdAndDelete({ _id: id });
}