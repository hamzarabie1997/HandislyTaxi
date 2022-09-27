import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  test = 'Working Test';
  constructor(private http: HttpClient) {}

  httpGet(url) {
    return this.http.get(url);
  }

  httpPost(url, {}) {
    return this.http.post(url, { name: 'Hamza' });
  }

  sendEmail(url, data) {
    return this.http.post(url, data);
  }

  save
}