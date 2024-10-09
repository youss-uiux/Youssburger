import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {
  selectedComponent=signal<number|null>(null);

  setSelected(index: number) {
    this.selectedComponent.set(index);
  }

  constructor() { }
}
