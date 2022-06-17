import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from '../todo.interface';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  editMode: boolean = false;
  selectedUser: User | undefined;

  constructor(
    private readonly fb: FormBuilder,
    private readonly todoService: TodoService,
    private readonly route: ActivatedRoute) {
    this.route.params.subscribe(({ id }) => {
      if (id > -1 && this.todoService.users[+id]) {
        this.editMode = true;
        this.selectedUser = this.todoService.users[+id];
        this.formArray.controls = [];
        this.selectedUser.tasks.forEach(() => this.addNewControl())
        this.todoListForm.patchValue(this.selectedUser);
      }
    })
  }

  todoListForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    tasks: this.fb.array([])
  })

  get formArray(): FormArray {
    return this.todoListForm.get('tasks') as FormArray;
  }

  ngOnInit(): void {
    if(!this.editMode) this.addNewControl();
  }

  addNewControl(name?: string, priority?: number, time?: string) {
    this.formArray.push(
      this.fb.group({
        name: [name || '', Validators.required],
        priority: [priority || '', Validators.required],
        time: [time || '', Validators.required]
      })
    )
  }

  removeControl(index: number) {
    this.formArray.removeAt(index);
  }

  saveTodoList() {
    this.todoService.addUser(this.todoListForm.value);
    this.todoListForm.reset();
  }

}
