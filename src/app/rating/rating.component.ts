import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  isFavroite: boolean;
  onClick(){
    this.isFavroite = !this.isFavroite;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
