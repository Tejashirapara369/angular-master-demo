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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
