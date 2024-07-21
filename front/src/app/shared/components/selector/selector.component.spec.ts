import {
  ComponentFixture,
  TestBed,
  tick,
  fakeAsync,
} from '@angular/core/testing';

import { SelectorComponent } from './selector.component';

let options = {
  chave1: 'valor1',
  chave2: 'valor2',
  chave3: 'valor3',
};
describe('SelectorComponent', () => {
  let component: SelectorComponent;
  let fixture: ComponentFixture<SelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectorComponent);
    component = fixture.componentInstance;
    component.options = options;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select the option', () => {
    const spy_selector = spyOn(component.onSelectOption, 'emit');
    component.select_option('chave', 'valor');
    fixture.detectChanges();
    expect(component.selected_item).toEqual({ key: 'chave', value: 'valor' });

    expect(spy_selector).toHaveBeenCalledWith('chave');
  });

  it('should save the default option', fakeAsync(() => {
    component.defaultOption = 'chave2';
    fixture.detectChanges();
    component.ngOnInit();
    tick();
    expect(component.selected_item).toEqual({
      key: 'chave2',
      value: options['chave2'],
    });
  }));

  it('should show full height when clicked', fakeAsync(() => {
    const selected_option: HTMLElement =
      fixture.nativeElement.querySelector('[selected-option]');

    let select_options: HTMLElement =
      fixture.nativeElement.querySelector('.selector-options');

    expect(select_options.classList).toContain('max-h-0');
    selected_option.click();
    tick();
    fixture.detectChanges();
    select_options: HTMLElement =
      fixture.nativeElement.querySelector('.selector-options');

    expect(select_options.classList).toContain('max-h-[5rem]');
  }));
});
