import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TaskService } from 'src/app/core/services/task-service.service';

@Component({
  selector: 'app-detail-task-relate',
  templateUrl: './detail-task-relate.component.html',
  styleUrls: ['./detail-task-relate.component.scss']
})
export class DetailTaskRelateComponent implements OnInit{
  listTask:any;
  constructor(
    public dialogRef: MatDialogRef<DetailTaskRelateComponent>,
    private taskService: TaskService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.getListTask();
  }

  getListTask(): void {
    this.taskService.get('api/task/list-relations', {id:this.data.data.id}).subscribe({
      next: (data) => {
        if (data) {
          this.listTask = data;
        }
      },
      error: () => {}
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
