// src/app/services/item.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Item {
  id: number;
  name: string;
  description?: string;
}

@Injectable({ providedIn: 'root' })
export class ItemService {
  private itemsSubject = new BehaviorSubject<Item[]>([
    { id: 1, name: 'Item One', description: 'First item' },
    { id: 2, name: 'Item Two', description: 'Second item' },
  ]);
  items$ = this.itemsSubject.asObservable();

  private currentId = 3;

  /** Get current items as value (used in non-reactive components) */
  getItems(): Item[] {
    return this.itemsSubject.value;
  }

  /** Add a new item */
  addItem(item: Omit<Item, 'id'>): void {
    console.log("I called at service");
    const newItem: Item = {
      ...item,
      id: this.currentId++,
    };
    const updatedItems = [...this.itemsSubject.value, newItem];
    this.itemsSubject.next(updatedItems);
  }

  /** Get a single item by id */
  getItemById(id: number): Item | undefined {
    return this.itemsSubject.value.find(item => item.id === id);
  }

  /** Update an existing item */
  updateItem(updatedItem: Item): void {
    const items = this.itemsSubject.value.map(item =>
      item.id === updatedItem.id ? updatedItem : item
    );
    this.itemsSubject.next(items);
  }
}
