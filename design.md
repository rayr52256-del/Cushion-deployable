# design.md — Cushion

## Screens

1. **Onboarding**
   - Enter salary, fixed bills, debt, savings goal.
   - Ends on the safe-to-save number being shown for the first time.

2. **Dashboard (home)**
   - Safe-to-save amount for this period, front and center.
   - Snapshot of the three pockets: Cash / Safe Savings / Growth Money.
   - Emergency fund progress.

3. **Goal pockets**
   - List of named goals (rent deposit, travel, laptop, etc.) with
     progress bars.
   - Add/edit a goal.

4. **Pockets detail (Cash / Safe Savings / Growth Money)**
   - Balance, what it's for, and the honest promise for that pocket
     (instant / short lock-in / market-linked).
   - Entry point to "Invest a %" if Phase 2 is reached.

5. **Invest a % (Phase 2)**
   - Choose percentage → review terms → e-sign the lock-in agreement.
   - Plain-language: exact lock-in period, what happens on early exit.

6. **Withdrawal explainer**
   - Before any withdrawal is confirmed: expected time, any charges,
     whether value can change.

7. **Chatbot assistant (Phase 3, only if time allows)**
   - Opened via a single "Ask Cushion" button, not a persistent
     always-open chat.
   - Answers budgeting questions using the user's own Firestore data as
     context.

## Navigation
Onboarding → Dashboard is the spine. From Dashboard, every other screen is
one tap away and returns to Dashboard. The chatbot is an overlay, not a
new navigation branch — it shouldn't require leaving the current screen.

## Why this order matters
Every screen should look and feel like it belongs to the same app — same
pocket names, same safe-to-save language, same tone (calm, non-judgmental,
never guilt-inducing) — whether it was built by the person who did the
Dashboard or the person who did Goal pockets.
