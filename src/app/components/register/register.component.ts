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
  jsonOBJ: Object;
  my_servise: OneService;
  messeges: any;

  constructor(my_servise: OneService) {
    this.my_servise = my_servise;
    this.jsonOBJ = {};
    this.showMsg = false;
    this.err = false;
    this.messeges = { err: false, errpwd: false, submited: false };
  }

  ngOnInit(): void {
  }

  submit(email: HTMLInputElement, password: HTMLInputElement, password2: HTMLInputElement, name_of_carpentry: HTMLInputElement, adress: HTMLInputElement, fon: HTMLInputElement, image: HTMLInputElement) {
    console.log(password.value);
    console.log(password2.value);
    console.log(image.value);

    if (password.value === password2.value)
      this.post(email.value, password.value, name_of_carpentry.value, adress.value, fon.value, image.files);
    else {
      console.log("error in password");
      this.messeges.errpwd = true;
      this.showMsg = true;
    }

  }
  post(email: string, password: string, name_of_carpentry: string, adress: string, fon: string, image: FileList | null) {
    
    
    if (image) {
      console.log(image[0]);
      this.jsonOBJ = {
        email: email,
        password: password,
        carpentry_shop_name: name_of_carpentry,
        adress: adress,
        fon_numbers: fon,
        image: image[0]
      };
    }
    this.my_servise.post(this.jsonOBJ).subscribe(data => {
      console.log("this is reterning: "+data);

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
