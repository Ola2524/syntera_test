import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";
import bcrypt from "bcryptjs";
import { randomUUID } from "crypto";

/**
 * POST /api/auth/register
 * Registers a new user with name, email, and password
 */
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.json();
    const { name, email, password, confirmPassword } = body;

    // Validate required fields
    if (!name || !email || !password || !confirmPassword) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate that passwords match
    if (password !== confirmPassword) {
      return NextResponse.json(
        { error: "Passwords do not match" },
        { status: 400 }
      );
    }

    // Hash the password
    const passwordHash = await bcrypt.hash(password, 10);

    // Insert the new user into the database
    const result = await query(
      'INSERT INTO users (id, email, name, password_hash, created_at) VALUES ($1, $2, $3, $4, NOW()) RETURNING id, email, name, created_at as "createdAt"',
      [randomUUID(), email, name, passwordHash]
    );

    const user = result.rows[0];

    // Return the newly created user data
    return NextResponse.json(
      {
        data: {
          id: user.id,
          email: user.email,
          name: user.name,
          createdAt: user.createdAt,
        },
        message: "Registration successful",
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error during registration:", error);

    // Handle duplicate email (unique constraint violation)
    if (error.code === "23505") {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 409 }
      );
    }

    // Handle other database errors
    if (error.code) {
      return NextResponse.json(
        { error: "Failed to create account" },
        { status: 500 }
      );
    }

    // Handle unexpected errors
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}

