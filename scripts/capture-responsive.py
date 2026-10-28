"""Capture viewport screenshots and report horizontal overflow.

Requires Playwright and Chromium:

    python3 -m venv .venv-shots
    .venv-shots/bin/pip install playwright
    .venv-shots/bin/playwright install chromium
    .venv-shots/bin/python scripts/capture-responsive.py

The dev server must already be running. Override the URL with PORTFOLIO_URL.
"""

import os
from pathlib import Path

from playwright.sync_api import sync_playwright

URL = os.environ.get("PORTFOLIO_URL", "http://127.0.0.1:3456")
OUT = Path(__file__).resolve().parents[1] / "responsive-screenshots"
OUT.mkdir(parents=True, exist_ok=True)

VIEWPORTS = [
    ("mobile-320", 320, 700),
    ("mobile-375", 375, 812),
    ("mobile-390", 390, 844),
    ("tablet-768", 768, 1024),
    ("laptop-1024", 1024, 768),
    ("laptop-1280", 1280, 800),
    ("laptop-1440", 1440, 900),
    ("laptop-1920", 1920, 1080),
]


def overflow(page) -> int:
    return page.evaluate(
        "() => document.documentElement.scrollWidth - document.documentElement.clientWidth"
    )


def main() -> None:
    with sync_playwright() as playwright:
        browser = playwright.chromium.launch()
        for name, width, height in VIEWPORTS:
            page = browser.new_page(viewport={"width": width, "height": height})
            page.goto(URL, wait_until="networkidle")
            page.wait_for_timeout(300)
            shot = OUT / f"{name}-hero.png"
            page.screenshot(path=str(shot))
            print(f"{name} hero overflow={overflow(page)} {shot}")
            page.evaluate(
                """async () => {
                  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
                  for (let y = 0; y < document.body.scrollHeight; y += 600) {
                    window.scrollTo(0, y);
                    await delay(40);
                  }
                }"""
            )
            page.evaluate("() => window.scrollTo(0, document.body.scrollHeight)")
            page.wait_for_timeout(200)
            end = OUT / f"{name}-end.png"
            page.screenshot(path=str(end))
            print(f"{name} end overflow={overflow(page)} {end}")
            page.close()
        browser.close()


if __name__ == "__main__":
    main()
