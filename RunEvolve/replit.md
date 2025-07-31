# Replit.md

## Overview

This is a full-stack web application built with a modern tech stack featuring React with TypeScript on the frontend, Express.js on the backend, and PostgreSQL database with Drizzle ORM. The application appears to be a landing page for a fitness/running course called "RunEvolution" with marketing features like countdown timers and purchase notifications.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Radix UI primitives with custom styling

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful API with `/api` prefix
- **Session Management**: In-memory storage with planned PostgreSQL sessions
- **Development**: Hot reload with Vite integration

### Database Layer
- **Database**: PostgreSQL (configured but may need setup)
- **ORM**: Drizzle ORM with type-safe queries
- **Schema Location**: `shared/schema.ts` for shared types
- **Migrations**: Managed through `drizzle-kit`

## Key Components

### Frontend Components
- **Landing Page**: Marketing-focused home page with countdown timer
- **UI Library**: Complete shadcn/ui component set (buttons, cards, forms, etc.)
- **Custom Components**: 
  - CountdownTimer: Real-time countdown display
  - PurchaseNotification: Fake purchase alerts for social proof

### Backend Services
- **Storage Interface**: Abstracted storage layer with memory implementation
- **Route Registration**: Centralized route management system
- **Error Handling**: Global error middleware
- **Request Logging**: Detailed API request/response logging

### Shared Resources
- **Schema**: Drizzle schema with User model
- **Types**: Shared TypeScript interfaces between client/server

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **API Layer**: Express routes handle requests with storage abstraction
3. **Data Layer**: Currently uses in-memory storage, designed for PostgreSQL migration
4. **Response Flow**: JSON responses with standardized error handling

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL connection for serverless environments
- **@tanstack/react-query**: Server state management
- **drizzle-orm**: Type-safe database queries
- **express**: Web application framework

### UI Dependencies
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library

### Development Tools
- **vite**: Build tool and dev server
- **tsx**: TypeScript execution for development
- **esbuild**: Production bundling

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds React app to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Development**: Concurrent frontend/backend with hot reload

### Environment Setup
- **Database**: Requires `DATABASE_URL` environment variable
- **Sessions**: PostgreSQL session store configuration ready
- **Production**: Single Node.js process serving both API and static files

### Scripts
- `npm run dev`: Development mode with hot reload
- `npm run build`: Production build for both frontend and backend
- `npm run start`: Production server
- `npm run db:push`: Deploy database schema changes

## Notes for Development

- The application uses a memory-based storage system that can be easily swapped for PostgreSQL
- Database schema is already defined but may need PostgreSQL setup
- The frontend is a marketing landing page with interactive elements
- All UI components follow the shadcn/ui design system
- The architecture supports easy scaling from development to production