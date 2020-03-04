import { PaginationService } from './../pagination.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  userList; // userlist
  pageSize: number = 10; // default pagination size
  buttons; // pagination control buttons
  isdisable;
  control;
  
  constructor(service: PaginationService) {
    this.userList = service.getUserListData();
    this.pagination(this.userList, this.pageSize);
    // pagination count on basis of data 
    this.control= Math.ceil(this.userList.length/this.pageSize);
    //this.buttons = this.counter(control);
  }
  // pagination count on basis of data 
 // private counter(i: number) {
   // return new Array(i);
 // }

  private pagination(page: string, size: number): string {
    let listcount = page.length;
    if(listcount > size){ 
      for (var index = 0; index < listcount; index += size) {
        var myChunk = page.slice(index, index+size);
        console.log('curnt pagr' + myChunk);
        if(myChunk.length < size){
          this.isdisable = true;
          console.log('hide next last...' + myChunk);
        }
        else{
          this.isdisable = true;
          console.log('show all btn...' + myChunk);
        }
      }
    }
    else{
      this.isdisable = true;
      console.log('hide all butn...' + page);
    }
    return myChunk;
  }

  private onButtonClick(value: number){
    var currentPage = value;
    console.log('val' + currentPage);
  }

  ngOnInit() {
  }

}
