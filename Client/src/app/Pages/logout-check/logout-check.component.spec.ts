import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutCheckComponent } from './logout-check.component';

describe('LogoutCheckComponent', () => {
  let component: LogoutCheckComponent;
  let fixture: ComponentFixture<LogoutCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoutCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
