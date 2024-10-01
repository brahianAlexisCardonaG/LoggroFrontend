import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { TaskService } from 'src/app/core/services/task-service.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent implements OnInit {

  formEditTask!: FormGroup;
  mensajeError = null;
  dataTask: any;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<TaskEditComponent>,
    private taskService: TaskService,
    private toasterService: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.dataTask = data.data
  }

  ngOnInit(): void {
    this.formEditTask = this.formBuilder.group({
      name: [this.dataTask.name, [Validators.required]],
      date: [this.dataTask.date, [Validators.required]],
      status: ['PENDIENTES']
    });
  }

  get form() {
    return this.formEditTask.controls;
  }

  onFormSubmit() {
    if (navigator.onLine) {
      this.mensajeError = null;
      const newTask = Object.assign(
        {},
        this.formEditTask.value
      );

      let dataTask = {
        id: this.dataTask.id,
        name: newTask.name,
        date: newTask.date,
        state: newTask.status,
      }

      this.taskService.update('api/task/update', dataTask).subscribe({
        next: (task) => {
          this.dialogRef.close(task);
          this.toasterService.success('Tarea actualizada exitosamente')
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
