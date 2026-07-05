import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";
import { randomUUID } from "crypto";
import { z } from "zod";
import { hash } from "bcryptjs";

// Validation schema for registration payload
const registerSchema = z.object({
  email: z.string().email("Invalid email address"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export async function POST(request: NextRequest) {
  try {
    // Parse and validate the request body
    const body = await request.json();
    const parsed = registerSchema.safeParse(body);

    if (!parsed.success) {
      const errorMessage = parsed.error.issues[0]?.message || "Invalid input";
      return NextResponse.json(
        { error: errorMessage },
        { status: 400 }
      );
    }

    const { email, name, password } = parsed.data;

    // Check if a user with the given email already exists
    const existingUser = await query(
      "SELECT id FROM users WHERE email = $1",
      [email]
    );

    if (existingUser.rows.length > 0) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 409 }
      );
    }

    // Hash the password with bcrypt (10 salt rounds)
    const passwordHash = await hash(password, 10);

    // Generate a UUID for the new user
    const id = randomUUID();

    // Insert the new user into the database
    const result = await query(
      'INSERT INTO users (id, email, name, password_hash) VALUES ($1, $2, $3, $4) RETURNING id, email, name, created_at as "createdAt"',
      [id, email, name, passwordHash]
    );

    // Return the created user (without the password hash)
    return NextResponse.json(
      { data: result.rows[0] },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Failed to register user" },
      { status: 500 }
    );
  }
}

