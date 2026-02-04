# Olimi - AI Agent Management Platform

A Next.js-based application for managing and configuring AI agents for outbound and inbound calls.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm**, **yarn**, **pnpm**, or **bun** package manager

## Getting Started

### 1. Install Dependencies

Navigate to the project directory and install required packages:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 2. Run the Development Server

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### 3. Open in Browser

Open [http://localhost:3000](http://localhost:3000) in your web browser to see the application.

The page will auto-update as you make changes to the code.

## Project Structure

- `app/` - Next.js app directory with pages and components
- `lib/` - Utility functions and schemas (includes `agentSchema`)
- `components/` - Reusable UI components

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

## Deployment

To deploy on Vercel:

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com/new)
3. Import your repository
4. Vercel will automatically detect Next.js and deploy

For detailed instructions, see [Next.js Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## Troubleshooting

**Port 3000 already in use?**

```bash
npm run dev -- -p 3001
```

**Clear cache and reinstall:**

```bash
rm -r node_modules package-lock.json
npm install
npm run dev
```
