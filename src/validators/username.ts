import { FormGroup, FormControl } from '@angular/forms';

export class UsernameValidator {
    static checkUsername(control: FormControl): any {
        //trả về Promise vì đây là xác thực không đồng bộ
        return new Promise(resolve => {
            //Fake a slow response form server

            setTimeout(() => {
                if(control.value.toLowerCase() === "greg") {

                    resolve({
                        "username taken" : true
                    });
                } 
                else {
                    resolve(null);
                }
            }, 2000);
        });
    }
}