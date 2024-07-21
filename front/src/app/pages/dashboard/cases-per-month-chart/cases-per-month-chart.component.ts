import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-cases-per-month-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './cases-per-month-chart.component.html',
  styleUrl: './cases-per-month-chart.component.scss',
})
export class CasesPerMonthChartComponent {
  public chartOptions: any;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Casos por mês',
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        },
      ],
      chart: {
        type: 'area',
        height: 250,
        animations: {
          enabled: false,
        },
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
        colors: ['#fff'],
      },
      title: {
        show: false,
      },
      fill: {
        opacity: 1,
        type: 'gradient',
        colors: ['rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, 0.05)'],
      },
      grid: {
        row: {
          colors: ['transparent'], // takes an array which will be repeated on columns
          opacity: 0.5,
        },

        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      markers: {
        size: 5,
        colors: ['#fff'],
        hover: {
          size: 9,
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: '#fff',
            cssClass: 'legend2 ',
          },
        },
        axisBorder: {
          show: true,
          color: '#fff',
          offsetX: 0,
          offsetY: 0,
        },
      },

      xaxis: {
        axisTicks: {
          show: false,
        },
        labels: {
          style: {
            colors: '#fff',
            cssClass: 'legend2 ',
          },
        },
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
        ],
      },
    };
  }
}
