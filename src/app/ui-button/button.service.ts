import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ButtonService {

  private TOGGLE_1 = 'Toggle 1';
  private TOGGLE_2 = 'Toggle 2';

  public currentText = this.TOGGLE_1;

  public textChanged$ = new BehaviorSubject('');

  constructor() { }

  toggle() {
    if (this.currentText == this.TOGGLE_1) {
      this.currentText = this.TOGGLE_2;
    } else {
      this.currentText = this.TOGGLE_1;
    }

    this.textChanged$.next(this.currentText);
  }
}
