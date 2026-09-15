// Event tracking and analytics service
export const api = {
  trackEvent: (eventName: string, properties?: Record<string, any>) => {
    try {
      if (typeof window !== 'undefined' && (window as any).va) {
        (window as any).va('event', { name: eventName, data: properties });
      }
      console.log(`[Event: ${eventName}]`, properties);
    } catch {
      // Ignore
    }
  }
};
