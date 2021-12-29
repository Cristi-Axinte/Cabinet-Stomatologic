import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadmePageComponent } from './readme-page.component';

describe('ReadmePageComponent', () => {
  let component: ReadmePageComponent;
  let fixture: ComponentFixture<ReadmePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadmePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadmePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
