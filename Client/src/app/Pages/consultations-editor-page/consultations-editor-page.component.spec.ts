import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationsEditorPageComponent } from './consultations-editor-page.component';

describe('ConsultationsEditorPageComponent', () => {
  let component: ConsultationsEditorPageComponent;
  let fixture: ComponentFixture<ConsultationsEditorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultationsEditorPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationsEditorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
