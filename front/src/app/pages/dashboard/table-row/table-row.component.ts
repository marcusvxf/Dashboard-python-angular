import { Component, Input } from '@angular/core';
import { IRowContent, complaint } from '../../../shared/interfaces/complaint';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../shared/pipes/translate.pipe';
import { Router } from '@angular/router';
@Component({
  selector: 'app-table-row',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  providers: [Router],
  templateUrl: './table-row.component.html',
  styleUrl: './table-row.component.scss',
})
export class TableRowComponent {
  @Input() complaint_data: complaint | undefined;

  @Input() index: number = 0;

  constructor(private router: Router) {}

  public navigate_to_details(): void {
    this.router.navigate(['/complaint'], {
      queryParams: { id: this.complaint_data?.id },
    });
  }
}
