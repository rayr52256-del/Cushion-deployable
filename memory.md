# memory.md — running decision log

Keep this updated as the team makes decisions, especially ones an AI
session might otherwise re-litigate or reverse a few hours later. Add a
line, don't rewrite history — if a decision changes, add a new line noting
the change rather than deleting the old one.

## Decisions so far

- We're building the **first-salary survival** idea (Cushion), not the
  loneliness or shared-living ideas — chosen for clearest recurring need
  and strongest willingness to pay.
- Data lives in **Firestore**, not Realtime DB or localStorage — chosen
  because the data (salary plan, pockets, goals) is document-shaped, not a
  live-sync feed.
- The chatbot is called **only from a Cloud Function, only on button
  click** — never automatically — to control API usage and keep the key
  off the frontend.
- Build order is **Phase 1 (core budgeting) → Phase 2 (invest %) → Phase 3
  (chatbot)**, in that order, deploying after Phase 1 regardless of time
  left.
- Cushion **never pools or holds user funds** — money always moves
  directly between the user's own bank account and a regulated partner
  (bank / SEBI broker / AMC / RTA). This is a hard product constraint, not
  just a legal footnote.
- No guaranteed-return language anywhere in the product — Growth Money can
  rise or fall; only Cash/Safe Savings are described as reliably available.
- Phase 1 (Components 1–5) and Phase 2 (Components 6–7) implemented in React + TypeScript + Tailwind CSS.
- Decoupled `StorageAdapter` (`src/services/storageAdapter.ts`) implemented matching the Firestore document paths (`users/{userId}/salaryPlan`, `pockets`, `goals`, `withdrawals`), providing local persistence for the prototype while ready for seamless Firebase drop-in.
- Phase 3 (Chatbot Assistant with Google Gemini Free API key integration):
  - `.env.example` and `.env` configured with `VITE_GEMINI_API_KEY` placeholder.
  - Interactive UI key settings configured in `ChatbotDrawer.tsx` allowing instant pasting of free Gemini keys (direct from Google AI Studio).
  - Contextual system prompt injects live financial data and enforces strict regulatory guardrails (no stock/fund advice, no guaranteed return language, emergency fund cash-only).
  - Firebase Cloud Function backend template implemented in `functions/index.js` matching `Architecture.md` for production key protection.

## How to use this file
When an AI session (or a teammate) asks "wait, why did we pick X over Y?" —
the answer should already be here. If it isn't, that's a sign to add it
once the question gets answered, so it doesn't get re-asked in three
hours.
