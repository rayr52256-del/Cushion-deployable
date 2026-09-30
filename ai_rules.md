# ai_rules.md — house rules for Claude/Cursor/Copilot on Cushion

Paste or reference this file at the start of any AI coding session on this
project. If it's not written down here, the AI will guess — and five
different guesses is how a hackathon codebase falls apart by hour 3.

## Data
- Always use **Firestore**. Never localStorage, never sessionStorage, never
  component state as the source of truth for anything that should survive
  a refresh (salary plan, pockets, goals, withdrawal history).
- Follow the data shape already in `Architecture.md` and in Firestore
  itself — don't invent new fields or new top-level collections without
  checking first.

## Chatbot
- Only call the chatbot API from a Cloud Function, and only in response to
  an explicit user action (a button click). Never call it automatically on
  page load, on every keystroke, or on a timer.
- Never put the chatbot API key in frontend code.

## Money language
- Never generate copy that promises a guaranteed return or "100% back
  always." Investments (Growth Money) can rise or fall — say so.
- Cash and Safe Savings can be described as available/withdrawable; Growth
  Money should always mention that value and withdrawal timing can vary.

## Code hygiene
- Keep files small and single-purpose — one screen or one concern per
  file, not a growing catch-all component.
- Match existing naming conventions in the repo rather than introducing a
  new pattern per file.
- Before adding a new library or pattern, check whether the team already
  has one for this (e.g. don't add a second state-management library).

## When unsure
- If a decision isn't covered here or in `memory.md`, ask a teammate
  before assuming — and once decided, add it to `memory.md` so the next AI
  session doesn't re-litigate it.
