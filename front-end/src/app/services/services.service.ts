import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  test = 'Working Test';
  constructor(private http: HttpClient) {}

  httpGet(url) {
    return this.http.get(url);
  }

  httpPost(url, {}) {
    return this.http.post(url, { name: 'Hamza' });
  }

  getServices(url) {
    return this.http.get(url);
  }

  getBanners(url) {
    return this.http.get(url);
  }
}
