import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ImageService } from 'src/app/core/services/image-service.service';

@Component({
  selector: 'app-image-delete',
  templateUrl: './image-delete.component.html',
  styleUrls: ['./image-delete.component.scss']
})
export class ImageDeleteComponent implements OnInit {

  dataImage: any;
  mensajeError: any;
  isProgressSpinner:boolean = false;

  constructor(
    public dialogRef: MatDialogRef<ImageDeleteComponent>,
    private imageService: ImageService,
    private toasterService: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.dataImage = data.data
  }

  ngOnInit(): void {

  }

  onFormSubmit() {
    if (navigator.onLine) {
      this.mensajeError = null;
      this.isProgressSpinner = true;
      this.imageService.delete(this.dataImage._id).subscribe({
        next: (image) => {
          this.isProgressSpinner = false;
          this.dialogRef.close(image);
          this.toasterService.success('Imagen eliminada exitosamente')
        },
        error: (error) => {
          this.isProgressSpinner = false;
          try {
            for (let field of error.error.errors) {
              this.toasterService.error(field.message, 'Error');
            }
          } catch (e) {
            this.mensajeError = error.error.message;
          }
        },
      });
    } else {
      this.toasterService.error(
        'Por favor, revisa tu conexión a internet',
        'Error'
      );
    }
  }

}
