import { Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {ItemListComponent} from "./item-list/item-list.component";
import {ItemDetailComponent} from "./item-detail/item-detail.component";
import {ItemEditComponent} from "./item-edit/item-edit.component";
import {ItemAddComponent} from "./item-add/item-add.component";

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'items/add', component: ItemAddComponent },
  { path: 'items', component: ItemListComponent },
  { path: 'items/:id', component: ItemDetailComponent },
  { path: 'items/:id/edit', component: ItemEditComponent },
];
