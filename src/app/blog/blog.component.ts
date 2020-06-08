import {AfterViewInit, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActionService} from '../action.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
})
export class BlogComponent implements OnInit {
  constructor(private actionService: ActionService) {}

  ngOnInit(): void {
    this.actionService.addButton('Кнопка 1', this.create.bind(this));
    this.actionService.addButton('Кнопка 2', this.update.bind(this));
    this.actionService.addButton('Кнопка 3',  this.delete.bind(this));
  }

  create(): void {
    alert('create action for BlogComponent');
  }

  update(): void {
    alert('update action for BlogComponent');
  }

  delete(): void {
    alert('delete action for BlogComponent');
  }
}
