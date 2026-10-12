# Time Tracking — World Time & Currency

A responsive browser-based world clock, city comparison map, and currency converter.

## Live website
The GitHub Pages URL is expected to be:
https://saipujari7711-ui.github.io/time-tracking-/

## Features
- Live local clock and live clocks for up to 12 saved cities
- City search using the Open-Meteo Geocoding API
- IANA time-zone formatting, date, and UTC offset through browser Intl APIs
- Interactive Leaflet map using OpenStreetMap tiles
- Currency list and reference-rate conversion using Frankfurter
- Currency swap, validation, error messages, localStorage persistence, and light/dark themes
- Responsive mobile, tablet, and desktop layouts

## Deploy
Pushes to `main` automatically run `.github/workflows/deploy.yml`. The workflow configures GitHub Pages for Actions deployment, builds a static output folder, and publishes it. No API keys are required for the public endpoints currently used.

## Data sources and limitations
- Open-Meteo Geocoding: https://open-meteo.com/en/docs/geocoding-api
- Frankfurter: https://frankfurter.dev/
- Leaflet: https://leafletjs.com/
- OpenStreetMap attribution: https://www.openstreetmap.org/copyright

Exchange rates are reference rates and may not be suitable for trading. Live provider availability and browser end-to-end tests must be checked after deployment. When a provider fails, the application reports the error instead of inventing data.
