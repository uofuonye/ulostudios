# Azure Migration Design — ulostudios.com
Date: 2026-07-02

## Overview

Migrate ulostudios.com from Vercel to Azure Static Web Apps (Free tier) using hybrid Next.js mode. Static pages are served from Azure's global CDN; the `/api/contact` route runs as a managed Azure Function.

## Architecture

- **Service**: Azure Static Web Apps (Free tier)
- **Mode**: Hybrid Next.js (static CDN pages + managed Azure Functions for API routes)
- **Repo**: https://github.com/uofuonye/ulostudios
- **Branch**: main
- **Azure Subscription**: Primary (7591d6a9-95cd-4c35-84d1-eba73a9371a0)

## CI/CD Pipeline

Azure SWA auto-generates a GitHub Actions workflow on resource creation. Every push to `main` triggers `next build` and deploys. No manual workflow authoring required.

## Environment Variables

Stored in Azure SWA application settings (not in any file):
- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`
- `CONTACT_TO_EMAIL`

## Domain Migration

1. Add `ulostudios.com` in Azure SWA → get CNAME/TXT verification record
2. Update DNS at registrar to point to Azure SWA
3. Azure provisions free SSL automatically
4. Keep Vercel active until DNS propagation confirmed, then remove

## Code Changes

None required. `next.config.ts` is already compatible (no `output: 'export'` set).
