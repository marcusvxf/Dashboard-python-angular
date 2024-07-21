import { HttpClient, HttpClientModule } from '@angular/common/http';
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
import { GroupService } from '../../../core/services/group.service';

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
  providers: [GroupService, HttpClient],
  imports: [NgApexchartsModule, HttpClientModule],
  templateUrl: './age-group.component.html',
  styleUrl: './age-group.component.scss',
})
export class AgeGroupComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: any;
  isLoading = true;

  constructor(public group_service: GroupService) {
    this.get_age_group_data();
  }

  private get_age_group_data() {
    this.group_service.get_age_group_data().subscribe((el) => {
      this.chartOptions = {
        series: [
          {
            name: 'Idade confirmada',
            color: 'rgba(91, 67, 217, 1)',
            data: [
              el['< 14'],
              el['14 - 18'],
              el['19 - 29'],
              el['30 - 39'],
              el['40 - 49'],
              el['50 - 59'],
              el['> 60'],
            ],
          },
          {
            name: 'Idade estimada',
            color: 'rgba(151, 134, 242, 1)',
            data: [],
          },
          {
            name: 'N/D',
            color: 'rgba(182, 181, 187, 1)',
            data: [, , , , , , , el['N/D'] ?? 0],
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
            '40 - 49',
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

      this.isLoading = false;
    });
  }
}
