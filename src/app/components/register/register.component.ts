import { Component, OnInit } from '@angular/core';
import { OneService } from 'src/app/all_servises/one.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  showMsg: boolean;
  err: boolean;
  str: Object;
  my_servise: OneService;
  messeges: any;

  constructor(my_servise: OneService) {
    this.my_servise = my_servise;
    this.str = {};
    this.showMsg = false;
    this.err = false;
    this.messeges = { err: false, errpwd: false, submited: false };
  }

  ngOnInit(): void {
  }

  submit(email: HTMLInputElement, password: HTMLInputElement, password2: HTMLInputElement, name_of_carpentry: HTMLInputElement) {
    console.log(password.value);
    console.log(password2.value);

    if (password.value === password2.value)
      this.post(email.value, password.value, name_of_carpentry.value);
    else {
      console.log("error in password");
      this.messeges.errpwd = true;
      this.showMsg = true;
    }

  }
  post(email: string, password: string, name_of_carpentry: string) {
    this.str = { email: email, password: password, carpentry_shop_name: name_of_carpentry };
    this.my_servise.post(this.str).subscribe(data => {
      console.log(data);

      if (data.msg === "err")
        this.messeges.err = true
      else
        this.messeges.submited = true;
      this.showMsg = true;
    }
   
    //  ,err => {
    //    this.messeges.err = true; this.showMsg = true;console.log(err);
       
    //   }
    );
  }
}
