import { FormControl } from '@angular/forms';

export class AgeValidator {
    static isValid(control: FormControl): any {
        // nếu age không phải là số
        if(isNaN(control.value)){
            return {
                "not a number": true
            };
        }
        //nếu age là số lẻ
        if(control.value % 1 !== 0){
            return {
                "not a whole number": true
            };
        }
        //nếu age < 18
        if(control.value < 18){
            return {
                "too young": true
            };
        }
        //nếu age > 120
        if(control.value > 120){
            return {
                "not realistic": true
            };
        }

        return null;
    }
}