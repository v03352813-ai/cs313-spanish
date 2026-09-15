// Web Speech API for Spanish (es-ES and es-MX) with Promise, voice caching and timeout safety

let cachedSpanishVoice: SpeechSynthesisVoice | null = null;
let isVoiceInitialized = false;

function initVoices(): SpeechSynthesisVoice | null {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return null;
  }
  try {
    const voices = window.speechSynthesis.getVoices();
    if (!voices || voices.length === 0) return null;

    const esVoice = 
      voices.find(v => v.lang.startsWith('es') && (v.name.includes('Spain') || v.name.includes('Castilian') || v.name.includes('Monica') || v.name.includes('Jorge') || v.name.includes('Paulina') || v.name.includes('Alvaro') || v.name.includes('Elvira'))) ||
      voices.find(v => v.lang === 'es-ES' || v.lang.replace('_', '-').toLowerCase() === 'es-es') ||
      voices.find(v => v.lang.startsWith('es') || v.name.toLowerCase().includes('spanish') || v.name.includes('español'));

    if (esVoice) {
      cachedSpanishVoice = esVoice;
      isVoiceInitialized = true;
      return esVoice;
    }
  } catch (e) {
    console.warn('[Speech] Spanish voice init warning:', e);
  }
  return null;
}

if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  initVoices();
  window.speechSynthesis.onvoiceschanged = () => {
    initVoices();
  };
}

let activeTimeout: any = null;

export function speakSpanish(text: string, rate: number = 0.9, lang: 'es-ES' | 'es-MX' = 'es-ES'): Promise<void> {
  return new Promise((resolve) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window) || !text || !text.trim()) {
      resolve();
      return;
    }

    try {
      if (activeTimeout) {
        clearTimeout(activeTimeout);
        activeTimeout = null;
      }
      window.speechSynthesis.cancel();
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }

      const voice = cachedSpanishVoice || initVoices();
      const utterance = new SpeechSynthesisUtterance(text.trim());
      utterance.lang = lang;
      utterance.rate = Math.max(0.6, Math.min(1.6, rate));
      utterance.pitch = 1.0;
      if (voice) {
        utterance.voice = voice;
      }

      let isFinished = false;
      const safeDone = () => {
        if (!isFinished) {
          isFinished = true;
          if (activeTimeout) {
            clearTimeout(activeTimeout);
            activeTimeout = null;
          }
          resolve();
        }
      };

      utterance.onend = safeDone;
      utterance.onerror = () => {
        safeDone();
      };

      const estimatedMs = Math.max(2500, (text.length / 3) * 1000 * (1.2 / rate));
      activeTimeout = setTimeout(() => {
        safeDone();
      }, estimatedMs + 1500);

      window.speechSynthesis.speak(utterance);
    } catch (err) {
      console.warn('[Speech] Speak execution error:', err);
      resolve();
    }
  });
}

export function stopSpanishSpeech(): void {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      if (activeTimeout) {
        clearTimeout(activeTimeout);
        activeTimeout = null;
      }
      window.speechSynthesis.cancel();
    } catch (e) {
      console.warn('[Speech] Stop error:', e);
    }
  }
}

