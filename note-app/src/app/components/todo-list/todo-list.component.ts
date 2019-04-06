import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../../services/todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  message:string;

  constructor(public listService:TodoListService) { }

  ngOnInit() {
    this.listService.GetMessage().subscribe((data) => {
      console.log(data);
    });

  }

}
