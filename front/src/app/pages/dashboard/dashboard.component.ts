import { Component, ElementRef, ViewChild } from '@angular/core';
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

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TableRowComponent, PaginationComponent, HttpClientModule],
  providers: [ComplaintService, HttpClient],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  mocked_data: IRowContent = {
    id: '668c36d9e3872b4344d4b38d',
    neighborhood: 'Recife',
    date: '2024-04-01T02:45:16',
    aggression_type: 'THREATENING',
  };
  constructor(
    public dialog: MatDialog,
    public Complaint_service: ComplaintService
  ) {
    this.get_complaints();
  }

  @ViewChild('search_input', { static: true }) searched_string!: ElementRef;

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
      console.log(this.max_pages);
    });
  }

  complaints_data: complaint[] = [];
  filter_data: IFilter = {
    query_string: '',
  };

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
