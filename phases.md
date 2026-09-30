# phases.md — build order for Cushion

Given API limits and a fixed clock, build order matters more than almost
anything else in this repo. Follow it in order — don't skip ahead to the
chatbot because it's the fun part.

## Phase 1 — Core app, no chatbot, no real investing
Build this fully, end to end, and **deploy it**, before touching anything
else:
- Onboarding → salary plan
- Safe-to-save calculation
- Emergency fund tracker
- Goal pockets (add/view/progress)
- Withdrawal explainer

If the clock runs out here, you still have a real, demoable app: a person
can enter their salary and get an honest plan back.

## Phase 2 — Invest a % + lock-in agreement
Only start this once Phase 1 is deployed and working:
- Three-pocket view (Cash / Safe Savings / Growth Money)
- "Invest a %" flow with the e-signed lock-in agreement
- All of this can be simulated against Firestore — no real payment or
  brokerage integration is required for a hackathon demo.

## Phase 3 — Chatbot (last, only if time remains)
- Wire in the chatbot as the very last step.
- Button-triggered only, calling the Cloud Function, never automatic.
- If you run out of time here, that's fine — Phases 1 and 2 already stand
  on their own.

## The rule
**Do not start Phase 2 until Phase 1 is deployed. Do not start Phase 3
until Phase 2 works.** A team that only finishes Phase 1 has something real
to show a judge. A team that half-builds a chatbot around nothing does not.
