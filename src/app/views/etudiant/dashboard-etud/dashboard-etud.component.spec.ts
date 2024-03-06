import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEtudComponent } from './dashboard-etud.component';

describe('DashboardEtudComponent', () => {
  let component: DashboardEtudComponent;
  let fixture: ComponentFixture<DashboardEtudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardEtudComponent]
    });
    fixture = TestBed.createComponent(DashboardEtudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
