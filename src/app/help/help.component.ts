import { Component, OnInit } from '@angular/core';
import {ActionService} from '../action.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
})
export class HelpComponent implements OnInit {

  constructor(private actionService: ActionService) { }

  ngOnInit(): void {
    this.actionService.addButton('Кнопка 1', this.delete.bind(this));
    this.actionService.addButton('Кнопка 2', this.create.bind(this));
  }

  delete(): void {
    alert('delete action for HelpComponent');
  }

  create(): void {
    alert('create action for HelpComponent');
  }
}
