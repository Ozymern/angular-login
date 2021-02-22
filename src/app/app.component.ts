import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder, FormArray, AbstractControl} from '@angular/forms';
import { RecaptchaModule, RecaptchaFormsModule, ReCaptchaV3Service } from 'ng-recaptcha';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login-app';
  form: FormGroup;
  _token:any;

  user: any = {
    username: 'Alejandro',
    password: 'Fernandez'
   
  };

  loginForm: FormGroup;
  ngOnInit() {
    this.form = new FormGroup({

      // FormControl es un objeto qué se usa en los formularios para tener un control sobre su valor y su estado,
      // segundo parametro del constructor agrego validadores
      username: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(3)])


    });
    this.form
    .controls.username
    .statusChanges
    .subscribe(data => console.log(data));
  }
  constructor(public loginService: LoginService,
    private recaptchaV3Service: ReCaptchaV3Service
  ) {
    
  }


  saveChanges() {

    // resetear los valores
    // this.form.reset({
    //   username: '',
    //   password: ''
    // });

    this.recaptchaV3Service.execute('importantAction')
    .subscribe((token) =>  {
      this.loginService.post(this.form.value,token);
    });

   

  }

 
  }


