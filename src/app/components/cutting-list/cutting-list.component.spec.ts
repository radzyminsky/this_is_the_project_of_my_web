import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuttingListComponent } from './cutting-list.component';

describe('CuttingListComponent', () => {
  let component: CuttingListComponent;
  let fixture: ComponentFixture<CuttingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuttingListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuttingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
