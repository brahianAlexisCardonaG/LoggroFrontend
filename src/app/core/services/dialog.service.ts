import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ImageAddComponent } from 'src/app/modules/task/image-create/image-add.component';
import { ImageDeleteComponent } from 'src/app/modules/task/image-delete/image-delete.component';
@Injectable({
  providedIn: 'root'
})
export class DialogService {
  defaultOptions = { disableClose: true };

  constructor(
    private matDialog: MatDialog,
  ) { }

  assignOptions(newInformation: any) {
    return Object.assign({}, this.defaultOptions, newInformation);
  }

  saveImageDialog() {
    let dialogRef: MatDialogRef<ImageAddComponent>;
    dialogRef = this.matDialog.open(ImageAddComponent, this.defaultOptions);
    return dialogRef.afterClosed();
  }

  deleteImageDialog(data: any) {
    let dialogRef: MatDialogRef<ImageDeleteComponent>;
    dialogRef = this.matDialog.open(
      ImageDeleteComponent,
      this.assignOptions({
        data: { data }
      })
    );
    return dialogRef.afterClosed();
  }

}
