import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', 
    loadChildren: () => import('./array-form/array-form.module').then(m => m.ArrayFormModule)
  },
  {
    path: 'dynamic-form', 
    loadChildren: () => import('./dynamic-form/dynamic-form.module').then(m => m.DynamicFormModule)
  },
  {
    path: 'question-form', 
    loadChildren: () => import('./nested-form-array/nested-form-array.module').then(m => m.NestedFormArrayModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
