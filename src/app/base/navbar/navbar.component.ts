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
      { label: 'Tarea', icon: 'pi pi-box', url: '/task', target: "_self" },
      { label: 'Relacionar Tareas', icon: 'pi pi-tags', url: '/task-relate', target: "_self" }
    ]
  }

}
