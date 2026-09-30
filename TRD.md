# TRD — Cushion

*Assumption: no stack was specified yet, so this proposes a hackathon-friendly
default. Swap any line below and it's still valid as long as the whole team
follows the same swap.*

## Frontend
- React (web) or React Native (if a mobile demo matters more than speed).
- State: plain React state / Context — no Redux for a build this size.

## Backend / data
- **Firebase**, specifically **Firestore** (not Realtime DB).
  Reason: the data here is documents (a user's salary plan, pockets, goals),
  not a live-sync feed — Firestore's document model fits better and its
  query support (filter goals by user, by pocket type) is easier to work
  with than Realtime DB's flat tree.
- **Firebase Auth** for login (email or phone OTP).
- **Firebase Cloud Functions** as the only thing allowed to call the
  chatbot API — the client never calls it directly (keeps the API key off
  the frontend).

## Chatbot API
- Claude API (or whichever provider the team has a key for), called only
  from a Cloud Function, only when the user taps "Ask Cushion" — never on
  page load, never on keystroke.

## Environments
- One Firebase project is enough for a hackathon — no separate
  staging/prod split needed.

## What every team member should assume unless this file changes
- Data lives in Firestore. Not localStorage, not component state that
  disappears on refresh.
- The chatbot is a Cloud Function call, not a direct client-side API call.
- Money-movement logic (pockets, withdrawal, invest %) is UI and data
  model only for this build — no real payment/investment integration is
  wired up; it's simulated against Firestore data.
