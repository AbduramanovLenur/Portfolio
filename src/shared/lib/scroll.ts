const smoothOptions: ScrollIntoViewOptions = { behavior: 'smooth' };

export function scrollToId(id: string): void {
  document.getElementById(id)?.scrollIntoView(smoothOptions);
}

export function scrollToSelector(selector: string): void {
  document.querySelector(selector)?.scrollIntoView(smoothOptions);
}

export function scrollToTop(): void {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}