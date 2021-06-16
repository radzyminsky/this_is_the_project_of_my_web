import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpentryComponent } from './carpentry.component';

describe('CarpentryComponent', () => {
  let component: CarpentryComponent;
  let fixture: ComponentFixture<CarpentryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarpentryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarpentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
