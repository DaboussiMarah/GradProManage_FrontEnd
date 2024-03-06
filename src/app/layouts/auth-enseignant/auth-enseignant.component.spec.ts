import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthEnseignantComponent } from './auth-enseignant.component';

describe('AuthEnseignantComponent', () => {
  let component: AuthEnseignantComponent;
  let fixture: ComponentFixture<AuthEnseignantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthEnseignantComponent]
    });
    fixture = TestBed.createComponent(AuthEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
