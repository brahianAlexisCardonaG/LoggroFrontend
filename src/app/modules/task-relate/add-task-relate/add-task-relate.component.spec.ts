import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaskRelateComponent } from './add-task-relate.component';

describe('AddTaskRelateComponent', () => {
  let component: AddTaskRelateComponent;
  let fixture: ComponentFixture<AddTaskRelateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTaskRelateComponent]
    });
    fixture = TestBed.createComponent(AddTaskRelateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
