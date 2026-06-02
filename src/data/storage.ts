import { GeneratedContent } from "../types";

const STORAGE_KEY = "yiruda.generated.contents";

export function loadContents(): GeneratedContent[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as GeneratedContent[]) : [];
  } catch {
    return [];
  }
}

export function saveContents(contents: GeneratedContent[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(contents));
}

export function saveContent(content: GeneratedContent) {
  const next = [content, ...loadContents()];
  saveContents(next);
  return next;
}
