# 🚗 RideShare - University Carpool PWA Platform

<div align="center">

**A lightweight, serverless-optimized Progressive Web Application (PWA) built with Next.js 14 App Router designed to facilitate safe, cost-efficient university carpooling through rigorous safety constraints, user verification, and role-based ride governance.**

[![Next.js](https://img.shields.io/badge/Next.js-14.2-blue?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Latest-green?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Zustand](https://img.shields.io/badge/Zustand-4.5-purple?style=for-the-badge&logo=react)](https://github.com/pmndrs/zustand)
[![PWA](https://img.shields.io/badge/PWA-Supported-orange?style=for-the-badge&logo=progressive-web-apps)](https://web.dev/explore/progressive-web-apps)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Database Schema](#-database-schema)
- [API Reference](#-api-reference)
- [Safety & Verification Policy](#-safety--verification-policy)
- [Authentication](#-authentication)
- [Configuration](#-configuration)
- [Deployment](#-deployment)

---

## 🎯 Overview

**RideShare** is a mobile-first Progressive Web Application (PWA) built to enable secure, trusted carpooling options within university networks. By limiting participation to verified student identities and implementing strict safety policies, the platform reduces daily commute costs while ensuring passenger and driver security.

The codebase is optimized for **Vercel Serverless Functions**, incorporating smart Mongoose database caching connections to prevent connection starvation under high traffic, and utilizing TypeScript validation schemas via Zod.

---

## ✨ Features

### 🚙 For Drivers (Ride Advertisers)

| Feature | Description |
|---------|-------------|
| **Ride Creation** | Post upcoming trips specifying origin, destination, pricing, and timing details |
| **Vehicle Info Details** | Save vehicle metadata including make, model, year, and license plate |
| **Custom Amenities** | Toggle listing features like air conditioning, mobile chargers, WiFi, or AUX input |
| **Rules Configuration** | Set explicit rules for smoking, pet allowance, and luggage storage capacity |
| **Gender Policy Selection** | Configure booking rules: Open to all (`any`), `women_only`, or `same_gender_only` |

### 🎒 For Passengers (Ride Bookers)

| Feature | Description |
|---------|-------------|
| **Smart Search** | Find trips by selecting origin/destination, dates, and applying filters |
| **Seat Booking** | Book one or multiple seats on selected rides (Requires ID Verification) |
| **Booking Tracker** | View and manage upcoming or completed carpool bookings |
| **Flexible Cancellation** | Cancel bookings directly with automatic seat release configurations |
| **Feedback Reviews** | Rate drivers and write written feedback across cleanliness, communication, and safety |

### 🛡️ Safety & Anti-Spam Gateways

| Feature | Description |
|---------|-------------|
| **Email Verification** | Users must confirm accounts via a verified academic/personal email domain |
| **Student ID Upload** | Drivers and passengers must upload document credentials to unlock bookings |
| **Strict Gender Checks** | Server-side validation enforcing that only allowed passenger genders can book |
| **Generic Error Sanitization**| Prevents user profiling or demographic leakage by returning sanitized errors |

### 👨‍💼 For Administrators

| Feature | Description |
|---------|-------------|
| **System Dashboard** | Complete platform summary showing total users, active rides, and bookings |
| **User Access Control** | Activate, suspend, or manually verify student IDs and driver license documents |
| **Ride Moderation** | Edit, modify, or terminate listed rides violating platform policies |

---

## 🛠️ Tech Stack

### Framework & Database

| Component | Technology | Version | Purpose |
|---|---|---|---|
| **Core Framework** | Next.js | 14.2.35 | React Server Side Rendering & API route handler framework |
| **Database** | MongoDB | Latest | Scalable NoSQL document database |
| **Database ODM** | Mongoose | 8.0.0 | Schema definition and serverless database modeling |
| **PWA Config** | next-pwa | 5.6.0 | Service worker registrations for offline capabilities |

### State Management & Styling

| Component | Technology | Version | Purpose |
|---|---|---|---|
| **Styling** | TailwindCSS | 3.4.7 | Utility-first responsive web design interface |
| **State Management**| Zustand | 4.5.4 | Client-side reactive memory storage for shared variables |
| **Validation** | Zod | 3.23.8 | Type-safe runtime schema validations for requests |
| **Animations** | Framer Motion | 12.38.0 | Fluid view transitions and mobile touch animations |

---

## 🏗️ Architecture

### Serverless Architecture & Connection Caching

In traditional Node.js server architectures, database connection pools are persistent. In serverless environments like Vercel, functions spin up and down dynamically. Without connection caching, this leads to Mongoose connection exhaustion. RideShare uses global cache variables (`global._mongooseCache`) to persist connections on warm containers.

```text
┌─────────────────────────────────────────────────────────────────────────┐
│                              CLIENT (Browser / PWA)                     │
│  ┌───────────────────────────────┐           ┌───────────────────────┐  │
│  │     Next.js Pages (Views)     │           │  Zustand Client State │  │
│  └───────────────┬───────────────┘           └───────────┬───────────┘  │
└──────────────────┼───────────────────────────────────────┼──────────────┘
                   │ HTTP Requests & Form Data             │
                   ▼                                       ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                         NEXT.JS API ROUTE HANDLERS                      │
│                                                                         │
│  ┌───────────────────────────────┐           ┌───────────────────────┐  │
│  │      Security Checkpoints     │           │      Controllers      │  │
│  │   JWT Auth │ Gender Policies  │           │   Rides  │  Bookings  │  │
│  └───────────────┬───────────────┘           └───────────┬───────────┘  │
└──────────────────┼───────────────────────────────────────┼──────────────┘
                   │ DB Operations                         │
                   ▼                                       │
┌──────────────────────────────────────────────────────────┼──────────────┐
│                    DATABASE CONNECTION MANAGER           │              │
│                                                          │              │
│  ┌───────────────────────────────────────────────────────▼───────────┐  │
│  │                   global._mongooseCache                           │  │
│  │  Reuse active connection  ◄───[Check Cache]───► Create Connection │  │
│  └───────────────────────┬───────────────────────────────────────────┘  │
└──────────────────────────┼──────────────────────────────────────────────┘
                           ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                       MongoDB Atlas Cloud Cluster                       │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** v18.x or newer
- **MongoDB** instance (Local Community Server or MongoDB Atlas cluster)

### Installation Guide

#### 1. Setup the Repository
1. Navigate to the `RideShare` directory:
   ```bash
   cd RideShare
   ```
2. Install npm package dependencies:
   ```bash
   npm install
   ```

#### 2. Configure Environment Variables
1. Copy the example environment template file:
   ```bash
   cp .env.example .env.local
   ```
2. Open `.env.local` and input the connection keys:
   ```env
   MONGODB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/rideshare?retryWrites=true&w=majority
   JWT_SECRET=use_openssl_rand_base64_32_to_generate_this_key
   NEXT_PUBLIC_API_URL=http://localhost:3000
   ```

#### 3. Run the App
1. Compile and run the Next.js development server:
   ```bash
   npm run dev
   ```
2. Navigate to `http://localhost:3000` inside your browser.

---

## 📁 Project Structure

```text
RideShare/
├── app/                                  # Next.js App Router (Pages & API Routes)
│   ├── api/                              # Backend Serverless Endpoints
│   │   ├── admin/                        # Admin statistics & management routes
│   │   ├── auth/                         # User login, register, password-reset
│   │   ├── bookings/                     # Booking confirmations & cancellation
│   │   ├── profile/                      # User profile details
│   │   ├── reviews/                      # User feedback metrics
│   │   └── rides/                        # Trip registration & filter searches
│   ├── layout.tsx                        # Global app layout configuration
│   └── page.tsx                          # App homepage entry
│
├── components/                           # Shared React UI components
├── lib/                                  # Shared Helper Library Directory
│   ├── db.ts                             # Global cached database connector
│   ├── safety.ts                         # Server-side safety policy validators
│   ├── api.ts                            # Custom client side api dispatchers
│   └── models/                           # Mongoose database models
│       ├── Booking.ts                    # Booking schema configuration
│       ├── Review.ts                     # Review stars & category schemas
│       ├── Ride.ts                       # Ride details schema
│       └── User.ts                       # User accounts & credentials schema
│
├── public/                               # PWA service manifests & static icons
├── state/                                # Zustand store configurations
├── tailwind.config.ts                    # Custom styling layouts
└── package.json                          # Dependencies & script runner configuration
```

---

## 📊 Database Schema

### Entity Relationship Diagram (ERD)

```text
       ┌──────────────┐                  ┌──────────────┐
       │     USER     │ 1              N │     RIDE     │
       ├──────────────┤──────────────────┤──────────────┤
       │ _id (PK)     │                  │ _id (PK)     │
       │ email        │                  │ driverId (FK)│
       │ role         │                  │ origin       │
       │ rating       │                  │ genderPolicy │
       └──────┬───────┘                  └──────┬───────┘
              │ 1                               │ 1
              ├──────────────────────────┐      │
              │ 1                        │      │
              │                          │      │
              │ N                        │ N    │ N
       ┌──────▼───────┐                  ┌──────▼───────┐
       │    REVIEW    │ N              1 │   BOOKING    │
       ├──────────────┤──────────────────┤──────────────┤
       │ _id (PK)     │                  │ _id (PK)     │
       │ reviewer(FK) │                  │ rideId (FK)  │
       │ reviewee(FK) │                  │ passenger(FK)│
       │ rating       │                  │ status       │
       └──────────────┘                  └──────────────┘
```

### Model Schema Implementations

#### User Model
```typescript
const userSchema = new mongoose.Schema<IUser>(
  {
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: String, required: true },
    gender: { type: String, enum: ["female", "male", "other"], required: true },
    profileImage: String,
    verifiedEmail: { type: Boolean, default: false },
    verifiedStudentId: { type: Boolean, default: false },
    studentId: String,
    universityEmail: String,
    role: { type: String, enum: ["driver", "passenger", "admin"], default: "passenger" },
    rating: { type: Number, default: 5, min: 0, max: 5 },
    rideCount: { type: Number, default: 0 },
    verificationDocuments: {
      studentIdUrl: String,
      licenseUrl: String,
      verifiedAt: Date,
    },
    emergencyContact: {
      name: String,
      phone: String,
      relationship: String,
    },
    preferences: {
      musicPreference: String,
      smokingAllowed: { type: Boolean, default: false },
      petsAllowed: { type: Boolean, default: false },
      chatsPreference: { type: String, enum: ["quiet", "chatty", "no-preference"], default: "no-preference" },
    },
  },
  { timestamps: true }
);
```

#### Ride Model
```typescript
const rideSchema = new mongoose.Schema<IRide>(
  {
    driverId: { type: String, required: true, ref: "User" },
    driverName: String,
    driverGender: { type: String, enum: ["female", "male", "other"] },
    driverRating: Number,
    vehicleInfo: {
      make: String,
      model: String,
      year: Number,
      color: String,
      licensePlate: String,
    },
    origin: {
      address: { type: String, required: true },
      coordinates: { latitude: Number, longitude: Number },
    },
    destination: {
      address: { type: String, required: true },
      coordinates: { latitude: Number, longitude: Number },
    },
    departureTime: { type: Date, required: true },
    estimatedArrivalTime: Date,
    totalSeats: { type: Number, required: true, min: 1, max: 8 },
    availableSeats: { type: Number, required: true, min: 0 },
    pricePerSeat: { type: Number, required: true, min: 0 },
    genderPolicy: { type: String, enum: ["any", "women_only", "same_gender_only"], default: "any" },
    amenities: {
      airConditioning: Boolean,
      aux: Boolean,
      charger: Boolean,
      wifi: Boolean,
    },
    rules: {
      smokingAllowed: Boolean,
      petsAllowed: Boolean,
      luggage: Boolean,
    },
    status: { type: String, enum: ["active", "completed", "cancelled"], default: "active" },
    passengers: [{ type: String, ref: "User" }],
    bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Booking" }],
    notes: String,
  },
  { timestamps: true }
);
```

---

## 📡 API Reference

### Base URL
```text
http://localhost:3000/api
```

### Authentication Header
```text
Authorization: Bearer <jwt_token_string>
```

---

### 🔐 Authentication API

#### Register Account
```http
POST /auth/register
Content-Type: application/json

{
  "email": "student@university.edu",
  "password": "securePassword123",
  "firstName": "John",
  "lastName": "Doe",
  "phone": "+1234567890",
  "gender": "male",
  "role": "passenger"
}
```
**Response (201 Created):**
```json
{
  "user": {
    "id": "64cba...",
    "email": "student@university.edu",
    "firstName": "John",
    "lastName": "Doe",
    "role": "passenger",
    "verifiedEmail": false,
    "verifiedStudentId": false
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### User Login
```http
POST /auth/login
Content-Type: application/json

{
  "email": "student@university.edu",
  "password": "securePassword123"
}
```

---

### 🚙 Rides API

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| `POST` | `/rides` | Creates a new trip (Requires Driver role) | ✅ |
| `POST` | `/rides/search` | Search for available trips matching location & date | ✅ |
| `GET` | `/rides/:id` | Fetch specific ride details | ✅ |
| `GET` | `/rides/my-rides` | Lists trips created or booked by the current user | ✅ |

#### Search Trips
```http
POST /rides/search
Authorization: Bearer <token>
Content-Type: application/json

{
  "origin": "University Gate",
  "destination": "Central Station",
  "date": "2026-06-01",
  "filters": {
    "priceRange": [0, 15]
  }
}
```

---

### 🎟️ Bookings API

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| `POST` | `/rides/book` | Book seats on an active trip (Requires ID Verification) | ✅ |
| `GET` | `/bookings` | Get all bookings of the authenticated user | ✅ |
| `PUT` | `/bookings/:id` | Update booking status (confirm/complete) | ✅ |
| `DELETE`| `/bookings/:id` | Cancel booking | ✅ |

#### Book Trip Seats
```http
POST /rides/book
Authorization: Bearer <token>
Content-Type: application/json

{
  "rideId": "64cdbf...",
  "passengerCount": 1,
  "agreedToTerms": true
}
```

---

## 🛡️ Safety & Verification Policy

The system implements rigorous server-side safety logic defined in [lib/safety.ts](file:///d:/Projects/RideShare/lib/safety.ts):

### 1. Gender Restriction Matching
- **Women Only**: Enforces that only passengers with `gender === "female"` can search for or book this ride.
- **Same Gender Only**: The booking user's gender must match the driver's gender.
- These rules are checked both at the search/query filter layer (removing incompatible rides from search outputs) and at the transaction booking route layer (throwing validation errors).

### 2. User Verification Gates
- Users cannot book or create rides unless both `verifiedEmail === true` and `verifiedStudentId === true` in the database.

---

## ⚙️ Configuration

### `.env.local` Variables
Create this file in the application root:
```env
MONGODB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/rideshare?retryWrites=true&w=majority
JWT_SECRET=use_openssl_rand_base64_32_to_generate_this_key
NEXT_PUBLIC_API_URL=http://localhost:3000
```

---

## 📦 Deployment

### Deploying to Vercel
1. Install Vercel CLI or connect your GitHub repository to Vercel dashboard.
2. Ensure you have added `MONGODB_URI`, `JWT_SECRET`, and `NEXT_PUBLIC_API_URL` to Vercel's environment settings.
3. Configure MongoDB Atlas Network Access rules to accept Vercel's serverless runtime queries (using `0.0.0.0/0` is recommended unless deploying inside a VPC).
