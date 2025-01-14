import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageAddComponent } from './image-add.component';

describe('TaskAddComponent', () => {
  let component: ImageAddComponent;
  let fixture: ComponentFixture<ImageAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageAddComponent]
    });
    fixture = TestBed.createComponent(ImageAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
