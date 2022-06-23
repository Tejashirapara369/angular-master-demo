import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  animations: [
    trigger('fadeIn', [
      state('void', style({opacity: 0})), 
      transition(':enter', [ // :enter, :leave
        animate(700)
      ]),
      transition(':leave', [ // :enter, :leave
        animate(700)
      ]),
    ]),
  ]
})
export class TodoListComponent implements OnInit {

  constructor(public todoService: TodoService) { }

  ngOnInit(): void {
  }

  deleteUser(i: number) {
    this.todoService.users.splice(i, 1);
  }

  trackByItems(index: number, item: any): number {
    return index;
  }
}
