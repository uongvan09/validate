import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, AbstractControl, FormGroup, Validators} from "@angular/forms"
import { AgeValidator } from '../../validators/age';
import { UsernameValidator } from '../../validators/username';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild('signUpForm') signUpForm: ElementRef;

  signInForm : FormGroup;
  firstname : AbstractControl;
  lastname : AbstractControl;
  age : AbstractControl;
  username: AbstractControl;
  privacy: AbstractControl;
  // bio: AbstractControl;
  submitAttempt: boolean;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public formBuilder: FormBuilder
     ) {

      this.signInForm = formBuilder.group({
        firstname: ['', Validators.compose([Validators.required, Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*')])],
        lastname: ['', Validators.compose([Validators.required, Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*')])],
        age:[''],
        username: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')]), UsernameValidator.checkUsername],
        privacy: ['', Validators.required],
        bio: ['']
        
      })
  }

  save(){
    //chỉ ra user đã click submit
    this.submitAttempt = true;

    if(this.signInForm.valid){
      console.log("success!");
      console.log(this.signInForm.value);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
