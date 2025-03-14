import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageServiceService {
  constructor() {}

  setItem = (key: string, value: string): void => {
    localStorage.setItem(key, value);
  };

  getValue = (key: string): string | null => {
    return localStorage.getItem(key);
  };
}
