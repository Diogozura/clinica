export const STORAGE_KEY = 'cotidente.consentimentoPrivacidade.v1';

export function getConsent() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function hasAccepted() {
  const c = getConsent();
  return c && c.accepted === true;
}

const api = { getConsent, hasAccepted };

export default api;
