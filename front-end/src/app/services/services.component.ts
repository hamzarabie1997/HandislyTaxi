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

  update(serImg, serName, serDuration, serPrice, serDesc, serPick) {
    this.found.push(serImg, serName, serDuration, serPrice, serDesc, serPick);
    this.data.updateData(this.found);
  }
  ngOnInit(): void {
    this.http.getServices('http://localhost:3000/backend').subscribe({
      next: (data) => {
        this.services = data;
        console.log(this.services);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
