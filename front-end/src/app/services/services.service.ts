import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  url = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getServices(): Observable<any> {
    return this.http.get(this.url + '/services');
  }

  getBanner(): Observable<any> {
    return this.http.get(this.url + '/banners');
  }
}
