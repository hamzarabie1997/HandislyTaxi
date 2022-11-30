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
  styles: string[] = [];
  newposition = '';
  greenColor = '';
  whiteColor = '';
  yellowColor = '';

  ngOnInit(): void {
    this.ServicesService.getServices().subscribe((data) => {
      this.services = data;
    });
    this.ServicesService.getBanner().subscribe((data) => {
      this.banners = data;
    });

    this.ServicesService.getStyles().subscribe((data) => {
      this.styles = data;
      this.newposition = this.styles['position-top'];
      this.greenColor = this.styles['color-green'];
      this.whiteColor = this.styles['color-white'];
      this.yellowColor = this.styles['color-yellow'];
    });
  }
}
