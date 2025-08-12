# covr — Third-Party Risk Tracking SaaS

**Goal:** Track vendors, collect security docs, and alert on breaches or expiring compliance documents.

## MVP Scope (3–4 weeks)
- Auth & RBAC (Org-scoped)
- Vendor registry & risk score
- Document upload to S3 (presigned)
- Expiry sweeps (Inngest + Vercel Cron)
- Breach watcher (RSS → Incidents)
- Tasks & simple workflows
- Audit log; Slack/Email notifications

## Tech Stack
Next.js 15 (App Router), React 18, TypeScript 5, Auth.js v5, Prisma 5, Postgres (Supabase), Inngest, Upstash Redis, S3, Resend/SES, Tailwind + shadcn/ui, Jest/RTL, Playwright, Sentry, Vercel.

# Build Checklist (MVP)

- [ ] Phase 1: Scaffold Next.js + Tailwind + shadcn
- [ ] Phase 2: First deploy (Vercel) + /healthz
- [ ] Phase 3: Auth + Orgs + RBAC
- [ ] Phase 4: Vendor CRUD
- [ ] Phase 5: Document intake (S3 presigned)
- [ ] Phase 6: Expiry sweeps (Inngest + Cron)
- [ ] Phase 7: Breach watcher (RSS → incidents)
- [ ] Phase 8: Tasks
- [ ] Phase 9: Audit log
- [ ] Phase 10: Notifications (Slack/Email)
- [ ] Phase 11: Sentry + rate limits
- [ ] Phase 12: Tests + CI
- [ ] Phase 13: Polish + seed

MIT License

Copyright (c) ...
[standard MIT text]