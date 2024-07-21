import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  complaint,
  complaint_return,
  IFilter,
} from '../../shared/interfaces/complaint';
@Injectable({
  providedIn: 'root',
})
export class ComplaintService {
  constructor(private http: HttpClient) {}

  public get_all_complaints(
    limit: number = 10,
    page: number = 1,
    query_params: IFilter
  ): Observable<complaint_return> {
    const url = `http://127.0.0.1:8000/complaints?limit=${limit}&page=${page}`;
    return this.http.get<any>(url).pipe(
      catchError((error) => {
        throw error;
      })
    );
  }
}
