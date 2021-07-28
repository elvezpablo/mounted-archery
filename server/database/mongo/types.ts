// note we could/should use the mongoose Object id here 
type ObjectId = number | string;

type Rider = {
    _id: ObjectId;
    fullName: string;
    club?: string;
}

type Horse = {
    _id: ObjectId;
    name: string;
}

type Target = {
    _id: ObjectId;
    name: string;
    type?: string;
    points?: number;
    points_possible?: number;
}

type Course = {
    _id: ObjectId;
    name: string;
    targets: Target[];
}

type Result = {
    _id: ObjectId;
    person_id: string;
    horse_id: string;
    course_id: string;
    date: Date;
    points: Target[];
}

export {
    ObjectId,
    Course,
    Horse,
    Result,
    Rider,
    Target
}