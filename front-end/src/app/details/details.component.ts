import { Component, OnInit } from '@angular/core';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  item = {};
  constructor(private data: TransferService) {}

  ngOnInit(): void {
    this.data.share.subscribe((x) => (this.item = x));
    console.log(this.item);
  }
}
