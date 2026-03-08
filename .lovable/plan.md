

# Implementation Plan: Authentication + User Profiles

## Overview
Add Email + Google sign-in with user profiles, migrating quiz progress from localStorage to the database so it syncs across devices.

## Database Changes

**1. `profiles` table**
- `id` (uuid, FK to auth.users, PK)
- `student_name` (text)
- `avatar_url` (text, nullable)
- `created_at`, `updated_at` (timestamps)
- RLS: users can read/update only their own profile

**2. `quiz_attempts` table**
- `id` (uuid, PK)
- `user_id` (uuid, FK to profiles)
- `grade`, `subject`, `chapter`, `difficulty` (text)
- `score` (integer), `correct_answers` (integer), `total_questions` (integer)
- `time_spent` (text)
- `attempted_at` (timestamptz)
- RLS: users can insert/read only their own attempts

**3. Trigger**: Auto-create profile row on user signup via `auth.users` trigger.

## Auth Configuration
- Enable Email auth (with email confirmation disabled per prior conversation)
- Configure Google OAuth using Lovable Cloud managed credentials
- Use `lovable.auth.signInWithOAuth("google")` for Google sign-in

## Frontend Changes

**New pages/components:**
- `AuthPage.tsx` — Login/Register form with email + Google sign-in button
- `AuthProvider` context — wraps app, provides `user`, `session`, `signOut`
- `ProtectedRoute` component — redirects unauthenticated users to auth page

**Modified files:**
- `App.tsx` — Add AuthProvider, add `/auth` route, protect routes that need auth
- `performanceUtils.ts` — Add functions to read/write quiz attempts from database instead of localStorage; keep localStorage as offline fallback
- `ProfilePage.tsx` — Load/save profile from database, show user email
- `Index.tsx` — Show login/logout button, user greeting
- `Results.tsx` — Save quiz results to database when authenticated

## Routes
- `/auth` — public, login/register page
- All other routes — accessible but quiz saving requires auth
- Profile/Performance pages — protected (require auth)

## Data Migration
On first login, check localStorage for existing quiz data and migrate it to the database, then clear local copy.

## Technical Notes
- Google sign-in uses `@lovable.dev/cloud-auth-js` package via Configure Social Login tool
- Email sign-in uses standard `supabase.auth.signInWithPassword` / `signUp`
- Session managed via `supabase.auth.onAuthStateChange`

