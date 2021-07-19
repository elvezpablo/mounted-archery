import StormDB from "stormdb";

const engine = new StormDB.localFileEngine("../../data/db.stormdb");
const db = new StormDB(engine);

db.default({
    users: []
})

type UserType = "admin" | "guest";

type User = {
    name: string;
    type: UserType;
    phone?: string;
    email?: string;
    minor: boolean;
}

db.get("users").push({ "name": "Hillary" });