import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() page: number = 1;
  @Input() max_pages = 1;
  @Output() setPage = new EventEmitter<number>();
  pagination_itens: string[] = [];

  ngOnInit(): void {
    this.pagination_itens = this.mount_array(this.page, this.max_pages);
  }

  mount_array(page: number, max_pages: number): string[] {
    let pagination_array: string[] = [];
    if (max_pages < 7) {
      pagination_array = Array.from(
        { length: this.max_pages },
        (value, index) => `${index}`
      );
      return pagination_array;
    }
    if (page > 4) {
      pagination_array.push('1', '2', '3', '...');
    }
    if (page < max_pages - 3) {
      if (page - 1 > 0) {
        pagination_array.push(`${page - 1}`, `${page}`, `${page + 1}`);
      } else {
        pagination_array.push(`${page}`, `${page + 1}`, `${page + 2}`);
      }

      pagination_array.push('...');
    } else if (page < max_pages - 2 && page > 4) {
      pagination_array.push(`${page - 2}`, `${page - 1}`, `${page}`, '...');
    }
    pagination_array.push(
      `${max_pages - 2}`,
      `${max_pages - 1}`,
      `${max_pages}`
    );

    return pagination_array;
  }

  ngOnChanges() {
    this.pagination_itens = this.mount_array(this.page, this.max_pages);
  }

  set_page_click(position: string) {
    this.setPage.emit(parseInt(position));
  }

  is_actual_page(value: string) {
    return parseInt(value) === this.page;
  }
}
