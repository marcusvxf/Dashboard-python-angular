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

@Component({
  selector: 'app-agression-type',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './agression-type.component.html',
  styleUrl: './agression-type.component.scss',
})
export class AgressionTypeComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: any;

  constructor() {
    this.chartOptions = {
      series: [
        {
          data: [200, 150, 100, 80, 50, 20],
        },
      ],
      chart: {
        type: 'bar',
        height: 280,
      },
      plotOptions: {
        bar: {
          barHeight: '100%',
          distributed: true,
          horizontal: true,
          dataLabels: {
            position: 'bottom',
          },
        },
      },

      colors: [
        'rgba(91, 67, 217, 1)',
        'rgba(91, 67, 217, 0.8)',
        'rgba(91, 67, 217, 0.6)',
        'rgba(91, 67, 217, 0.4)',
        'rgba(91, 67, 217, 0.3)',
        'rgba(182, 181, 187, 1)',
      ],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 4,
        colors: ['#f8f8f8'],
      },
      grid: {
        yaxis: {
          lines: {
            show: false,
          },
        },
      },

      xaxis: {
        axisTicks: {
          show: false,
        },
        position: 'top',
        categories: [
          'Fotografia não autorizada',
          'Encoxada/apalpada',
          'Intimidação',
          'Pessoa se exibindo',
          'Perseguição',
          'Outros',
        ],
        axisBorder: {
          show: true,
          color: '#313131',
          offsetX: 0,
          offsetY: 0,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
          color: '#fff',
          offsetX: 0,
          offsetY: 0,
        },
      },
      title: {
        text: 'Custom DataLabels',
        align: 'center',
        floating: true,
      },
      subtitle: {
        text: 'Category Names as DataLabels inside bars',
        align: 'center',
      },
      tooltip: {
        theme: 'dark',
        x: {
          show: false,
        },
        y: {
          title: {
            formatter: function () {
              return '';
            },
          },
        },
      },
    };
  }
}
