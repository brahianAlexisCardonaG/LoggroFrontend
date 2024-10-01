import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogService } from 'src/app/core/services/dialog.service';
import { TaskService } from 'src/app/core/services/task-service.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  task: any;
  formTask!: FormGroup;

  constructor(
    private taskService: TaskService,
    private dialogService: DialogService,
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {

    this.formTask = this.formBuilder.group({
      status: [''],
    })

    this.listTask();
  }

  listTask() {
    let dataForm = this.formTask.getRawValue();
    this.taskService.get('api/task/list', {state:dataForm.status})
      .subscribe((res:any) => {
        this.task = res;
      })
  }

  saveTaskDialog() {
    this.dialogService
      .saveTaskDialog()
      .subscribe(() => {
        this.ngOnInit();
      });
  }

  deleteTaskDialog(data: any) {
    this.dialogService
      .deleteTaskDialog(data)
      .subscribe(() => {
        this.ngOnInit();
      });
  }

  editTaskDialog(data: any) {
    this.dialogService
      .updateTaskComponent(data)
      .subscribe(() => {
        this.ngOnInit();
      });
  }

}
