# ​ MockInterviewer – AI-Powered Mock Interview Platform

**MockInterviewer** is a modern, full-stack web application that enables users to **create and attend AI-driven mock interviews via shareable video links**, resembling a seamless Zoom-like experience. Ideal for practice, assessments, and interview prep with AI-based question generation and session recording.

---

##  Why MockInterviewer?

- **AI-Driven Interview Experience**: Simulate real interviews with intelligently generated questions.
- **Invite via Link**: Share session links just like Zoom for easy access.
- **Role-based Flow**: Interviewers and candidates each get a custom interface.
- **Session Management**: Start, pause, and end mock interviews with time tracking.
- **Review & Feedback**: Optionally record sessions or transcripts for review.

---

##  Tech Stack

| Layer        | Technologies |
|--------------|--------------|
| **Frontend** | Next.js, React, Tailwind CSS |
| **Backend**  | Node.js, Next.js API Routes / Express |
| **AI Engine**| OpenAI GPT-4 or custom prompt-based LLM |
| **Database** | PostgreSQL (or MongoDB) |
| **ORM**      | Prisma (if using SQL database) |
| **Auth**     | Auth.js (NextAuth.js) |
| **Video**    | WebRTC or Zoom SDK for real-time video |
| **Deployment** | Vercel or similar |

---

##  Features Overview

- **User Flow**
  - Register or sign in
  - Create mock-interview sessions
  - Copy and share session link
  - Join via link—no account needed for guest participants

- **AI Interaction**
  - AI generates tailored interview questions (behavioral/technical)
  - Optional hints & trending questions based on domain

- **Session Controls**
  - Real-time video/audio via WebRTC or Zoom integration
  - Timer and session logs for accountability

- **Review Mechanism**
  - Download session recording or transcript
  - Annotate answers and self-reflect

---

##  Installation & Setup

```bash
# Clone the repository
git clone https://github.com/somuraj07/mock-interview-L.git
cd mock-interview-L

# Install dependencies
npm install

# Set environment variables via .env
# e.g. DATABASE_URL, OPENAI_API_KEY, NEXTAUTH_SECRET, ZOOM_SDK_KEY/SECRET

# Run database migrations (if using Prisma)
npx prisma migrate dev

# Start the development server
npm run dev
