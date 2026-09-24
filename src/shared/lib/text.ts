export interface SplitAccent {
  before: string;
  after: string;
}

export function splitAccent(text: string, accent: string): SplitAccent {
  const index = text.toLowerCase().indexOf(accent.toLowerCase());

  if (index === -1 || accent.length === 0) {
    return { before: '', after: '' };
  }

  return {
    before: text.slice(0, index),
    after: text.slice(index + accent.length),
  };
}