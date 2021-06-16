import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpentryListComponent } from './carpentry-list.component';

describe('CarpentryListComponent', () => {
  let component: CarpentryListComponent;
  let fixture: ComponentFixture<CarpentryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarpentryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarpentryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
