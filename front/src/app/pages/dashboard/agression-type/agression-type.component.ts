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
import { IGroupTypeReturn } from '../../../shared/interfaces/group';
import { sort_desc } from '../../../core/utils/utilitaries';

@Component({
  selector: 'app-agression-type',
  standalone: true,
  imports: [NgApexchartsModule, HttpClientModule],
  providers: [HttpClient, GroupService],
  templateUrl: './agression-type.component.html',
  styleUrl: './agression-type.component.scss',
})
export class AgressionTypeComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: any;

  isLoading = true;

  constructor(public group_service: GroupService) {
    this.get_agression_data();
  }

  mount_sorted_type_array(
    el: IGroupTypeReturn
  ): { name: string; value: number }[] {
    let array = [
      { name: 'Fotografia não autorizada', value: el.UNWANTED_PHOTOS },
      { name: 'Encoxada/apalpada', value: el.GROPING },
      { name: 'Intimidação', value: el.THREATENING },
      { name: 'Pessoa se exibindo', value: el.FLASHING },
      { name: 'Perseguição', value: el.STALKING },
      { name: 'Comentários não autorizados', value: el.UNWANTED_COMMENTS },
    ];

    array.sort((a, b) => sort_desc(a.value, b.value));

    return array;
  }

  private get_agression_data() {
    this.group_service.get_types_data().subscribe((el) => {
      let sorted_array = this.mount_sorted_type_array(el);
      this.chartOptions = {
        series: [
          {
            data: [...sorted_array.map((el) => el.value)],
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
            sorted_array[0].name,
            sorted_array[1].name,
            sorted_array[2].name,
            sorted_array[3].name,
            sorted_array[4].name,
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
      this.isLoading = false;
    });
  }
}
