import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesCourseComponent } from './detalles-course.component';

describe('DetallesCourseComponent', () => {
  let component: DetallesCourseComponent;
  let fixture: ComponentFixture<DetallesCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallesCourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
