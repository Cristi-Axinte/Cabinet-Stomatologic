import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationsPanelPageComponent } from './consultations-panel-page.component';

describe('ConsultationsPanelPageComponent', () => {
  let component: ConsultationsPanelPageComponent;
  let fixture: ComponentFixture<ConsultationsPanelPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationsPanelPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationsPanelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
