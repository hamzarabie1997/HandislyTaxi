import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  images = [
    {
      path: 'https://static.wixstatic.com/media/11062b_9e80c0edbe91416cb197d78d5b99950d~mv2_d_3224_2309_s_2.jpg/v1/fill/w_2234,h_1600,al_c,q_90,usm_0.66_1.00_0.01/11062b_9e80c0edbe91416cb197d78d5b99950d~mv2_d_3224_2309_s_2.jpg',
    },
    {
      path: 'https://static.wixstatic.com/media/11062b_0010dd216f5447cfab09a3355e2803fb~mv2_d_3840_2200_s_2.jpg/v1/fill/w_2792,h_1600,al_c,q_90,usm_0.66_1.00_0.01/11062b_0010dd216f5447cfab09a3355e2803fb~mv2_d_3840_2200_s_2.jpg',
    },
    {
      path: 'https://static.wixstatic.com/media/11062b_76fd8afb83f74d0c884ec24a713ffd58~mv2_d_3807_2699_s_4_2.jpg/v1/fill/w_2256,h_1600,al_c,q_90,usm_0.66_1.00_0.01/11062b_76fd8afb83f74d0c884ec24a713ffd58~mv2_d_3807_2699_s_4_2.jpg',
    },
    {
      path: 'https://static.wixstatic.com/media/11062b_0171245a0eb1497184bc69f57050b7d0~mv2_d_5616_3744_s_4_2.jpg/v1/fill/w_2400,h_1600,al_c,q_90,usm_0.66_1.00_0.01/11062b_0171245a0eb1497184bc69f57050b7d0~mv2_d_5616_3744_s_4_2.jpg',
    },
    {
      path: 'https://static.wixstatic.com/media/6958de108aeb49ad8e4ea37099589418.jpg/v1/fill/w_2396,h_1600,al_c,q_90,usm_0.66_1.00_0.01/6958de108aeb49ad8e4ea37099589418.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
