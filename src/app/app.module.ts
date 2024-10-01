import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { ToastrModule, provideToastr } from 'ngx-toastr';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

import { MatInputModule } from '@angular/material/input';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { FechaFormatAMDPipe } from './pipe/fecha-format-amd.pipe';
import { TooltipModule } from 'primeng/tooltip';
import { CalendarModule } from 'primeng/calendar';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { NavbarComponent } from './base/navbar/navbar.component';
import { MenubarModule } from 'primeng/menubar';
import { TaskComponent } from './modules/task/task.component';
import { TaskAddComponent } from './modules/task/task-create/task-add.component';
import { TaskDeleteComponent } from './modules/task/task-delete/task-delete.component';
import { TaskEditComponent } from './modules/task/task-edit/task-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskRelateComponent } from './modules/task-relate/task-relate.component';
import { AddTaskRelateComponent } from './modules/task-relate/add-task-relate/add-task-relate.component';
import { DropdownModule } from 'primeng/dropdown';
import {MultiSelectModule} from 'primeng/multiselect';
import { DetailTaskRelateComponent } from './modules/task-relate/detail-task-relate/detail-task-relate.component';
import { EditTaskRelateComponent } from './modules/task-relate/edit-task-relate/edit-task-relate.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskAddComponent,
    TaskDeleteComponent,
    TaskEditComponent,
    FechaFormatAMDPipe,
    NavbarComponent,
    TaskRelateComponent,
    AddTaskRelateComponent,
    DetailTaskRelateComponent,
    EditTaskRelateComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    HttpClientModule,
    TableModule,
    MatIconModule,
    ToastrModule.forRoot(),
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    ToastModule,
    CardModule,
    TooltipModule,
    CalendarModule,
    MatDatepickerModule,
    MenubarModule,
    DropdownModule,
    MultiSelectModule
  ],
  providers: [
  provideAnimations(),
  provideToastr(),
],
  bootstrap: [AppComponent]
})
export class AppModule { }
