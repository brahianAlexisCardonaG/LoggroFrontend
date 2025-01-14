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
import { FileUploadModule } from 'primeng/fileupload';
import { NavbarComponent } from './base/navbar/navbar.component';
import { MenubarModule } from 'primeng/menubar';
import { ImageComponent } from './modules/task/image.component';
import { ImageAddComponent } from './modules/task/image-create/image-add.component';
import { ImageDeleteComponent } from './modules/task/image-delete/image-delete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import {MultiSelectModule} from 'primeng/multiselect';
import { MessagesModule } from 'primeng/messages';
import { MessageService } from 'primeng/api';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ComponentSpinnerComponent } from './shared/component-spinner/component-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    ImageAddComponent,
    ImageDeleteComponent,
    FechaFormatAMDPipe,
    NavbarComponent,
    ComponentSpinnerComponent,
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
    MultiSelectModule,
    FileUploadModule,
    MessagesModule,
    ToastModule,
    ProgressSpinnerModule
  ],
  providers: [
  provideAnimations(),
  provideToastr(),
  MessageService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
