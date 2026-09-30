# Architecture — Cushion

## The picture everyone should have in their head

```
┌────────────┐        ┌───────────────────┐
│  Frontend  │──────▶│  Firebase Auth      │  (login)
│ (React)    │        └───────────────────┘
│            │        ┌───────────────────┐
│            │◀──────▶│  Firestore          │  (salary plan, pockets,
│            │        │                     │   goals, withdrawal state)
└─────┬──────┘        └───────────────────┘
      │
      │  only on "Ask Cushion" button click
      ▼
┌────────────────────┐        ┌────────────────┐
│  Cloud Function      │──────▶│  Chatbot API    │
│  (holds the API key) │◀──────│  (Claude/etc.)  │
└────────────────────┘        └────────────────┘
```

## Rules this diagram implies
- The frontend talks to Firebase directly for everything except the
  chatbot. It never talks to the chatbot API directly.
- The chatbot API is only ever called from inside a Cloud Function, and
  only in response to an explicit button click — never automatically, never
  on every keystroke or screen load.
- There is no other backend. If a screen needs data, it comes from
  Firestore. If it's not in Firestore, it doesn't exist yet.
- Pockets (Cash / Safe Savings / Growth Money), goals, and the safe-to-save
  number are all documents in Firestore under the user's ID — not
  recalculated from scratch by each screen, and not duplicated across
  screens in local state that can drift out of sync.

## Why this matters for a 3–4 person team
Everyone building a different screen (dashboard, goals, withdrawal,
chatbot) is reading and writing the *same* Firestore documents. If one
person builds against a different shape of data, the app won't fit
together at integration time. When in doubt about a field name or data
shape, check this file and Firestore's actual schema — don't invent a new
one for your screen.
