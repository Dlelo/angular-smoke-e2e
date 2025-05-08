import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {ItemService} from "../item.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-item-add',
  standalone: true,
  imports: [
    FormsModule
  ],
  template: `
    <div class="item-add">
      <h2>Add New Item</h2>
      <form (ngSubmit)="addItem()">
        <input [(ngModel)]="item.name" name="name" placeholder="Item Name" required />
        <br>
        <br>
        <textarea [(ngModel)]="item.description" name="description" placeholder="Description" required></textarea>
        <br>
        <br>
        <button type="submit">Add Item</button>
      </form>
    </div>
  `,
  styleUrl: './item-add.component.css'
})
export class ItemAddComponent {
  item = {
    name: '',
    description: ''
  };

  constructor(private itemService: ItemService, private router: Router) {}

  addItem() {
    if (this.item.name && this.item.description) {
      this.itemService.addItem({
        name: this.item.name,
        description: this.item.description
      });
      this.router.navigate(['/items']);
    }
  }
}
