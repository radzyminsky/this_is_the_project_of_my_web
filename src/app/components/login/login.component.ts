import { Component, OnInit } from '@angular/core';
import { OneService } from 'src/app/all_servises/one.service';
import { types_of_woodens } from 'src/app/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username_and_password: object;
  hc: OneService;
  typesWoodens: types_of_woodens[];
  login_status: number;

  constructor(hc: OneService) {
    this.username_and_password = {};
    this.hc = hc;
    this.typesWoodens = [];
    this.login_status = 0;
  }

  ngOnInit(): void {
  }
  submit(email: HTMLInputElement, password: HTMLInputElement) {
    this.username_and_password = { email: email.value, password: password.value };
    this.hc.post1(this.username_and_password).subscribe(data => {
      console.log(data);
      this.typesWoodens = data;
      this.login_status = 1;
    },
     (error) => {
      console.log(error);
      this.login_status = 2;
    });  
  }

  enter() {
    this.login_status = 3;
  }

  add_to_list(event: types_of_woodens[]) {
    this.hc.put({ username_and_password: this.username_and_password, body: { types_of_woodens: event } }).subscribe((data) => {
      console.log(data)
    });

  }

}
