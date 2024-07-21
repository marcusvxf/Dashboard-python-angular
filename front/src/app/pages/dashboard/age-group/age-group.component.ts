import { Component, ViewChild } from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip,
  NgApexchartsModule,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
};

@Component({
  selector: 'app-age-group',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './age-group.component.html',
  styleUrl: './age-group.component.scss',
})
export class AgeGroupComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: any;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Cisgênero',
          color: 'rgba(91, 67, 217, 1)',
          data: [44, 55, 57, 44, 55, 57],
        },
        {
          name: 'Transgênero',
          color: 'rgba(151, 134, 242, 1)',
          data: [76, 85, 101, 76, 85, 101],
        },
        {
          name: 'N/D',
          color: 'rgba(182, 181, 187, 1)',
          data: [, , , , , , 20],
        },
      ],
      chart: {
        type: 'bar',
        height: 240,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '94%',
        },
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 5,
        colors: ['transparent'],
      },
      xaxis: {
        categories: [
          '< 14',
          '14 - 18',
          '19 - 29',
          '30 - 39',
          '50 - 60',
          '> 60',
          'N/D',
        ],
        labels: {
          rotate: -45,
          rotateAlways: true,
          style: {
            cssClass: 'legend2',
          },
        },
      },
      yaxis: {},
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val: any) {
            return val;
          },
        },
      },
    };
  }
}
