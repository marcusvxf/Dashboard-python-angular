import { Component, Input } from '@angular/core';
import { IRowContent } from '../../../shared/interfaces/complaint';
import { CommonModule } from '@angular/common';
import { AgressionTypeTranslatePipe } from '../../../shared/pipes/agression-type-translate.pipe';
import { Router } from '@angular/router';
@Component({
  selector: 'app-table-row',
  standalone: true,
  imports: [CommonModule, AgressionTypeTranslatePipe],
  providers: [Router],
  templateUrl: './table-row.component.html',
  styleUrl: './table-row.component.scss',
})
export class TableRowComponent {
  @Input() complaint_data: IRowContent | undefined;

  @Input() index: number = 0;

  constructor(private router: Router) {}

  public navigate_to_details(): void {
    this.router.navigate(['/'], {
      queryParams: { id: this.complaint_data?.id },
    });
  }
}
