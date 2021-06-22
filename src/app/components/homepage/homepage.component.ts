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

  click(index: number) {
    for (let i = 0; i < this.clicked.length; i++) {
      this.clicked[i] = false;
    }
    this.clicked[index] = true;
  }

  ngOnInit(): void {
  }

}
