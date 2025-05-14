# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This project is a search application built with React Router 7, SST (Serverless Stack), and various AWS services. It features:

- Frontend: React with TailwindCSS
- Backend: Serverless API with Hono
- Infrastructure: SST for AWS deployments
- Testing: Magnitude for e2e testing

The application leverages vector search functionality with integration to OpenAI for embeddings and AWS services (DynamoDB, Vector database) for storage and search.

## Commands

### Development
- `npm run dev` - Start local development server with SST
- `npm run build` - Build the application
- `npm run typecheck` - Generate React Router types and check TypeScript

### Testing
- `npm test` - Run Magnitude tests
- Run a specific test: `npx magnitude app/routes/e2e.mag.ts`

### Deployment
- `npm run deploy` - Deploy to AWS (production)

## Architecture

### Frontend
- Built with React Router 7
- UI components are organized in `app/ui/components` and `app/ui/elements`
- TailwindCSS for styling

### Backend
- Hono-based API routes in `app/server/routes`
- Core logic in service layer (`app/core/services`) 
- Client abstractions for external services in `app/core/clients`

### Data Flow
1. User searches via the UI
2. Request goes to Hono API routes
3. Service layer processes request using clients:
   - `dynamoClient` - Checks if embedding exists in DynamoDB
   - `openAiClient` - Creates embeddings from search text if needed
   - `vectorClient` - Queries vector database for similar items

### Infrastructure
The SST configuration provisions:
- Vector database for embeddings storage and search
- DynamoDB table for metadata storage
- Lambda function for backend processing
- React app for frontend

### Testing
- Magnitude for e2e tests
- Example test file in `app/routes/e2e.mag.ts`

## Code Best Practices
- Always use descriptive variable names