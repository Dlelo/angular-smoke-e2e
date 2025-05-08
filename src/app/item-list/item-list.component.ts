import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService, Item } from '../item.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="item-list">
      <h2>Items</h2>
      <button (click)="addItem()">Add Item</button>
      <ul>
        <li *ngFor="let item of items$ | async" (click)="viewItem(item.id)">
          {{ item.name }}
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent {
  items$: Observable<Item[]>;

  constructor(private router: Router, private itemService: ItemService) {
    this.items$ = this.itemService.items$;
  }

  addItem() {
    this.router.navigate(['/items/add']);
  }

  viewItem(id: number) {
    this.router.navigate(['/items', id]);
  }
}
