import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ComplaintService } from '../../core/services/complaint.service';
import { complaint } from '../../shared/interfaces/complaint';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslatePipe } from '../../shared/pipes/translate.pipe';
import { Router } from '@angular/router';
import moment from 'moment';

@Component({
  selector: 'app-complaint-details',
  standalone: true,
  imports: [HttpClientModule, TranslatePipe],
  providers: [ComplaintService, HttpClient, Router],
  templateUrl: './complaint-details.component.html',
  styleUrl: './complaint-details.component.scss',
})
export class ComplaintDetailsComponent implements OnInit {
  @Input() id!: string;
  constructor(
    public complaint_service: ComplaintService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log(this.id);
    this.get_complaint_data();
  }

  complaint_data: complaint | undefined;

  get_complaint_data() {
    this.complaint_service.get_complain(this.id).subscribe((el) => {
      this.complaint_data = el;
    });
  }

  get_age(date: string): number {
    let first_date = moment(date, 'MM/DD/YYYY');
    let actual_date = moment();
    return actual_date.diff(date, 'years');
  }

  public navigate_to_details(): void {
    this.router.navigate(['/dashboard']);
  }
}
