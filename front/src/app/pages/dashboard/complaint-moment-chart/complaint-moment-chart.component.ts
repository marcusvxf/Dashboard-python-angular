import { Component } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ChartComponent,
  NgApexchartsModule,
} from 'ng-apexcharts';

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
  templateUrl: './complaint-moment-chart.component.html',
  styleUrl: './complaint-moment-chart.component.scss',
})
export class ComplaintMomentChartComponent {
  public chartOptions: any;

  constructor() {
    this.chartOptions = {
      series: [70],
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
  }
}
