import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { TableRowComponent } from './table-row/table-row.component';
import {
  IFilter,
  IRowContent,
  complaint,
} from '../../shared/interfaces/complaint';
import { PaginationComponent } from '../../shared/components/pagination/pagination.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header.component';
import { ModalFilterComplaintsComponent } from './modal-filter-complaints/modal-filter-complaints.component';
import { ComplaintService } from '../../core/services/complaint.service';
import {
  HttpClient,
  HttpClientModule,
  HttpHandler,
} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { GenreChartComponent } from './genre-chart/genre-chart.component';
import { AgressionTypeComponent } from './agression-type/agression-type.component';
import { AgeGroupComponent } from './age-group/age-group.component';
import { ComplaintMomentChartComponent } from './complaint-moment-chart/complaint-moment-chart.component';
import { CasesPerMonthChartComponent } from './cases-per-month-chart/cases-per-month-chart.component';
import { NeighborhoodRankingChartComponent } from './neighborhood-ranking-chart/neighborhood-ranking-chart.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    TableRowComponent,
    PaginationComponent,
    HttpClientModule,
    GenreChartComponent,
    AgressionTypeComponent,
    AgeGroupComponent,
    ComplaintMomentChartComponent,
    CasesPerMonthChartComponent,
    NeighborhoodRankingChartComponent,
  ],
  providers: [ComplaintService, HttpClient],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  @ViewChild('search_input', { static: true }) searched_string!: ElementRef;
  @ViewChild('slider', { read: true }) slides: any;
  constructor(
    public dialog: MatDialog,
    public Complaint_service: ComplaintService,
    private rend: Renderer2
  ) {
    this.get_complaints();
  }

  get_complaints() {
    let trated_filter: any = {};

    for (let [key, value] of Object.entries(this.filter_data)) {
      if (value != undefined && value != '') trated_filter[key] = value;
    }
    this.Complaint_service.get_all_complaints(
      10,
      this.page,
      trated_filter
    ).subscribe((el) => {
      this.complaints_data = el.complaints;
      this.max_pages = el.max_pages;
    });
  }

  complaints_data: complaint[] = [];
  filter_data: IFilter = {
    query_string: '',
  };

  el: HTMLDivElement | undefined | null;

  page = 1;
  max_pages = 10;
  dialog_ref!: MatDialogRef<ModalFilterComplaintsComponent>;
  set_page(page: number) {
    this.page = page;
    this.get_complaints();
  }

  openModal(): void {
    this.dialog_ref = this.dialog.open(ModalFilterComplaintsComponent, {
      width: '90vw',
      height: '45vh',
      data: {
        filter_data: this.filter_data,
        set_filter: (data: IFilter) => {
          this.set_filter(data);
        },
      },
    });
  }

  on_text_search() {
    this.filter_data.query_string = this.searched_string.nativeElement.value;
    this.get_complaints();
  }

  set_filter(filter: IFilter) {
    this.filter_data = filter;
    this.get_complaints();
  }

  close_modal(): void {
    this.dialog_ref.close();
  }
}
