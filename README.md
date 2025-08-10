<h1 align="center">🤖 MockInterviewer</h1>
<p align="center">
  <b>AI-Powered Mock Interview Platform – Create & Attend via Link (Zoom-Style)</b><br/>
  Practice interviews, get AI-generated questions, and join sessions instantly via shareable links.
</p>

<p align="center">
  <a href="#"><img src="https://img.shields.io/badge/Next.js-14-black?logo=next.js" /></a>
  <a href="#"><img src="https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?logo=tailwind-css&logoColor=white" /></a>
  <a href="#"><img src="https://img.shields.io/badge/PostgreSQL-14-336791?logo=postgresql&logoColor=white" /></a>
  <a href="#"><img src="https://img.shields.io/badge/Prisma-ORM-2D3748?logo=prisma" /></a>
  <a href="#"><img src="https://img.shields.io/badge/OpenAI-GPT--4-412991?logo=openai&logoColor=white" /></a>
</p>

---

## 📌 Overview
**MockInterviewer** is a modern AI-powered mock interview platform that lets you:
- 📝 Create interview rooms  
- 🔗 Share a join link (just like Zoom)  
- 🎤 Conduct live video interviews  
- 💡 Get **real-time AI-generated questions**  
- 📄 Record & review answers for improvement  

It’s designed for **students, job seekers, and recruiters** who want a fast, intelligent, and interactive interview experience.

---

## 🚀 Live Demo
🔗 **[View Project on Vercel](https://your-deployed-link.vercel.app)** *(replace with actual)*

---

## 🛠️ Tech Stack

| Category        | Technologies |
|-----------------|--------------|
| **Frontend**    | Next.js, React, Tailwind CSS |
| **Backend**     | Node.js, Next.js API Routes |
| **Database**    | PostgreSQL |
| **ORM**         | Prisma |
| **Auth**        | Auth.js (NextAuth.js) |
| **AI Engine**   | OpenAI GPT-4 (custom prompts) |
| **Video**       | WebRTC / Zoom SDK |
| **Deployment**  | Vercel |

---

## ✨ Key Features

### 🎯 Interview Creation & Join via Link
- Host can create a session and share an **invite link** for participants  
- No sign-up needed for guests

### 🤖 AI-Powered Q&A
- AI generates questions based on:
  - Role / Job type
  - Technical or behavioral categories
  - Difficulty level

### 🎥 Live Video Interface
- Real-time video/audio streaming  
- Option to record sessions

### 📊 Feedback & Review
- Download session transcript  
- AI highlights weak areas & improvement tips  

---


## ⚡ Quick Start

```bash
# Clone repo
git clone https://github.com/somuraj07/mock-interview-L.git
cd mock-interview-L

# Install dependencies
npm install

# Set environment variables in .env
DATABASE_URL="your_postgresql_url"
NEXTAUTH_SECRET="your_secret"
OPENAI_API_KEY="your_openai_api_key"

# Run Prisma migrations
npx prisma migrate dev

# Start dev server
npm run dev
