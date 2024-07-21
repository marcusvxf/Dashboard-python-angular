import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesPerMonthChartComponent } from './cases-per-month-chart.component';
import { GroupService } from '../../../core/services/group.service';
import { HttpClient } from '@angular/common/http';

describe('CasesPerMonthChartComponent', () => {
  let component: CasesPerMonthChartComponent;
  let fixture: ComponentFixture<CasesPerMonthChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasesPerMonthChartComponent],
      providers: [GroupService, HttpClient],
    }).compileComponents();

    fixture = TestBed.createComponent(CasesPerMonthChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
