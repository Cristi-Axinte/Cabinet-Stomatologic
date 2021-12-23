import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConsultationPageComponent } from './add-consultation-page.component';

describe('AddConsultationPageComponent', () => {
  let component: AddConsultationPageComponent;
  let fixture: ComponentFixture<AddConsultationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddConsultationPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddConsultationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
