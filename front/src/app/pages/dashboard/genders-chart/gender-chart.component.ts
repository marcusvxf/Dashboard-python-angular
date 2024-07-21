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
import { GroupService } from '../../../core/services/group.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { error } from 'console';

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
  selector: 'app-gender-chart',
  standalone: true,
  providers: [GroupService, HttpClient],
  imports: [
    HttpClientModule,
    FormsModule,
    CommonModule,
    NgApexchartsModule,
    FormsModule,
  ],
  templateUrl: './gender-chart.component.html',
  styleUrl: './gender-chart.component.scss',
})
export class GenderChartComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: any;
  isLoading = true;

  constructor(public group_service: GroupService) {
    this.get_genre_data();
  }

  private get_genre_data() {
    this.group_service.get_genders_data().subscribe(
      (el) => {
        this.chartOptions = {
          series: [
            {
              name: 'Cisgênero',
              color: 'rgba(91, 67, 217, 1)',
              data: [el.CIS_MALE, el.TRANS_MALE],
            },
            {
              name: 'Transgênero',
              color: 'rgba(151, 134, 242, 1)',
              data: [el.TRANS_MALE, el.TRANS_FEMALE, el.OTHER],
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
        console.log(this.chartOptions);
        this.isLoading = false;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
