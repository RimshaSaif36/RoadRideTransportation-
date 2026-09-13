# RoadRide Backend

Express + MongoDB API backing the RoadRide Transportation site: stores booking and
contact form submissions, and serves the admin dashboard (login + list bookings/messages).

## Setup

1. `npm install`
2. Copy `.env.example` to `.env` and fill in:
   - `MONGODB_URI` — your MongoDB Atlas connection string.
   - `JWT_SECRET` — any long random string.
   - `ADMIN_EMAIL` / `ADMIN_PASSWORD` — the credentials you want to log into `/admin` with.
   - `FRONTEND_ORIGIN` — the frontend's URL (comma-separate multiple, e.g. local + production).
3. `npm run seed` — creates (or updates) the single admin account from `ADMIN_EMAIL`/`ADMIN_PASSWORD`.
   Safe to re-run any time you want to change the admin password.
4. `npm run dev` — starts the API on `http://localhost:4000` (or `PORT` from `.env`), reloading on file changes.

The frontend (`frontend-react/`) needs `REACT_APP_API_URL` pointing at this server —
see `frontend-react/.env.example`.

## Endpoints

| Method | Path | Auth | Purpose |
|---|---|---|---|
| POST | `/api/bookings` | public | Submit a booking (from the site's booking form) |
| GET | `/api/bookings` | admin | List all bookings, newest first |
| PATCH | `/api/bookings/:id` | admin | Update a booking's status |
| POST | `/api/contact` | public | Submit a contact message |
| GET | `/api/contact` | admin | List all contact messages, newest first |
| POST | `/api/auth/login` | public | Admin login, returns a JWT |
| GET | `/api/auth/me` | admin | Returns the decoded token payload (sanity check) |
| GET | `/health` | public | `{ ok: true }` if the server and DB connection are up |

Admin routes require `Authorization: Bearer <token>` from `/api/auth/login`.

## Production

This is a normal long-running Express app (not a serverless function) — it needs a
persistent Node host such as Render, Railway, or Fly.io. Set the same environment
variables there, run `npm run build && npm start`, and update the frontend's
`REACT_APP_API_URL` to the deployed URL.
