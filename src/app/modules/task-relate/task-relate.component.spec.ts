import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskRelateComponent } from './task-relate.component';

describe('TaskRelateComponent', () => {
  let component: TaskRelateComponent;
  let fixture: ComponentFixture<TaskRelateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskRelateComponent]
    });
    fixture = TestBed.createComponent(TaskRelateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
