import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DialogService } from 'src/app/core/services/dialog.service';
import { ImageService } from 'src/app/core/services/image-service.service';
import { FechaFormatAMDPipe } from 'src/app/pipe/fecha-format-amd.pipe';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  providers: [FechaFormatAMDPipe]
})
export class ImageComponent implements OnInit {

  images: any;
  formImages!: FormGroup;
  isProgressSpinner: boolean = false;

  constructor(
    private imageService: ImageService,
    private dialogService: DialogService,
    private formBuilder: FormBuilder,
    private fechaPipe: FechaFormatAMDPipe,
    private toasterService: ToastrService
  ) {
  }

  ngOnInit(): void {

    this.formImages = this.formBuilder.group({
      dateInitial: [null],
      dateFinal: [null]
    });

    this.formImages.valueChanges.subscribe(() => {
      this.validateDates();
    });

    this.listImage();
  }

  listImage() {
    let dataForm = this.formImages.getRawValue();
    const filters = Object.keys(dataForm)
      .filter((key) => dataForm[key] !== null)
      .reduce((acc, key) => {
        let value = dataForm[key];
        if (key === 'dateInitial' || key === 'dateFinal') {
          value = this.fechaPipe.transform(value);
        }
        acc[key] = value;
        return acc;
      }, {} as any);
    this.isProgressSpinner = true;
    this.imageService.get(filters)
      .subscribe({
        next: (res) => {
          this.isProgressSpinner = false;
          this.images = res;
        },
        error: (error) => {
          this.isProgressSpinner = false;
          this.toasterService.error(error.error);
        }
      }
      )
  }

  saveImageDialog() {
    this.dialogService
      .saveImageDialog()
      .subscribe((data: any) => {
        if (data) {
          this.formImages.reset();
          this.listImage();
        }
      });
  }

  deleteImageDialog(data: any) {
    this.dialogService
      .deleteImageDialog(data)
      .subscribe((data: any) => {
        if (data) {
          this.formImages.reset();
          this.listImage();
        }
      });
  }

  cleanFilterImage() {
    this.formImages.reset();
  }

  validateDates() {
    const dateInitial = this.formImages.get('dateInitial')?.value;
    const dateFinal = this.formImages.get('dateFinal')?.value;

    if (dateInitial && dateFinal && dateFinal < dateInitial) {
      this.formImages.get('dateFinal')?.setErrors({ invalidDateRange: true });
      this.toasterService.error('La Fecha Final debe ser mayor a la Fecha Inicial');
    } else if (dateInitial && !dateFinal) {
      this.formImages.get('dateFinal')?.setErrors({ invalidDateRange: true });
    } else {
      this.formImages.get('dateFinal')?.setErrors(null);
    }
  }

}
