import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  ElementRef,
  ViewChild,
  ViewChildren,
  HostListener,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IDictOptions } from '../../interfaces/components';
import { DictPipe } from '../../pipes/dict-pipe.pipe';

@Component({
  selector: 'app-selector',
  standalone: true,
  imports: [CommonModule, DictPipe],
  templateUrl: './selector.component.html',
  styleUrl: './selector.component.scss',
})
export class SelectorComponent implements OnInit, OnChanges {
  @Input() options!: IDictOptions;
  @Input() defaultOption: string | undefined;
  @Output() onSelectOption = new EventEmitter<string>();

  @ViewChild('select_options')
  selector_options!: any;
  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.options_opened = false;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.options_entered = this.options;
  }

  constructor(private eRef: ElementRef) {}
  options_entered: IDictOptions = {};
  options_opened = false;
  selected_item: { key: string; value: string } = { key: 'unset', value: '' };
  el_ref = {};

  ngOnInit(): void {
    if (this.defaultOption)
      this.selected_item = {
        key: this.defaultOption,
        value: this.options[this.defaultOption],
      };
  }

  open_options() {
    this.options_opened = !this.options_opened;
  }

  select_option(key: string, value: string) {
    this.selected_item = { key, value };
    this.onSelectOption.emit(key);
    this.open_options();
  }
}
