# AI Prompting Guide for banana-app

## Context to Provide
"I'm building a production web app at /app using:
- Fastify TypeScript backend on port 4000
- Next.js TypeScript frontend on port 3000
- PostgreSQL database
- shadcn/ui components
- PM2 for process management
- Everything runs in production mode"

## Example Prompts

### Create API Endpoint
"Create a Fastify route in TypeScript at /app/src/index.ts
for POST /api/users. Use @fastify/postgres to insert into users table.
Load DATABASE_URL from process.env."

### Create Frontend Page
"Create a Next.js page at /app/frontend/src/app/dashboard/page.tsx
using TypeScript. Import Card from @/components/ui/card.
Fetch data from /api/users using relative URL."

### Database Migration
"Create SQL to add a users table with id (serial primary key),
email (unique), created_at (timestamp). Run in postgres database."

### Add shadcn Component
"Show how to add and use the shadcn/ui DataTable component
in /app/frontend for displaying user data."

## Deployment Commands
pm2 restart banana-api  # Restart backend
pm2 restart banana-web  # Restart frontend
pm2 logs               # View all logs
pm2 logs banana-api    # View backend logs
pm2 logs banana-web    # View frontend logs
