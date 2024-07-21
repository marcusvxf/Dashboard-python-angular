import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { TableRowComponent } from './table-row.component';
import { IRowContent, complaint } from '../../../shared/interfaces/complaint';
import { Router, NavigationExtras } from '@angular/router';
import { user } from '../../../shared/interfaces/user';

describe('TableRowComponent', () => {
  let component: TableRowComponent;
  let fixture: ComponentFixture<TableRowComponent>;

  let mocked_data: complaint = {
    id: '668c36d9e3872b4344d4b38d',
    neighborhood: 'Recife',
    date: '2024-04-01T02:45:16',
    type: 'THREATENING',
    user_id: 'undefined',
    at_moment: true,
    situation: '',
    description: '',
    created_at: '',
    updated_at: '',
    user: {} as user,
  };

  let correct_data: complaint = {
    id: '668c36d9e3872b4344d4b38d',
    neighborhood: 'Recife',
    date: '01/04/2024',
    type: 'AMEAÇA',
    user_id: 'undefined',
    at_moment: true,
    situation: '',
    description: '',
    created_at: '',
    updated_at: '',
    user: {} as user,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableRowComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TableRowComponent);
    component = fixture.componentInstance;
    component.complaint_data = mocked_data;
    fixture.detectChanges();
  });

  it('should show correct info', () => {
    const row_component: HTMLElement[] =
      fixture.nativeElement.querySelectorAll('#column');
    let index = 0;
    for (const [key, value] of Object.entries(correct_data)) {
      expect(row_component[index].textContent).toContain(value);
      index++;
    }
  });

  it('Route function should be called', fakeAsync(() => {
    const spy_navigate_func = spyOn(component, 'navigate_to_details');

    const column: HTMLElement = fixture.nativeElement.querySelector('#column');
    column.click();
    tick();
    expect(spy_navigate_func).toHaveBeenCalled();
  }));

  it('Colors should be correct', () => {
    component.index = 0;
    fixture.detectChanges();
    let table_row_component: HTMLElement =
      fixture.nativeElement.querySelector('.table-row');
    expect(table_row_component.className).toContain('bg-gray_4');

    component.index = 1;
    fixture.detectChanges();
    table_row_component: HTMLElement =
      fixture.nativeElement.querySelector('.table-row');
    expect(table_row_component.className).toContain('bg-light_gray_3');

    component.index = 2;
    fixture.detectChanges();
    table_row_component: HTMLElement =
      fixture.nativeElement.querySelector('.table-row');
    expect(table_row_component.className).toContain(
      'bg-nina_primary_extra_light_color'
    );
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
