import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";
import { z } from "zod";
import { compare } from "bcryptjs";

// Validation schema for login payload
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

export async function POST(request: NextRequest) {
  try {
    // Parse and validate the request body
    const body = await request.json();
    const parsed = loginSchema.safeParse(body);

    if (!parsed.success) {
      const errorMessage = parsed.error.issues[0]?.message || "Invalid input";
      return NextResponse.json(
        { error: errorMessage },
        { status: 400 }
      );
    }

    const { email, password } = parsed.data;

    // Look up the user by email
    const result = await query(
      'SELECT id, email, name, password_hash, created_at as "createdAt" FROM users WHERE email = $1',
      [email]
    );

    // If no user found, return 401 (use generic message to avoid user enumeration)
    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    const user = result.rows[0];

    // Compare the provided password with the stored hash
    const isPasswordValid = await compare(password, user.password_hash);

    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Return the user data (without the password hash)
    return NextResponse.json(
      {
        data: {
          id: user.id,
          email: user.email,
          name: user.name,
          createdAt: user.createdAt,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Failed to login" },
      { status: 500 }
    );
  }
}

