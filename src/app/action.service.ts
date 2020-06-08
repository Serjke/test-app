import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {IButton} from './interfaces/buttoninterface';

@Injectable({
  providedIn: 'root'
})
export class ActionService {
  private buttons = new Subject<IButton>();

  addButton(linkText: string, func: object) {
    this.buttons.next({ text: linkText, action: func });
  }

  purgeButtons() {
    this.buttons = new Subject<IButton>();
  }

  getButtons(): Observable<any> {
    return this.buttons.asObservable();
  }
}
