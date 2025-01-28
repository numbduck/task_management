import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

// Example user database
const users = [
    { id: 1, username: "user1", password: "password1" },
    { id: 2, username: "user2", password: "password2" },
];

const SECRET_KEY = process.env.SECRET_KEY;

export async function POST(req) {
    const { username, password } = await req.json();

    // Find user in the "database"
    const user = users.find(
        (u) => u.username === username && u.password === password
    );

    if (!user) {
        return NextResponse.json(
            { message: "Invalid username or password" },
            { status: 401 }
        );
    }

    // Generate JWT
    const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, {
        expiresIn: "1h",
    });

    return NextResponse.json({ token });
}
