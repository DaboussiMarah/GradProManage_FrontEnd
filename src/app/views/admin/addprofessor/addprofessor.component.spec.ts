import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprofessorComponent } from './addprofessor.component';

describe('AddprofessorComponent', () => {
  let component: AddprofessorComponent;
  let fixture: ComponentFixture<AddprofessorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddprofessorComponent]
    });
    fixture = TestBed.createComponent(AddprofessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
