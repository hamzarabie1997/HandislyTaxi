import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SignupFormService {
  constructor(private http: HttpClient) {}
  signUp(url, data) {
    return this.http.post(url, data);
  }
}
