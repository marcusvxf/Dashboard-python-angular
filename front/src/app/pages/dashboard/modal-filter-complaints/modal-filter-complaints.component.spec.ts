import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFilterComplaintsComponent } from './modal-filter-complaints.component';

describe('ModalFilterComplaintsComponent', () => {
  let component: ModalFilterComplaintsComponent;
  let fixture: ComponentFixture<ModalFilterComplaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalFilterComplaintsComponent],
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

    expect(component.complaint_filter_attributes.type).toBe('PERSEGUIÇÂO');
  });
});
