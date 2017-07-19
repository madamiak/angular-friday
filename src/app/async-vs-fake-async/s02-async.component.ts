import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-s02-async',
  template: `
    <h1>{{ title }}</h1>
    <button (click)="setTitle()" class="set-title">
      set title
    </button>
  `
})
export class S02AsyncComponent implements OnInit {

  title: string;

  constructor() {
  }

  ngOnInit() {
  }

  setTitle() {
    new Promise(resolve => {
      resolve('One crazy app!');
    }).then((val: string) => {
      this.title = val;
    });
  }

}
