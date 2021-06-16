import { Component, OnInit } from '@angular/core';
import { OneService } from 'src/app/all_servises/one.service';
import { tree_type } from 'src/app/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username_and_password: object;
  hc: OneService;
  list_carpentry: tree_type[];
  enterning: number;

  constructor(hc: OneService) {
    this.username_and_password = {};
    this.hc = hc;
    this.list_carpentry = [];
    this.enterning = 0;
  }

  ngOnInit(): void {
  }
  submit(email: HTMLInputElement, password: HTMLInputElement) {
    this.username_and_password = { email: email.value, password: password.value };
    this.hc.post1(this.username_and_password).subscribe(data => {
      console.log(data);
      this.list_carpentry = data;
      this.enterning=1;
    }, (error) => {
      console.log(error);
      this.enterning=2;
    }
    );
  }

  enter(){
    this.enterning=3;
  }
  
  add_to_list(event: tree_type[]) {
    this.hc.put({ username_and_password: this.username_and_password, body: { type_tree: event } }).subscribe((data) => { console.log(data) });

  }

}
