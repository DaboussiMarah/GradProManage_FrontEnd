import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginetudComponent } from './loginetud.component';

describe('LoginetudComponent', () => {
  let component: LoginetudComponent;
  let fixture: ComponentFixture<LoginetudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginetudComponent]
    });
    fixture = TestBed.createComponent(LoginetudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
