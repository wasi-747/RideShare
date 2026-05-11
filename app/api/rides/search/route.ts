import { NextRequest, NextResponse } from "next/server";
import { rideSearchSchema } from "@/lib/safety";

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();
    const parsed = rideSearchSchema.parse(payload);

    // This is where server-side query filters must be applied, never client-only.
    const mockResults = [
      {
        id: "ride_101",
        origin: parsed.origin,
        destination: parsed.destination,
        driver: { name: "Mina A.", rating: 4.9, verified: true },
        safety: { genderPolicy: parsed.safety.genderPolicy },
      },
    ];

    return NextResponse.json({ results: mockResults }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Invalid search payload" },
      { status: 400 },
    );
  }
}
