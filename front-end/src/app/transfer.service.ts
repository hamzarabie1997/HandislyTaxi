import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransferService {
  private content = new BehaviorSubject<any>('');
  public share = this.content.asObservable();

  constructor() { }
  
  updateData(text) {
    this.content.next(text);
  }
}
