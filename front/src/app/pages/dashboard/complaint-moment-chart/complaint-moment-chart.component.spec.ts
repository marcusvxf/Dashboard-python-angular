import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintMomentChartComponent } from './complaint-moment-chart.component';

describe('ComplaintMomentChartComponent', () => {
  let component: ComplaintMomentChartComponent;
  let fixture: ComponentFixture<ComplaintMomentChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComplaintMomentChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplaintMomentChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
