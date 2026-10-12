# Meridian — World Time & Currency

A browser-based world clock and currency comparison website. This rebuild is being developed on `rebuild/time-tracking-v1`; the original `main` branch is preserved.

## Features

- Search cities with Open-Meteo Geocoding and choose from disambiguated results.
- Interactive Leaflet map with OpenStreetMap tiles and synchronized, accurately geocoded markers.
- Live per-second clocks for up to 12 cities, including weekday/date, IANA time zone, UTC offset, and offset difference from the visitor's device time zone.
- IANA time-zone calculations through browser `Intl.DateTimeFormat`, not hard-coded offsets.
- Saves non-sensitive pinned-city preferences in local storage and safely handles malformed stored data.
- Looks up a city's currency using REST Countries.
- Converts currencies using Frankfurter, showing the provider's rate date and never fabricating fallback rates.
- Responsive desktop/mobile layout, keyboard city search, labelled controls, and loading/error states.

## Requirements

A modern browser with JavaScript, `fetch`, `Intl.DateTimeFormat`, and local storage, plus internet access for the external data services. No API keys or build step are required for this static frontend.

## Run locally

Serve the repository root over HTTP instead of opening the file directly:

```bash
python -m http.server 8000
```

Open `http://localhost:8000`. Any static web server will also work.

## Data providers and limitations

- **City search and time-zone metadata:** Open-Meteo Geocoding API, `https://geocoding-api.open-meteo.com/v1/search`. Review the provider's current terms and attribution requirements before commercial/high-volume use.
- **Map:** Leaflet 1.9.4 and OpenStreetMap standard tiles. Attribution is included. Standard tile-service usage policies apply; do not treat the public tile service as an unlimited high-volume backend.
- **Country currency metadata:** REST Countries, `https://restcountries.com/v3.1/alpha/{code}`. This lookup is optional; failures do not prevent clocks from working.
- **Exchange rates/currency list:** Frankfurter, `https://api.frankfurter.dev/v2/currencies` and `https://api.frankfurter.dev/v2/rate/{base}/{quote}`. Rates may be delayed and are reference rates, not guaranteed bank/payment execution rates.

The app does not show a guessed rate if the provider is unreachable, a pair is unsupported, or a response is invalid. Third-party availability, CORS, terms, and rate limits should be checked before production use.

## Configuration and security

- No secret API keys are required or embedded in the frontend.
- If a future provider requires a private key, do not place it in browser code; add a server-side API boundary and configure secrets in the hosting platform.
- Local storage contains pinned city metadata only, not credentials.

## Tests and verification

This is a static HTML/CSS/JavaScript app; it does not yet include a package manager or automated browser-test framework. Before production acceptance, verify:

1. Common/ambiguous city names, empty searches, no matches, and network failures.
2. Pin/remove/clear cities and reload to verify persistence.
3. Confirm map markers match selected coordinates.
4. Check clocks/date rollover, including daylight-saving regions.
5. Convert supported pairs, swap currencies, test invalid amounts, and test provider errors.
6. Check browser console/network failures.
7. Test keyboard-only operation, a screen reader, and narrow mobile layouts.

These checks must not be reported as passed until actually performed in a browser. Automated and live-deployment verification remain outstanding.

## Deployment (only after review/approval)

1. Review the rebuild branch and diff.
2. In repository Settings → Pages, choose the intended branch/root only after explicitly approving the deployment target.
3. Wait for publication, then use the actual URL shown in Settings → Pages and verify the deployed version.
4. Production hosting has not been changed by this rebuild.

## Rollback

The original `main` branch was left unchanged. To return to the prior repository state, select `main` in GitHub or simply continue using it. Do not merge `rebuild/time-tracking-v1` until its diff and test evidence have been reviewed.

## Current status

Implementation is on `rebuild/time-tracking-v1`. No production deployment has been performed. Automated browser tests and live-deployment verification are not yet complete.
