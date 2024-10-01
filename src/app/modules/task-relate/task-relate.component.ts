import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DialogService } from 'src/app/core/services/dialog.service';
import { TaskService } from 'src/app/core/services/task-service.service';

@Component({
  selector: 'app-task-relate',
  templateUrl: './task-relate.component.html',
  styleUrls: ['./task-relate.component.scss']
})
export class TaskRelateComponent {
  task: any;
  formTaskRelate!: FormGroup;

  constructor(
    private taskService: TaskService,
    private dialogService: DialogService,
    private formBuilder: FormBuilder,
    private toasterService: ToastrService,
  ) {
  }

  ngOnInit(): void {

    this.formTaskRelate = this.formBuilder.group({
      status: [''],
    })

    this.listTask();
  }

  listTask() {
    let dataForm = this.formTaskRelate.getRawValue();
    this.taskService.get('api/task/list', {state:dataForm.status})
      .subscribe((res:any) => {
        this.task = res;
      })
  }

  saveTaskRelateDialog() {
    this.dialogService
      .saveTaskRelateDialog()
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

  editTaskRelateDialog(data: any) {
    this.dialogService
      .updateTaskRelateDialog(data)
      .subscribe(() => {
        this.ngOnInit();
      });
  }

  detailTaskRelateDialog(data: any) {
    this.dialogService
      .detailTaskRelateDialog(data)
      .subscribe(() => {
        this.ngOnInit();
      });
  }

  changeStatusTask(data:any){
    this.taskService.updateStatus('api/task/update-status',{id:data.id,state:'COMPLETADAS'}).subscribe({
      next: () => {
        this.toasterService.success('Tarea completada con éxito');
        this.ngOnInit();
      },
      error: () => {
        this.toasterService.error('Tarea no se ha completada con éxito');
      }
    });
  }

}
