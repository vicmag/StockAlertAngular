import 'jest-preset-angular/setup-jest';
import { TextDecoder, TextEncoder } from 'util';

// Polyfills para Angular 17
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder as any;

// Mock para localStorage
Object.defineProperty(window, 'localStorage', {
  value: {
    store: {} as Record<string, string>,
    getItem(key: string) {
      return this.store[key] || null;
    },
    setItem(key: string, value: string) {
      this.store[key] = value.toString();
    },
    removeItem(key: string) {
      delete this.store[key];
    },
    clear() {
      this.store = {};
    },
  },
  configurable: true,
});
