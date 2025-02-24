import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCoursesComponent } from './form-courses.component';

describe('FormCoursesComponent', () => {
  let component: FormCoursesComponent;
  let fixture: ComponentFixture<FormCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCoursesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
