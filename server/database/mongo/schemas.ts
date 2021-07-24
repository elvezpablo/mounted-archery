import mongoose from 'mongoose';
import { Course, Rider, Horse, Result, Target } from "./types";

const { Schema, model } = mongoose;

const RidersSchema = new Schema<Rider>({
    fullName: { type: String, required: true },
    club: { type: String }
});

const HorsesSchema = new Schema<Horse>({
    name: { type: String, required: true }
});

const TargetsSchema = new Schema<Target>({
    name: { type: String, required: true },
    type: { type: String },
    points: Number,
    possible_points: Number
})

const CoursesSchema = new Schema<Course>({
    name: { type: String, required: true },
    targets: [TargetsSchema]
});

const ResultsSchema = new Schema<Result>({
    rider_id: { type: Schema.Types.ObjectId, required: true },
    horse_id: { type: Schema.Types.ObjectId, required: true },
    course_id: { type: Schema.Types.ObjectId, required: true },
    date: { type: Date, required: true },
    points: [TargetsSchema]
});

export const Courses = model('Courses', CoursesSchema);
export const Horses = model('Horses', HorsesSchema);
export const Results = model('Results', ResultsSchema);
export const Riders = model('Riders', RidersSchema);