# Gadgets Baron & Technology — Invoice & Receipt System

Standalone professional invoice and receipt application for Gadgets Baron & Technology. RC 8752458.

The application includes Modern Invoice, Classic Ledger and Classic Receipt templates; editable documents; A4, A5 and Letter layouts where available; and PDF/PNG exports.

## Start

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm qualify
pnpm dev
```

## Official branding images

Replace the included temporary branded images with the official exports using exactly these paths:

| Image | Repository path | Design size |
| --- | --- | --- |
| Horizontal logo | `public/GadgetsBaron.png` | 1200 × 480 PNG |
| Square icon | `public/GadgetsBaronIcon.png` | 1024 × 1024 PNG |
| Classic Ledger header | `public/branding/classic-ledger/ledger-header.png` | 2400 × 520 PNG |
| Classic Receipt header | `public/branding/classic-receipt/receipt-header.png` | 2400 × 360 PNG |

Primary #FF5232. Secondary #462B3C. Invoice prefix GBT.

## Important note

This standalone edition retains the original application's browser-local invoice drafts and browser-verified 4-digit access lock. This PIN is not server-side authentication. Keep exported copies of invoices and receipts; records are not synchronized across browsers or devices.

Copyright Octalve.
