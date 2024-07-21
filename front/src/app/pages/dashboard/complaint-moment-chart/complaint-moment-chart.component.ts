import { Component } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ChartComponent,
  NgApexchartsModule,
} from 'ng-apexcharts';
import { GroupService } from '../../../core/services/group.service';
import { HttpClient } from '@angular/common/http';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
};
@Component({
  selector: 'app-complaint-moment-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  providers: [GroupService, HttpClient],
  templateUrl: './complaint-moment-chart.component.html',
  styleUrl: './complaint-moment-chart.component.scss',
})
export class ComplaintMomentChartComponent {
  public chartOptions_at_moment: any;
  public chartOptions_not_at_moment: any;
  isLoading = true;

  constructor(public group_service: GroupService) {
    this.get_moment_data();
  }

  get_moment_data() {
    this.group_service.get_at_moment_data().subscribe((el) => {
      console.log(((el.True / (el.True + el.False)) * 100).toFixed(1));
      this.chartOptions_at_moment = {
        series: [((el.True / (el.True + el.False)) * 100).toFixed(1)],
        chart: {
          width: 350,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '60%',
              color: '#fff',
            },
            track: {
              color: '#fff',
              background: 'rgba(207, 216, 220, 1)',
              strokeWidth: '97%',

              margin: 5,
            },
            dataLabels: {
              name: {
                show: true,
                color: '#fff',
                offsetY: 30,
              },
              value: {
                offsetY: -20,
                position: 'top',
                fontSize: '45px',
                color: '#fff',
                fontWeight: '700',
              },
            },
          },
        },
        fill: {
          type: 'solid',
          colors: ['#fff'],
        },
        labels: ['No momento'],
      };

      this.chartOptions_not_at_moment = {
        series: [((el.False / (el.True + el.False)) * 100).toFixed(1)],
        chart: {
          width: 350,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '60%',
              color: '#fff',
            },
            track: {
              color: '#fff',
              background: 'rgba(207, 216, 220, 1)',
              strokeWidth: '97%',

              margin: 5,
            },
            dataLabels: {
              name: {
                show: true,
                color: '#fff',
                offsetY: 30,
              },
              value: {
                offsetY: -20,
                position: 'top',
                fontSize: '45px',
                color: '#fff',
                fontWeight: '700',
              },
            },
          },
        },
        fill: {
          type: 'solid',
          colors: ['#fff'],
        },
        labels: ['Após o ocorrido'],
      };

      this.isLoading = false;
    });
  }
}
