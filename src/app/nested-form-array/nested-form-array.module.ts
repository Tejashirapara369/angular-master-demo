import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionFormComponent } from './question-form/question-form.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path: '', component: QuestionFormComponent, pathMatch:'full'}
]

@NgModule({
  declarations: [
    QuestionFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class NestedFormArrayModule { }
