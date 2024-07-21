import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { GroupService } from '../../../core/services/group.service';
import { HttpClient } from '@angular/common/http';
import { sort_desc } from '../../../core/utils/utilitaries';

@Component({
  selector: 'app-neighborhood-ranking-chart',
  standalone: true,
  imports: [NgApexchartsModule],
  providers: [GroupService, HttpClient],
  templateUrl: './neighborhood-ranking-chart.component.html',
  styleUrl: './neighborhood-ranking-chart.component.scss',
})
export class NeighborhoodRankingChartComponent {
  public chartOptions: any;
  isLoading = true;

  constructor(public group_service: GroupService) {
    this.get_neighborhood_raking();
  }

  private get_neighborhood_raking() {
    this.group_service.get_neighborhoods_data().subscribe((el) => {
      let sorted_array = el
        .sort((a, b) => sort_desc(a.count, b.count))
        .slice(0, 5);

      this.chartOptions = {
        series: [
          {
            name: 'Inflation',

            data: [...sorted_array.map((el) => el.count)],
          },
        ],
        chart: {
          height: 250,
          width: 400,
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
          categories: [...sorted_array.map((el) => el.name)],
          axisBorder: {
            show: true,
            color: '#fff',
            offsetX: 0,
            offsetY: 0,
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
        grid: {
          yaxis: {
            lines: {
              show: false,
            },
          },
        },
        title: {},
      };
      this.isLoading = false;
    });
  }
}
