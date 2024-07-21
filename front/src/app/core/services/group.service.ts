import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, catchError } from 'rxjs';
import {
  IGroupAgeReturn,
  IGroupAtMoment,
  IGroupGendersReturn,
  IGroupMonths,
  IGroupTypeReturn,
  INeighborhood,
} from '../../shared/interfaces/group';

@Injectable({
  providedIn: 'root',
})
export class GroupService {
  constructor(public http: HttpClient) {}

  private base_url = 'http://127.0.0.1:8000/complaints/group/';

  public get_types_data(): Observable<IGroupTypeReturn> {
    const formated_url = this.base_url + 'types';
    return this.http.get<any>(formated_url, {}).pipe(
      catchError((error) => {
        throw error;
      })
    );
  }

  public get_genders_data(): Observable<IGroupGendersReturn> {
    const formated_url = this.base_url + 'genders';
    return this.http.get<any>(formated_url, {}).pipe(
      catchError((error) => {
        throw error;
      })
    );
  }

  public get_age_group_data(): Observable<IGroupAgeReturn> {
    const formated_url = this.base_url + 'age_group';
    return this.http.get<any>(formated_url, {}).pipe(
      catchError((error) => {
        throw error;
      })
    );
  }

  public get_at_moment_data(): Observable<IGroupAtMoment> {
    const formated_url = this.base_url + 'at_moment';
    return this.http.get<any>(formated_url, {}).pipe(
      catchError((error) => {
        throw error;
      })
    );
  }

  public get_months_data(): Observable<IGroupMonths> {
    const formated_url = this.base_url + 'months';
    return this.http.get<any>(formated_url, {}).pipe(
      catchError((error) => {
        throw error;
      })
    );
  }

  public get_neighborhoods_data(): Observable<INeighborhood[]> {
    const formated_url = this.base_url + 'neighborhoods';
    return this.http.get<any>(formated_url, {}).pipe(
      catchError((error) => {
        throw error;
      })
    );
  }
}
