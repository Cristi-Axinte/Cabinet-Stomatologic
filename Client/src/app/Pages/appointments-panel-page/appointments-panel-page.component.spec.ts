import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsPanelPageComponent } from './appointments-panel-page.component';

describe('AppointmentsPanelPageComponent', () => {
  let component: AppointmentsPanelPageComponent;
  let fixture: ComponentFixture<AppointmentsPanelPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentsPanelPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentsPanelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
