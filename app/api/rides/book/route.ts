import { NextRequest, NextResponse } from "next/server";
import { enforceGenderPolicy, rideBookingSchema } from "@/lib/safety";

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();
    const parsed = rideBookingSchema.parse(payload);

    // Replace with auth/session derived user context.
    const userContext = {
      userId: "user_1",
      verifiedEmail: true,
      verifiedStudentId: true,
      gender: "female" as const,
    };

    // Replace with DB lookup by parsed.rideId.
    const rideContext = {
      driverId: "driver_1",
      driverGender: "female" as const,
      genderPolicy: "women_only" as const,
    };

    // Re-check restrictions at booking time to prevent bypass.
    enforceGenderPolicy(userContext, rideContext);

    return NextResponse.json(
      {
        bookingId: "booking_901",
        rideId: parsed.rideId,
        status: "confirmed",
      },
      { status: 201 },
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Booking failed";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
