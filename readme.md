🚀 Startup Benefits Platform

Full-Stack Developer Assignment

📌 Overview

The Startup Benefits Platform is a full-stack web application designed to help early-stage startups access exclusive SaaS deals and partnerships.

Many startups cannot afford premium tools during their initial stages. This platform centralizes public and restricted startup deals, allowing founders to browse, understand eligibility, and claim benefits through a secure and structured flow.

The focus of this project is clarity of application flow, clean architecture, secure authentication, and thoughtful UI/UX, rather than excessive features.

🧠 Business Context
Target Users

Startup founders

Early-stage teams

Indie hackers

Core Problem

Early-stage startups struggle to afford essential SaaS tools like cloud services, marketing platforms, analytics, and productivity software.

Solution

This platform provides:

A curated list of startup deals

Public and locked (verification-required) deals

Secure claiming and tracking of benefits

🏗️ Tech Stack
Frontend

Next.js (App Router)

TypeScript

Tailwind CSS

Framer Motion (animations)

Axios for API communication

Backend

Node.js

Express.js

MongoDB

Mongoose

JWT-based authentication

🔁 End-to-End Application Flow

User registers and logs in

JWT token is issued and stored on the client

User browses available deals

Locked deals clearly indicate verification requirements

User attempts to claim a deal

Backend validates eligibility and verification status

Claimed deals appear in the user dashboard with status tracking

🔐 Authentication & Authorization Strategy

Authentication is handled using JWT (JSON Web Tokens)

Tokens are generated on successful login and stored on the client

Protected backend routes require a valid JWT

Middleware verifies token and attaches user identity to requests

Authorization Rule

Unverified users are not allowed to claim locked deals

Backend strictly enforces this rule before creating a claim

This ensures security is handled at the API level, not just in the UI.

🧩 Core Backend Entities
User

Email

Hashed password

Verification status

Created timestamp

Deal

Title and description

Category

Partner information

Locked / unlocked status

Eligibility conditions

Claim

Linked user and deal

Claim status (pending / approved)

Timestamp

MongoDB creates databases and collections lazily when the first document is inserted, ensuring clean and efficient storage.

🔄 Claiming a Deal – Internal Flow

User clicks Claim Deal

JWT token is validated

Backend fetches the deal

If the deal is locked:

User verification status is checked

Duplicate claims are prevented

A new claim is created with pending status

Claim appears in the user dashboard

This flow ensures data integrity, security, and clear state tracking.

🎨 Frontend UI & Animation Strategy

The UI follows a modern SaaS design philosophy:

Clean layouts

Clear visual hierarchy

Minimal but purposeful animations

Animations Implemented

Page entrance transitions

Hover effects on interactive cards

Button feedback

Loading states

Animations are implemented using Framer Motion to enhance usability without overwhelming the user.

📂 Frontend–Backend Interaction

Frontend communicates with backend via REST APIs

Axios is configured with an interceptor to attach JWT tokens

Backend responses drive UI state (locked deals, claim status, errors)

This separation ensures scalability and maintainability.

⚠️ Known Limitations

No email verification flow (mocked via boolean flag)

No admin dashboard for approving claims

No role-based access control

No deployment included

These were intentionally excluded to prioritize core flow correctness and code clarity.

🚀 Production Improvements

If extended for production use:

Email-based verification

Admin moderation panel

Role-based permissions

Refresh tokens for authentication

Rate limiting and audit logs

Improved accessibility and performance optimization

📊 UI & Performance Considerations

Components are modular and reusable

Animations are lightweight and intentional

API calls are centralized

Layouts are responsive and mobile-friendly

📁 Project Structure
/backend
  ├── controllers
  ├── models
  ├── routes
  ├── middleware
  └── config

/frontend
  ├── app
  ├── components
  ├── lib
  └── styles

🧪 How to Run Locally
Backend
cd backend
npm install
npm run dev

Frontend
cd frontend
npm install
npm run dev