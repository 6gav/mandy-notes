import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  messageUrl:string = '/api/message';

  constructor(private http: HttpClient) { }

  GetMessage(){
    return this.http.get(this.messageUrl);
  }
}
