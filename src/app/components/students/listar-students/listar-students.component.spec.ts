import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarStudentsComponent } from './listar-students.component';

describe('ListarStudentsComponent', () => {
  let component: ListarStudentsComponent;
  let fixture: ComponentFixture<ListarStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarStudentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
