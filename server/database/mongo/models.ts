import { Riders, Courses } from "./schemas";
import { Rider } from "./types";


// TODO: figure out if you can pick the attributes from the 
// Rider type to use as arguments 
export const postRiderModel = async (rider: Rider) => {
    const newRider = new Riders(rider);
    await newRider.save();
    return newRider;
}

export const getRiderModel = async (id: string) => {
    const rider = await Riders.find({ _id: id }).lean();
}