import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtillsComponent } from './utills.component';

describe('UtillsComponent', () => {
  let component: UtillsComponent;
  let fixture: ComponentFixture<UtillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
