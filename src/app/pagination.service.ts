import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  getUserListData(){
    return ["user 1", "user 2", "user 3", "user 4", "user 5", "user 6", "user 7", "user 8", "user 9", "user 10","user 11", "user 12", "user 13", "user 14", "user 15", "user 16", "user 17", "user 18", "user 19", "user 20", "user 21", "user 22", "user 23"]
  }
  constructor() { }
}
