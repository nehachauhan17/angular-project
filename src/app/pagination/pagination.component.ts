import { PaginationService } from './../pagination.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  completeUserList; // userlist
  userList; // filtered userlist on the basis of pagesize
  pageSize: number = 10; // default pagination size
  currentPage = 0; // default current page
  isdisable; // used to disable buttons on the basis of condiition
  isdisablefirst;
  isdisablelast;
  control; // pagination control buttons
  
  constructor(service: PaginationService) {
    this.completeUserList = service.getUserListData();
    this.pagination(this.completeUserList, this.pageSize);
    // pagination count on basis of data 
    this.control= Math.ceil(this.completeUserList.length/this.pageSize);
  }

  private pagination(list: string, size: number) {
    let listcount = list.length;
    if(listcount > size){  //check if completelist is > 10
      this.userList = this.completeUserList.slice(this.currentPage*size,(this.currentPage+1)*size); //filtered userlist on the basis of pagesize
        if(this.userList.length < size){  //check if  filtered userlist is < 10
          this.isdisablelast = true;
          this.isdisablefirst = false;
        }
        else{
          if(this.currentPage == 0){
            this.isdisablefirst = true;
            this.isdisablelast = false;
          }
          else{
            this.isdisable = false;
            this.isdisablefirst = false;
            this.isdisablelast = false;
          }
        }
    }
    else{
      this.userList = this.completeUserList;
      this.isdisable = true;
    }
  }

  //show userlist on the basis of control button click (1,2, etc)
  private onButtonClick(value: number){
    this.currentPage = value;
    this.pagination(this.completeUserList, this.pageSize);
  }
  
  //show userlist on the basis of next button click
  private onNext(currentPage){
    this.currentPage = currentPage + 1;
    this.pagination(this.completeUserList, this.pageSize);
  }

  //show userlist on the basis of previous button click
   onPrevious(currentPage){
    this.currentPage = currentPage - 1;
    this.pagination(this.completeUserList, this.pageSize);
  }

  //show userlist on the basis of first button click
  private onfirst(){
    this.currentPage = 0;
    this.pagination(this.completeUserList, this.pageSize);
  }

  //show userlist on the basis of last button click
  private onlast(){
    this.currentPage = this.control - 1;
    this.pagination(this.completeUserList, this.pageSize);
  }

  ngOnInit() {
  }

}
