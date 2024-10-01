import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './modules/task/task.component';
import { TaskRelateComponent } from './modules/task-relate/task-relate.component';

const routes: Routes = [
  {
    path: 'task',
    component: TaskComponent
  },
  {
    path: 'task-relate',
    component: TaskRelateComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
