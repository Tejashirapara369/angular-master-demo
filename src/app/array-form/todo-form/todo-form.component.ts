import { Component, OnInit } from '@angular/core';
import { UntypedFormArray, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
    private readonly fb: UntypedFormBuilder,
    private readonly todoService: TodoService,
    private readonly route: ActivatedRoute,
    private readonly router: Router) {
    this.route.params.subscribe(({ id }) => {
      if (+id > -1 && this.todoService.users[+id]) {
        this.editMode = true;
        this.selectedUser = this.todoService.users[+id];
        this.formArray.controls = [];
        this.selectedUser.tasks.forEach(() => this.addNewControl())
        this.todoListForm.patchValue(this.selectedUser);
      }
    })
  }

  todoListForm: UntypedFormGroup = this.fb.group({
    name: ['', Validators.required],
    tasks: this.fb.array([])
  })

  get formArray(): UntypedFormArray {
    return this.todoListForm.get('tasks') as UntypedFormArray;
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
    if(this.editMode) {
      const id: number = this.route.snapshot.params['id']
      this.todoService.updateUserById(id, this.todoListForm.value);
    } else {
      this.todoService.addUser(this.todoListForm.value);
    }
    this.router.navigate(['../../'])
    this.todoListForm.reset();
  }

  // log(){
  //   console.log('this. ==>', this.todoListForm.value)
  // }
}
