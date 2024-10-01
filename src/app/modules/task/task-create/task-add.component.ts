import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { TaskService } from 'src/app/core/services/task-service.service';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss']
})

export class TaskAddComponent implements OnInit {
  formAddTask!: FormGroup;
  mensajeError = null;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<TaskAddComponent>,
    private taskService: TaskService,
    private toasterService: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.formAddTask = this.formBuilder.group({
      name: ['HU:', [Validators.required, Validators.pattern(/^[A-Za-z0-9 :]*$/), Validators.maxLength(20)]],
      date: ['', [Validators.required]],
      status: ['PENDIENTES']
    });
  }

  get form() {
    return this.formAddTask.controls;
  }

  onFormSubmit() {
    if (navigator.onLine) {
      this.mensajeError = null;
      const newTask = Object.assign(
        {},
        this.formAddTask.value
      );
      this.taskService.save('api/task/create', newTask).subscribe({
        next: (data) => {
          this.dialogRef.close(data);
          this.toasterService.success('tarea guardada exitosamente')
        },
        error: (error) => {
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

}
