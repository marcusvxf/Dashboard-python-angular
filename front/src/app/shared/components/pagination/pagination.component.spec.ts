import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    component.page = 1;
    component.max_pages = 10;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set page correct ', () => {
    const emit_spy = spyOn(component.setPage, 'emit');

    const increase_button: HTMLElement =
      fixture.nativeElement.querySelector('#increase-button');

    const decrease_button: HTMLElement =
      fixture.nativeElement.querySelector('#decrease-button');

    increase_button.click();
    expect(emit_spy).toHaveBeenCalledWith(2);
    component.page = 2;
    fixture.detectChanges();
    decrease_button.click();

    expect(emit_spy).toHaveBeenCalledWith(1);
  });

  it('should disable decrease button when == 1', () => {
    const emit_spy = spyOn(component.setPage, 'emit');

    const decrease_button: HTMLElement =
      fixture.nativeElement.querySelector('#decrease-button');

    decrease_button.click();
    expect(emit_spy).not.toHaveBeenCalled();
  });

  it('should disable increase button when == max_page', () => {
    const emit_spy = spyOn(component.setPage, 'emit');

    const increase_button: HTMLElement =
      fixture.nativeElement.querySelector('#increase-button');
    component.page = 10;
    fixture.detectChanges();
    increase_button.click();
    expect(emit_spy).not.toHaveBeenCalled();
  });

  it('should build pagination numbers correct', () => {
    expect(component.mount_array(7, 10)).toEqual([
      '1',
      '2',
      '3',
      '...',
      '5',
      '6',
      '7',
      '...',
      '8',
      '9',
      '10',
    ]);
    expect(component.mount_array(2, 10)).toEqual([
      '1',
      '2',
      '3',
      '...',
      '8',
      '9',
      '10',
    ]);
  });
});
