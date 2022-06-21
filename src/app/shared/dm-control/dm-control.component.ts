import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { DatepickerOptions } from 'ng2-datepicker';
import { formType, template_ref } from '../form/fields';
import locale from 'date-fns/locale/en-US';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dm-control',
  templateUrl: './dm-control.component.html',
  styleUrls: ['./dm-control.component.css'],
  host: {
    '(document:click)': 'onClick($event)',
  },
})
export class DmControlComponent implements OnInit {

  @Input() form: FormGroup = new FormGroup({});
  @Input() key: string = '';
  openDropdown: boolean = false;

  // options sample with default values
  options: DatepickerOptions = {
    minYear: 1980, // minimum available and selectable year
    maxYear: 2050, // maximum available and selectable year
    placeholder: '', // placeholder in case date model is null | undefined, example: 'Please pick a date'
    format: 'dd-MM-yyyy', // date format to display in input
    formatTitle: 'LLLL yyyy',
    formatDays: 'EEEEE',
    firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
    locale: locale, // date-fns locale
    position: 'bottom',
    inputClass: '', // custom input CSS class to be applied
    calendarClass: 'datepicker-default', // custom datepicker calendar CSS class to be applied
    scrollBarColor: '#0d6efd', // in case you customize you theme, here you define scroll bar color
  };

  constructor(private readonly _eref: ElementRef) { }

  ngOnInit(): void {}

  onClick(event: { target: any; }) {
    if (!this._eref.nativeElement.contains(event.target)) 
    this.openDropdown = false;
  }

  get fieldObj(): formType {
    return template_ref[this.key];
  }

  get control(){
    return this.form.get(this.key) as FormControl;
  }

  get isInValid(){
    return this.control?.invalid && this.control?.touched;
  }

  handleFileInput(event: any) {
    const files: any = Array.from(event.target.files);
    console.log(`handleFileInput`, files)
  }

  onSelectDropdown(value: string): void {
    this.form.get(this.key)?.setValue(value);
    this.openDropdown = false;
  }
}
