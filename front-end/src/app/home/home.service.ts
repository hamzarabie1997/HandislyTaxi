import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class HomeService {
  test = 'Working Test';
  constructor(private http: HttpClient) {}

  httpGet(url) {
    return this.http.get(url);
  }

  httpPost(url, {}) {
    return this.http.post(url, { name: 'Hamza' });
  }

  newSubscribe(url, data) {
    return this.http.post(url, data);
  }

}
