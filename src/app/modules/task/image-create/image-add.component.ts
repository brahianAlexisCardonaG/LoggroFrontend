import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ImageService } from 'src/app/core/services/image-service.service';

@Component({
  selector: 'app-image-add',
  templateUrl: './image-add.component.html',
  styleUrls: ['./image-add.component.scss']
})

export class ImageAddComponent implements OnInit {
  formAddImage!: FormGroup;
  mensajeError = null;
  isProgressSpinner: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ImageAddComponent>,
    private imageService: ImageService,
    private toasterService: ToastrService,
    private cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.formAddImage = this.formBuilder.group({
      image: [null, [Validators.required]],
      name: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9 :]*$/), Validators.maxLength(20)]],
    });
  }

  get form() {
    return this.formAddImage.controls;
  }

  onFormSubmit() {
    if (navigator.onLine) {
      this.mensajeError = null;
      const formData = new FormData();
      formData.append('personName', this.formAddImage.get('name')?.value);
      formData.append('image', this.formAddImage.get('image')?.value);

      this.isProgressSpinner = true;
      this.imageService.save(formData).subscribe({
        next: (data) => {
          this.isProgressSpinner = false;
          this.dialogRef.close(data);
          this.toasterService.success('Imagen guardada exitosamente');
        },
        error: (error) => {
          this.isProgressSpinner = false;
          try {
            for (let field of error) {
              this.toasterService.error(field.message, 'Error');
            }
          } catch (e) {
            this.mensajeError = error.message;
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

  onFileSelect(event: any): void {
    const file = event.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const img = new Image();
        img.src = reader.result as string;

        img.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;

          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.drawImage(img, 0, 0);
            canvas.toBlob((blob) => {
              if (blob) {
                const convertedFile = new File([blob], `${file.name.split('.')[0]}.png`, {
                  type: 'image/png',
                });
                this.formAddImage.get('image')?.setValue(convertedFile);
                this.cdr.detectChanges();
              }
            }, 'image/png');
          }
        };
      };
      reader.readAsDataURL(file);
    }
  }

}
