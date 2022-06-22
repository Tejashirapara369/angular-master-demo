import { AfterContentInit, AfterViewChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { generateForm } from 'src/app/shared/form/form-generate';
import { segment } from '../user-form-fields';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit, AfterContentInit, AfterViewChecked {
    public formGroup: FormGroup = new FormGroup({});
    public form = segment['userForm'].fields;
    public showPopup: boolean = false;
    public userInfo: any;
    // public modalObj: PopupModal = {
    //   header: 'Fill the form',
    //   // content: 'here you can add content',
    //   headerStyles: {
    //     color: 'red',
    //     fontWeight: 800,
    //   },
    //   // subHeader: 'Here you can add sub heading',
    //   successBtn: true,
    //   cancelBtn: true,
    //   extraBtn:'click this btn',
    //   successBtnStyles: {
    //     color: 'red',
    //     backgroundColor: 'yellow',
    //     border: '2px solid black',
    //   },
    //   btnAlign: 'start',
    // };
  
    userList: any[] = [];
  
    constructor(
      private fb: FormBuilder,
      private readonly changeDetectorRef: ChangeDetectorRef
    ) {}
  
    ngAfterContentInit() {
      var fieldArray = generateForm(this.form);
      // fieldArray['hobbies'] = this.fb.array([])
      this.formGroup = this.fb.group(fieldArray);
      this.formGroup.valueChanges.subscribe((val) => {
        console.log(`val`, val);
      });
    }

    // async dummyFun() {
    //   const promose = new Promise((resolve, reject) => setTimeout(() => resolve('hello'), 2000))
  
    //   const result = await promose;
    //   console.log('result ==>', result);
    //   console.log('outside ==>');
    // }
    // dummyFun() {
    //   const promose = new Promise((resolve, reject) => setTimeout(() => resolve('hello'), 2000))
  
    //   promose.then(res => {
    //     console.log('promi9se using then ==>', res);
        
    //   })
  
    //   console.log('outside ==>');
    // }
  
    ngAfterViewChecked(): void {
      this.changeDetectorRef.detectChanges();
    }
  
    ngOnInit(): void {}
  
    get hobbyArray() {
      return (this.formGroup?.get('hobbies') as FormArray).controls;
    }
  
    onSave() {
      console.log(`this.formGroup`, this.formGroup);
      this.userList.push(this.formGroup?.value)
      this.showPopup = false;
    }
  
    clickMeEvent() {
      console.log(`this.formGroup`, this.formGroup);
      this.userInfo = this.formGroup?.value;
    }

}
