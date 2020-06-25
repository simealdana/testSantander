import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {

  constructor(private http: Http ) { }

  getDateTimeAPI():Observable<any> {
    return this.http.get('https://jsonmock.hackerrank.com/datetime').pipe();
  }

}
