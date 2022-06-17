import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ArrayFormComponent } from './array-form.component';
import { RouterModule, Routes } from '@angular/router';
import { TodoService } from './todo.service';

const routes: Routes = [
  {path: '', component: ArrayFormComponent, pathMatch: 'full'},
  {path: 'edit/:id', component: ArrayFormComponent, pathMatch: 'full'},
]

@NgModule({
  declarations: [TodoListComponent, TodoFormComponent, ArrayFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [TodoService]
})
export class ArrayFormModule {}