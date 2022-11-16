import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  services: Observable<any> = this.http.get('/api/services');
  banner1: Observable<any> = this.http.get('/api/banner-1');
  banner2: Observable<any> = this.http.get('/api/banner-2');

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
}
