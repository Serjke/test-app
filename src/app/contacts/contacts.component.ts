import { Component, OnInit } from '@angular/core';
import {ActionService} from '../action.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
})
export class ContactsComponent implements OnInit {
  someVar = '+7(000) 000-00-00';

  constructor(private actionService: ActionService) { }

  ngOnInit(): void {
    this.actionService.addButton('Кнопка 1', this.actionTwo.bind(this));
    this.actionService.addButton('Кнопка 2', this.actionOne.bind(this));
  }

  actionOne(): void {
    this.someVar = '-';
  }

  actionTwo(): void {
    alert(`Телефон: ${this.someVar}`);
  }
}
