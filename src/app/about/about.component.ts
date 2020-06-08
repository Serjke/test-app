import { Component, OnInit } from '@angular/core';
import {ActionService} from '../action.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit {

  constructor(private actionService: ActionService) { }

  ngOnInit(): void {
    this.actionService.addButton('Кнопка 1',  this.create.bind(this));
    this.actionService.addButton('Кнопка 2',  this.update.bind(this));
  }

  create(): void {
    alert('create action for AboutComponent');
  }

  update(): void {
    alert('update action for AboutComponent');
  }
}
