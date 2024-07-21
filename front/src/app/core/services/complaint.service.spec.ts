import { TestBed } from '@angular/core/testing';

import { ComplaintService } from './complaint.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('ComplaintService', () => {
  let service: ComplaintService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HttpClient],
    });
    service = TestBed.inject(ComplaintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
