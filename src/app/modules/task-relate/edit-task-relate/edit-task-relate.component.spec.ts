import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTaskRelateComponent } from './edit-task-relate.component';

describe('EditTaskRelateComponent', () => {
  let component: EditTaskRelateComponent;
  let fixture: ComponentFixture<EditTaskRelateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditTaskRelateComponent]
    });
    fixture = TestBed.createComponent(EditTaskRelateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
