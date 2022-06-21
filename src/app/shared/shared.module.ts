import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DmControlComponent } from './dm-control/dm-control.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DatepickerModule } from 'ng2-datepicker';

@NgModule({
  declarations: [
    DmControlComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    DatepickerModule
  ],
  exports: [DmControlComponent]
})
export class SharedModule { }
