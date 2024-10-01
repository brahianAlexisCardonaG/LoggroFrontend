import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddTaskRelateComponent } from 'src/app/modules/task-relate/add-task-relate/add-task-relate.component';
import { DetailTaskRelateComponent } from 'src/app/modules/task-relate/detail-task-relate/detail-task-relate.component';
import { EditTaskRelateComponent } from 'src/app/modules/task-relate/edit-task-relate/edit-task-relate.component';
import { TaskAddComponent } from 'src/app/modules/task/task-create/task-add.component';
import { TaskDeleteComponent } from 'src/app/modules/task/task-delete/task-delete.component';
import { TaskEditComponent } from 'src/app/modules/task/task-edit/task-edit.component';
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

  saveTaskDialog() {
    let dialogRef: MatDialogRef<TaskAddComponent>;
    dialogRef = this.matDialog.open(TaskAddComponent, this.defaultOptions);
    return dialogRef.afterClosed();
  }

  deleteTaskDialog(data: any) {
    let dialogRef: MatDialogRef<TaskDeleteComponent>;
    dialogRef = this.matDialog.open(
      TaskDeleteComponent,
      this.assignOptions({
        data: { data }
      })
    );
    return dialogRef.afterClosed();
  }

  updateTaskComponent(data: any) {
    let dialogRef: MatDialogRef<TaskEditComponent>;
    dialogRef = this.matDialog.open(
      TaskEditComponent,
      this.assignOptions({
        data: { data }
      })
    );
    return dialogRef.afterClosed();
  }

  saveTaskRelateDialog() {
    let dialogRef: MatDialogRef<AddTaskRelateComponent>;
    dialogRef = this.matDialog.open(AddTaskRelateComponent, this.defaultOptions);
    return dialogRef.afterClosed();
  }

  detailTaskRelateDialog(data: any) {
    let dialogRef: MatDialogRef<DetailTaskRelateComponent>;
    dialogRef = this.matDialog.open(
      DetailTaskRelateComponent,
      this.assignOptions({
        data: { data }
      })
    );
    return dialogRef.afterClosed();
  }

  updateTaskRelateDialog(data: any) {
    let dialogRef: MatDialogRef<EditTaskRelateComponent>;
    dialogRef = this.matDialog.open(
      EditTaskRelateComponent,
      this.assignOptions({
        data: { data }
      })
    );
    return dialogRef.afterClosed();
  }

}
