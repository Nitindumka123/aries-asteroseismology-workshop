# ARIES Registration Setup

This guide covers the TEST registration path only. It does not expose the Google Sheet or replace the Google authorization step.

Use the test Google account `dumkanitin0@gmail.com` only.

## What is already prepared

- The Apps Script backend requires the exact test spreadsheet ID and opens it with `SpreadsheetApp.openById`.
- The script writes one submitted registration as one new row.
- The script creates the required headers automatically when row 1 is empty and rejects mismatched headers.
- The frontend uses the test Web App URL by default and can override it with `PUBLIC_GOOGLE_SCRIPT_WEBAPP_URL`.

## Test Setup Flow

Follow these steps exactly while signed into `dumkanitin0@gmail.com`.

1. Sign in to Google as `dumkanitin0@gmail.com`.
1. Open the exact empty TEST Google Sheet. Do not use an old or production spreadsheet.
1. Copy the spreadsheet ID from its URL. For `https://docs.google.com/spreadsheets/d/ABC123/edit`, the ID is `ABC123`.
1. In `public/google-apps-script.js`, set `TEST_SPREADSHEET_ID` to that ID. Leave `TEST_SHEET_NAME` blank to use the first tab, or set it to the exact test tab name.
1. Do not manually add headers. The script creates and verifies them automatically on the first POST.

```text
Registration ID | Timestamp | Event ID | Event Name | Applicant Type | Full Name | Email | Phone | Institution | Designation | City | State | Country | Research Interest | Passport Number | Date of Birth | Address | Passport Issue Date | Passport Issue Place | Passport Expiry Date | Custom Responses | Consent
```

1. Open `Extensions` -> `Apps Script`.
1. Replace the default code in `Code.gs` with the contents of `public/google-apps-script.js`.
1. Save the script.
1. Click `Deploy` -> `New deployment`.
1. Select deployment type `Web app`.
1. Set `Execute as` to `Me (dumkanitin0@gmail.com)`.
1. Set `Who has access` to `Anyone` for this TEST endpoint.
1. Click `Deploy`.
1. When Google shows the OAuth/consent screen, authorize the script using `dumkanitin0@gmail.com`.
1. If Google shows the unverified-app warning, click `Advanced`, then click the continue link for the Apps Script project, then click `Allow`.
1. Copy the Web App URL that ends with `/exec`.
1. Confirm it is the test URL configured in `src/pages/registration.astro` or set `PUBLIC_GOOGLE_SCRIPT_WEBAPP_URL` to the new test URL.

## Frontend / Cloudflare Configuration

The website uses the configured test Web App URL at build time.

- If you build locally, set `PUBLIC_GOOGLE_SCRIPT_WEBAPP_URL` in your local environment before running the build.
- If Cloudflare builds the site, set `PUBLIC_GOOGLE_SCRIPT_WEBAPP_URL` in the test environment to the test Web App URL.

The frontend will refuse to submit if the test endpoint is missing.

## Verification Checklist

Use this checklist after Google authorization is complete.

1. Open the local or Cloudflare site and submit one Indian test registration.
1. Confirm exactly one new row was added to the configured test spreadsheet.
1. Submit one Foreign National test registration and confirm exactly one additional row was added.
1. Confirm the row values map correctly to the headers:
   - `Institution` contains the submitted institution.
   - `Research Interest` contains the submitted research interest.
   - Indian passport columns are blank.
   - Foreign passport columns contain the submitted passport values.
   - `Custom Responses` contains the JSON payload for the additional form fields.

## Notes

- The Apps Script authorization must be completed by `dumkanitin0@gmail.com` only.
- No password, OTP, recovery code, or other private credentials should be shared.
- The TEST Sheet should remain private to the test account.
- The registration system should not be called verified until Google authorization and both test rows are confirmed in the Sheet.
