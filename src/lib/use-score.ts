"use client";

import { useCallback, useSyncExternalStore } from "react";

const STORAGE_KEY = "rps-score";
const SAME_TAB_EVENT = "rps-score-change";

function read() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw === null) return 0;
    const value = Number(raw);
    return Number.isFinite(value) ? value : 0;
  } catch {
    return 0;
  }
}

function subscribe(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(SAME_TAB_EVENT, onStoreChange);
  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(SAME_TAB_EVENT, onStoreChange);
  };
}

export function useScore() {
  const score = useSyncExternalStore(subscribe, read, () => 0);

  const addToScore = useCallback((delta: number) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, String(read() + delta));
    } catch {
      // Storage can be unavailable (private mode, quota). The round still
      // resolves; only persistence is lost.
    }
    window.dispatchEvent(new Event(SAME_TAB_EVENT));
  }, []);

  return [score, addToScore] as const;
}
