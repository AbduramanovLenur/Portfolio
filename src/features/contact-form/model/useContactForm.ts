import { useState, type FormEvent } from 'react';

import { api } from '../api/api';

interface UseContactFormResult {
  isSubmitted: boolean;
  isSubmitting: boolean;
  error: string | null;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>;
}

const extractValue = (formData: FormData, key: string): string =>
  formData.get(key)?.toString().trim() ?? '';

export function useContactForm(): UseContactFormResult {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) return;

    const formData = new FormData(event.currentTarget);
    setIsSubmitting(true);
    setError(null);

    try {
      await api.sendMessage({
        name: extractValue(formData, 'name'),
        contact: extractValue(formData, 'contact'),
        project: extractValue(formData, 'project'),
      });
      setIsSubmitted(true);
    } catch (submitError) {
      console.error('[contact-form]', submitError);
      setError('Failed to send the message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return { isSubmitted, isSubmitting, error, handleSubmit };
}