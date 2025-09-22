# Tech Stack Guidelines for banana-app

## Core Principles

- Single app in /app on banana.renai.uk running in production mode
- Fastify backend (API), Next.js frontend, Postgres database
- Everything runs in production mode
- Minimal stack for rapid development with AI tools
- Nginx proxies to PM2-managed Node.js processes

## Required Stack

- **Database**: PostgreSQL (direct connection, port 5432)
- **Backend**: Node.js (v20 LTS) + Fastify + TypeScript (/app/src)
- **Frontend**: Next.js + React + Tailwind + shadcn/ui (/app/frontend)
- **Process Manager**: PM2 running 'banana-api' and 'banana-web'
- **Proxy**: Nginx (/ → 3000, /api → 4000)
- **Environment**: .env file at /app/.env for all secrets

## Development Rules

- Backend: TypeScript Fastify routes in /app/src/index.ts
- Use @fastify/postgres for DB with process.env.DATABASE_URL
- Frontend: Next.js pages in /app/frontend/src/app
- Use shadcn/ui components from @/components/ui
- Always use relative URLs in frontend (/api/...)
- Restart with: pm2 restart banana-api or banana-web

## Future Ready

- Docker files prepared for easy portability
- Python venv ready for AI integrations
- Components compatible with React Native for mobile
