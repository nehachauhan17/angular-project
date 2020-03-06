import { Component } from '@angular/core';
import * as _ from 'underscore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular hello-world';
  
  clickMe(neha){
    console.log('hi', neha);
    console.log('now: ', _.now());
  }
}
