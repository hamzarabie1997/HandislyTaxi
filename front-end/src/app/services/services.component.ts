import { ServicesService } from './services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  constructor(private ServicesService: ServicesService) {}

  services: string[] = [];
  banners: string[] = [];

  ngOnInit(): void {
    this.ServicesService.getServices().subscribe((data) => {
      this.services = data;
      console.log(this.services);
    });

    this.ServicesService.getBanner().subscribe((data) => {
      this.banners = data;
      console.log(this.banners);
    });
  }
}
