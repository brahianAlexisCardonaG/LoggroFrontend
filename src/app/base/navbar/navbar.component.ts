import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  items!: MenuItem[];

  constructor() {
    this.items = [
      { label: 'Imagenes', icon: 'pi pi-box', url: '/images', target: "_self" },
      { label: 'Otros', icon: 'pi pi-tags', url: '/others', target: "_self" }
    ]
  }

}
