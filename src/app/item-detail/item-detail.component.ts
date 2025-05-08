import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService, Item } from '../item.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="item-detail" *ngIf="item">
      <h2>{{ item.name }}</h2>
      <p>{{ item.description }}</p>
      <button (click)="editItem()">Edit</button>
    </div>
    <p *ngIf="!item">Item not found.</p>
  `,
  styleUrls: ['./item-detail.component.css'],
})
export class ItemDetailComponent{
  item: Item | undefined ;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itemService: ItemService
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.item =this.itemService.getItemById(Number(this.route.snapshot.paramMap.get('id')))
  }

  editItem() {

    this.router.navigate(['/items', Number(this.route.snapshot.paramMap.get('id')), 'edit']);

  }
}
