import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTaskRelateComponent } from './detail-task-relate.component';

describe('DetailTaskRelateComponent', () => {
  let component: DetailTaskRelateComponent;
  let fixture: ComponentFixture<DetailTaskRelateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailTaskRelateComponent]
    });
    fixture = TestBed.createComponent(DetailTaskRelateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
