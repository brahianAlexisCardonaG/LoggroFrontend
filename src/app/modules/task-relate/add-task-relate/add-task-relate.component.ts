import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TaskService } from 'src/app/core/services/task-service.service';

@Component({
  selector: 'app-add-task-relate',
  templateUrl: './add-task-relate.component.html',
  styleUrls: ['./add-task-relate.component.scss']
})
export class AddTaskRelateComponent implements OnInit {
  selectedTasks: any[] = [];
  listTask: any;
  listHability: any;
  listPerson: any;
  selectedPersonsByTask: { [taskId: number]: any[] } = {};
  selectedHabilitiesByPerson: { [personId: number]: any[] } = {};

  constructor(
    private taskService: TaskService,
    private toasterService: ToastrService,
    public dialogRef: DialogRef,
  ) {}

  ngOnInit(): void {
    this.getListTask();
    this.getListPerson();
    this.getListHability();
  }

  getListTask(): void {
    this.taskService.get('api/task/list', { state: "PENDIENTES" }).subscribe({
      next: (data) => {
        if (data) {
          this.listTask = data;
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

  onPersonsSelect(taskId: number): void {
    if (!this.selectedPersonsByTask[taskId]) {
      this.selectedPersonsByTask[taskId] = [];
    }
  }

  onHabilitiesSelect(personId: number): void {
    if (!this.selectedHabilitiesByPerson[personId]) {
      this.selectedHabilitiesByPerson[personId] = [];
    }
  }

  saveTaskRelations(): void {
    const payload = {
      tasks: this.selectedTasks.map(task => ({
        taskId: task.id,
        persons: this.selectedPersonsByTask[task.id]?.map(person => ({
          personId: person.id,
          habilities: this.selectedHabilitiesByPerson[person.id]?.map(hability => hability.id) || []
        })) || []
      }))
    };

    this.taskService.save('api/task/save-relations', payload).subscribe({
      next: () => {
        this.dialogRef.close();
        this.toasterService.success('tarea guardada exitosamente')
      },
      error: () => {
        this.toasterService.error('Error al guardar las relaciones de tareas');
      }
    });
  }

}
