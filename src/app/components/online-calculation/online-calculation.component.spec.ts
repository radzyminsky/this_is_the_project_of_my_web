import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineCalculationComponent } from './online-calculation.component';

describe('OnlineCalculationComponent', () => {
  let component: OnlineCalculationComponent;
  let fixture: ComponentFixture<OnlineCalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineCalculationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
