import { Component, ViewChild } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';

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
  selector: 'app-genre-chart',
  standalone: true,
  providers: [],
  imports: [FormsModule, CommonModule, NgApexchartsModule, FormsModule],
  templateUrl: './genre-chart.component.html',
  styleUrl: './genre-chart.component.scss',
})
export class GenreChartComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: any;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Cisgênero',
          color: 'rgba(91, 67, 217, 1)',
          data: [44, 55, 57],
        },
        {
          name: 'Transgênero',
          color: 'rgba(151, 134, 242, 1)',
          data: [76, 85, 101],
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
        categories: ['Mulheres', 'Homens', 'Não-binários'],
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
