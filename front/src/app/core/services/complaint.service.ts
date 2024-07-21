import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  complaint,
  complaint_return,
  IFilter,
} from '../../shared/interfaces/complaint';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ComplaintService {
  constructor(private http: HttpClient) {}

  private base_url = environment.api_url + 'complaints';

  public get_all_complaints(
    limit: number = 10,
    page: number = 1,
    query_params: IFilter
  ): Observable<complaint_return> {
    const url = this.base_url;
    return this.http
      .get<any>(url, {
        params: { ...query_params, limit, page },
      })
      .pipe(
        catchError((error) => {
          throw error;
        })
      );
  }

  public get_complain(id: string): Observable<complaint> {
    const url = this.base_url + `/${id}`;
    return this.http.get<any>(url).pipe(
      catchError((error) => {
        throw error;
      })
    );
  }
}
