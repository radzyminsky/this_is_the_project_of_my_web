import { ComponentFixture, TestBed } from '@angular/core/testing';

import { yourCarpentryComponent } from './yourCarpentry.component';

describe('yourCarpentryComponent', () => {
  let component: yourCarpentryComponent;
  let fixture: ComponentFixture<yourCarpentryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ yourCarpentryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(yourCarpentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
