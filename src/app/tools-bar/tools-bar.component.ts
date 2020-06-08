import { Component, OnInit } from '@angular/core';
import {NavigationStart, Router} from '@angular/router';
import { ActionService } from '../action.service';
import {IButton} from '../interfaces/buttoninterface';

@Component({
  selector: 'app-tools-bar',
  templateUrl: './tools-bar.component.html',
})
export class ToolsBarComponent implements OnInit {
  navigationItems: IButton[] = [];

  constructor(private actionService: ActionService, private router: Router) {
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationStart) {
        this.navigationItems = [];
      }
    });
    this.actionService.getButtons().subscribe(link => {
      this.navigationItems.push(link);
    });
  }

  ngOnInit(): void {

  }

}
