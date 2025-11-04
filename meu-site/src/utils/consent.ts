import { ConsentData } from '../types';

export const STORAGE_KEY = 'cotidente.consentimentoPrivacidade.v1';

export function getConsent(): ConsentData | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as ConsentData;
  } catch {
    return null;
  }
}

export function hasAccepted(): boolean {
  const c = getConsent();
  return c !== null && c.accepted === true;
}

const api = { getConsent, hasAccepted };

export default api;
