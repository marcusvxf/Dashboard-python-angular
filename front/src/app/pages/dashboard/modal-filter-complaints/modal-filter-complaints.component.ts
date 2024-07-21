import { Component, OnChanges, SimpleChanges } from '@angular/core';

import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';
import { SelectorComponent } from '../../../shared/components/selector/selector.component';
import { IFilter } from '../../../shared/interfaces/complaint';
import { type_filter_values } from '../../../shared/types/complaint';
import { IDictOptions } from '../../../shared/interfaces/components';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';

import { provideNativeDateAdapter } from '@angular/material/core';
import {
  MatDatepicker,
  MatDatepickerModule,
} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import moment from 'moment';

@Component({
  selector: 'app-modal-filter-complaints',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    SelectorComponent,
    MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
  ],
  templateUrl: './modal-filter-complaints.component.html',
  styleUrl: './modal-filter-complaints.component.scss',
})
export class ModalFilterComplaintsComponent implements OnChanges {
  complaint_filter_attributes: IFilter = {
    type: undefined,
    from_date: undefined,
    to_date: undefined,
    query_string: undefined,
    user_id: undefined,
  };

  start_date: any;
  end_date: any;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      filter_data: IFilter;
      set_filter: (filter: IFilter) => void;
    },
    public dialogRef: MatDialogRef<ModalFilterComplaintsComponent>
  ) {
    this.complaint_filter_attributes = {
      ...this.complaint_filter_attributes,
      ...data.filter_data,
    };
    if (
      this.complaint_filter_attributes.from_date &&
      this.complaint_filter_attributes.to_date
    ) {
      this.start_date = new Date(this.complaint_filter_attributes.from_date);
      this.end_date = new Date(this.complaint_filter_attributes.to_date);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.complaint_filter_attributes = {
      ...this.complaint_filter_attributes,
      ...this.data.filter_data,
    };
  }

  type_options: IDictOptions = {
    THREATENING: 'AMEAÇA',
    GROPING: 'APALPAR',
    STALKING: 'PERSEGUIÇÂO',
    UNWANTED_COMMENTS: 'COMENTÁRIOS INDESEJADOS',
    FLASHING: 'PISCADA',
    UNWANTED_PHOTOS: 'FOTOS INDESEJADAS',
  };

  set_filter_value(name: type_filter_values, value: string) {
    this.complaint_filter_attributes[name] = value;
  }

  clean_filter() {
    this.complaint_filter_attributes = {
      type: undefined,
      from_date: undefined,
      to_date: undefined,
      user_id: undefined,
    };
    this.data.set_filter({});
    this.dialogRef.close();
  }

  confirm_filters() {
    if (this.start_date !== this.end_date) {
      this.complaint_filter_attributes.from_date = moment(
        this.start_date
      ).format('yyyy-MM-DDThh:mm:ss');
      this.complaint_filter_attributes.to_date = moment(this.end_date).format(
        'yyyy-MM-DDThh:mm:ss'
      );
    }

    this.data.set_filter(this.complaint_filter_attributes);
    this.dialogRef.close();
  }
}
