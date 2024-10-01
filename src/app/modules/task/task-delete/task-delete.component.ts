import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { TaskService } from 'src/app/core/services/task-service.service';

@Component({
  selector: 'app-task-delete',
  templateUrl: './task-delete.component.html',
  styleUrls: ['./task-delete.component.scss']
})
export class TaskDeleteComponent implements OnInit {

  dataTask: any;
  mensajeError: any;

  constructor(
    public dialogRef: MatDialogRef<TaskDeleteComponent>,
    private taskService: TaskService,
    private toasterService: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.dataTask = data.data
  }

  ngOnInit(): void {

  }

  onFormSubmit() {
    if (navigator.onLine) {
      this.mensajeError = null;
      this.taskService.delete("api/task/delete", this.dataTask.id).subscribe({
        next: (medicamento) => {
          this.dialogRef.close(medicamento);
          this.toasterService.success('Tarea eliminada exitosamente')
        },
        error: (error) => {
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
