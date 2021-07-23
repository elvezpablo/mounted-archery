type Rider = {
    fullName: string;
}

type Horse = {
    name: string;
}

type Target = {
    name: string;
    type: string;
    points: number;
    points_possible: number;
}

type Result = {
    person_id: string;
    horse_id: string;
    course_id: string;
    points: Target[];
}

interface Course {
    name: string;
    run_date: Date;
    targets: Target[];
}

export {
    Course,
    Horse,
    Result,
    Rider,
    Target
}