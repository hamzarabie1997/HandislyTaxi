import { ServicesService } from './services.service';
import { Component, OnInit } from '@angular/core';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  constructor(public http: ServicesService, private data: TransferService) {}

  services: any;
  banners: any;
  found = [];

  update(
    serviceImg,
    serviceName,
    serviceDuration,
    servicePrice,
    serDesc,
    servicePick
  ) {
    this.found.push(
      serviceImg,
      serviceName,
      serviceDuration,
      servicePrice,
      serDesc,
      servicePick
    );
    this.data.updateData(this.found);
  }
  ngOnInit(): void {
    this.http.getData('http://localhost:3000/backend').subscribe({
      next: (data) => {
        this.banners = data[0];
        this.services = data[1];
      },
      error: (err) => {
        throw err;
      },
    });
  }
}
