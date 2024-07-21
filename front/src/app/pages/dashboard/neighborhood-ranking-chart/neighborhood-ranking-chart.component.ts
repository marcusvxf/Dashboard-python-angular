import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-neighborhood-ranking-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './neighborhood-ranking-chart.component.html',
  styleUrl: './neighborhood-ranking-chart.component.scss',
})
export class NeighborhoodRankingChartComponent {
  public chartOptions: any;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Inflation',

          data: [2.3, 3.1, 4.0, 10.1, 4.0],
        },
      ],
      chart: {
        height: 250,
        width: 350,
        type: 'bar',
        toolbar: {
          show: false,
        },
      },
      colors: [
        'rgba(255, 255, 255, 1)',
        'rgba(255, 255, 255, .8)',
        'rgba(255, 255, 255, .6)',
        'rgba(151, 71, 255, .5)',
        'rgba(255, 255, 255, .3)',
      ],
      plotOptions: {
        bar: {
          borderRadius: 8,
          columnWidth: '45%',
          distributed: true,
          borderRadiusApplication: 'end',
          dataLabels: {
            position: 'top',
          },
          colors: {
            ranges: [
              {
                from: 'red',
                to: 'green',
                color: ['red'],
              },
            ],
          },
        },
      },
      dataLabels: {
        enabled: true,

        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ['#fff'],
        },
      },

      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],

        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {},
        tooltip: {
          enabled: false,
          offsetY: -35,
        },
        labels: {
          style: {
            colors: '#fff',
            cssClass: 'legend2 ',
          },
        },
      },
      fill: {
        opacity: 1,
      },
      yaxis: {
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
        },
        axisBorder: {
          show: true,
          color: '#fff',
          offsetX: 0,
          offsetY: -2,
        },
      },
      title: {},
    };
  }
}
