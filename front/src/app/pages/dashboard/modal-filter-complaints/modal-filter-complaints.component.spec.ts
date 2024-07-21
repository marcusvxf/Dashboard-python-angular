import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFilterComplaintsComponent } from './modal-filter-complaints.component';
import { SelectorComponent } from '../../../shared/components/selector/selector.component';
import {
  MatDatepicker,
  MatDatepickerModule,
} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('ModalFilterComplaintsComponent', () => {
  let component: ModalFilterComplaintsComponent;
  let fixture: ComponentFixture<ModalFilterComplaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ModalFilterComplaintsComponent,
        SelectorComponent,
        MatFormFieldModule,
        MatDatepickerModule,
        FormsModule,
        BrowserAnimationsModule,
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalFilterComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should change correctly the data of filter', () => {
    component.set_filter_value('type', 'PERSEGUIÇÂO');

    expect(component.complaint_filter_attributes['type']).toBe('PERSEGUIÇÂO');
  });
});
