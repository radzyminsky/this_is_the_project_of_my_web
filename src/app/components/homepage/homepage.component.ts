import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  str = '';
  clicked = [false, false, false, false];


  constructor() {

  }

  click(Index: number) {
    for (let index = 0; index < this.clicked.length; index++) {
      this.clicked[index] = false;
    }
    this.clicked[Index] = true;
  }

  ngOnInit(): void {
  }

}
