import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderChartComponent } from './gender-chart.component';
import { GroupService } from '../../../core/services/group.service';
import { HttpClient } from '@angular/common/http';

describe('GenreChartComponent', () => {
  let component: GenderChartComponent;
  let fixture: ComponentFixture<GenderChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenderChartComponent],
      providers: [GroupService, HttpClient],
    }).compileComponents();

    fixture = TestBed.createComponent(GenderChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
