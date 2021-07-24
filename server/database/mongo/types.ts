type Rider = {
    fullName: string;
    club?: string;
}

type Horse = {
    name: string;
}

type Target = {
    name: string;
    type?: string;
    points?: number;
    points_possible?: number;
}

type Course = {
    name: string;
    targets: Target[];
}


type Result = {
    person_id: string;
    horse_id: string;
    course_id: string;
    date: Date;
    points: Target[];
}

export {
    Course,
    Horse,
    Result,
    Rider,
    Target
}