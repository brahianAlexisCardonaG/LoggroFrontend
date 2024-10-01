import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { TaskService } from 'src/app/core/services/task-service.service';

@Component({
  selector: 'app-edit-task-relate',
  templateUrl: './edit-task-relate.component.html',
  styleUrls: ['./edit-task-relate.component.scss']
})
export class EditTaskRelateComponent implements OnInit {
  selectedTask: any;
  listTask: any;
  listHability: any;
  listPerson: any;
  selectedPersonsByTask: { [taskId: number]: any[] } = {};
  selectedHabilitiesByPerson: { [personId: number]: any[] } = {};

  constructor(
    public dialogRef: MatDialogRef<EditTaskRelateComponent>,
    private taskService: TaskService,
    private toasterService: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.getListTask();
    this.getListPerson();
    this.getListHability();
  }

  getListTask(): void {
    this.taskService.get('api/task/list-relations', { id: this.data.data.id }).subscribe({
      next: (data) => {
        if (data) {
          this.selectedTask = data;
          this.listTask = [data];
          this.mapExistingRelations();
        }
      },
      error: () => {}
    });
  }

  getListPerson(): void {
    this.taskService.get('api/person/list', null).subscribe({
      next: (data) => {
        if (data) {
          this.listPerson = data;
        }
      },
      error: () => {}
    });
  }

  getListHability(): void {
    this.taskService.get('api/hability/list', null).subscribe({
      next: (data) => {
        if (data) {
          this.listHability = data;
        }
      },
      error: () => {}
    });
  }

  mapExistingRelations(): void {
    if (this.selectedTask && this.selectedTask.persons) {
      this.selectedPersonsByTask[this.selectedTask.id] = this.selectedTask.persons;
      this.selectedTask.persons.forEach((person:any) => {
        this.selectedHabilitiesByPerson[person.id] = person.habilities || [];
      });
    }
  }

  saveTaskRelations(): void {
    const payload = {
      taskId: this.selectedTask.id,
      persons: this.selectedPersonsByTask[this.selectedTask.id]?.map(person => ({
        personId: person.id,
        habilities: this.selectedHabilitiesByPerson[person.id]?.map(hability => hability.id) || []
      })) || []
    };

    this.taskService.save('api/task/update-relations', payload).subscribe({
      next: () => {
        this.dialogRef.close();
        this.toasterService.success('tareas relacionadas exitosamente')
      },
      error: () => {
        this.toasterService.error('Error al actualizar las relaciones de la tarea');
      }
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
