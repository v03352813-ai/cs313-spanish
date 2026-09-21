/**
 * CS313 西班牙语研习社 · 前端统一云端与本地 API 数据服务层
 * 支持【Local-First 双模架构】：优先连本地 Node.js SQLite 服务，离线自动使用本地防伪引擎兜底
 */
import { DeviceInfo } from '../utils/fingerprint';
import { verifyCardKey as localVerifyCardKey, saveLicense } from '../data/auth/cardKeys';

const API_BASE_URL = (import.meta as any).env?.VITE_API_URL || '/api';

export const api = {
  trackEvent: (eventName: string, properties?: Record<string, any>) => {
    try {
      if (typeof window !== 'undefined' && (window as any).va) {
        (window as any).va('event', { name: eventName, data: properties });
      }
    } catch {}
  },

  async verifyCardKey(cardKey: string, device: DeviceInfo): Promise<{ success: boolean; message: string; license?: any }> {
    try {
      const res = await fetch(`${API_BASE_URL}/auth/verify-key`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cardKey, device })
      });
      const data = await res.json();
      if (data.success && data.license) {
        saveLicense({
          isVip: true,
          key: cardKey.trim().toUpperCase(),
          activatedAt: data.license.activatedAt || new Date().toISOString(),
          source: 'sqlite_db'
        });
        return data;
      }
      if (!data.success) {
        return data;
      }
    } catch (err) {
      console.warn('[API Verification] Server unreachable, validating with local engine:', err);
    }

    // 本地脱机降级验证
    const localRes = localVerifyCardKey(cardKey);
    return {
      success: localRes.success,
      message: localRes.message,
      license: localRes.success ? {
        isVip: true,
        cardKey: cardKey.trim().toUpperCase(),
        tier: '西班牙语单语种终身VIP',
        activatedAt: new Date().toISOString()
      } : undefined
    };
  }
};
