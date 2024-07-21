import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeighborhoodRankingChartComponent } from './neighborhood-ranking-chart.component';

describe('NeighborhoodRankingChartComponent', () => {
  let component: NeighborhoodRankingChartComponent;
  let fixture: ComponentFixture<NeighborhoodRankingChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeighborhoodRankingChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeighborhoodRankingChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
