import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function createPasswordStrengthValidator(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {

        const value = control.value;
        console.log('value ==>', value)
        if (!value) {
            return null;
        }

        const hasUpperCase = /[A-D]+/.test(value);

        // const passwordValid = hasUpperCase;

        return !hasUpperCase || value.length !== 1 ? {notValid:true}: null;
    }
}