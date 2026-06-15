/// <reference types="astro/client" />

interface Window {
  plausible?: ((...args: unknown[]) => void) & { q?: unknown[]; o?: unknown; init?: (opts?: unknown) => void };
}
