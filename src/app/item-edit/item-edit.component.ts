import {Component, OnInit, signal, WritableSignal} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ItemService, Item } from '../item.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-edit',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div class="item-edit">
      <form (ngSubmit)="saveItem()">
        <input [(ngModel)]="item().name" name="name" placeholder="Item Name" required />
        <br>
        <br>
        <textarea [(ngModel)]="item().description" name="description" placeholder="Description" required></textarea>
        <br>
        <br>
        <button type="submit">Save</button>
      </form>
    </div>
  `,
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {
  id: string | null;
  item: WritableSignal<Item> = signal( { id: 0, name: '', description: '' } );

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itemService: ItemService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.item.set(
      this.itemService.getItemById(Number(this.route.snapshot.paramMap.get('id')))
        || { id: 0, name: '', description: '' }
      );
  }

  saveItem() {
   if(this.id && this.item()?.name && this.item()?.description){
     this.itemService.updateItem({
       id: +this.id,
       name: this.item()?.name ?? '',
       description: this.item()?.description
     });
   }
      this.router.navigate(['/items']);
    }

}
