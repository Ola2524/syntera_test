import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";

/**
 * GET /api/car-models
 * Fetches all car models or a specific car model by ID
 */
export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (id) {
      // Fetch specific car model
      const result = await query(
        "SELECT * FROM car_models WHERE id = $1",
        [id]
      );

      if (result.rows.length === 0) {
        return NextResponse.json(
          { error: "Car model not found" },
          { status: 404 }
        );
      }

      return NextResponse.json({ data: result.rows[0] });
    }

    // Fetch all car models
    const result = await query(
      "SELECT * FROM car_models ORDER BY created_at DESC"
    );

    return NextResponse.json({ data: result.rows });
  } catch (error) {
    console.error("Error fetching car models:", error);
    return NextResponse.json(
      { error: "Failed to fetch car models" },
      { status: 500 }
    );
  }
}

/**
 * POST /api/car-models
 * Creates a new car model
 */
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.json();
    const {
      name,
      tagline,
      description,
      acceleration_0_60,
      top_speed,
      horsepower,
      price,
      image_url,
    } = body;

    // Validate required fields
    if (!name) {
      return NextResponse.json(
        { error: "Name is required" },
        { status: 400 }
      );
    }

    const result = await query(
      `INSERT INTO car_models 
       (name, tagline, description, acceleration_0_60, top_speed, horsepower, price, image_url) 
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8) 
       RETURNING *`,
      [
        name,
        tagline,
        description,
        acceleration_0_60,
        top_speed,
        horsepower,
        price,
        image_url,
      ]
    );

    return NextResponse.json({ data: result.rows[0] }, { status: 201 });
  } catch (error) {
    console.error("Error creating car model:", error);
    return NextResponse.json(
      { error: "Failed to create car model" },
      { status: 500 }
    );
  }
}
