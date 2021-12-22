import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsEditorPageComponent } from './appointments-editor-page.component';

describe('AppointmentsEditorPageComponent', () => {
  let component: AppointmentsEditorPageComponent;
  let fixture: ComponentFixture<AppointmentsEditorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentsEditorPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentsEditorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
