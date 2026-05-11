import type { GenderPolicy } from "@/state/useRideFiltersStore";

export type RideSearchPayload = {
  origin: string;
  destination: string;
  date?: string;
  time?: string;
  filters: {
    priceRange: [number, number];
    driverRating: number;
    luggageSpace: boolean;
  };
  safety: {
    genderPolicy: GenderPolicy;
  };
};

export async function searchRides(
  payload: RideSearchPayload,
  authToken: string,
) {
  const response = await fetch("/api/rides/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
      "X-Safety-Context": "gender-policy-filter",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Failed to search rides");
  }

  return response.json();
}
