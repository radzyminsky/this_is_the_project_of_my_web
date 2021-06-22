import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { types_of_woodens } from 'src/app/interfaces';
import { from } from 'rxjs';
import { OneService } from 'src/app/all_servises/one.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-carpentry',
  templateUrl: './carpentry.component.html',
  styleUrls: ['./carpentry.component.css']
})
export class CarpentryComponent implements OnInit {

  @Input() list_carpentry: types_of_woodens[] = [];
  @Output() add_to_list: EventEmitter<types_of_woodens[]>;
  _add: number;
  new_tree: types_of_woodens;
  length: number;
  price: number;

  constructor() {
    this.add_to_list = new EventEmitter<types_of_woodens[]>();
    this.new_tree = {
      name_of_Wooden_beam: "",
      description: "",
      price_and_existing_lengthes: [{
        length: 0,
        price: 0
      }]
    }
    this._add = 0
    this.length = 0;
    this.price = 0;
  }

  ngOnInit(): void {
  }

  add() {
    this._add = 1;
  }

  taken_down(tree: types_of_woodens) {
    this.list_carpentry.splice(this.list_carpentry.indexOf(tree), 1);
    this.add_to_list.emit(this.list_carpentry);
  }

  added() {
    this._add = 0
    this.list_carpentry.push({
      name_of_Wooden_beam: this.new_tree.name_of_Wooden_beam,
      description: this.new_tree.description,

      price_and_existing_lengthes: [{
        length: this.new_tree.price_and_existing_lengthes[0].length,
        price: this.new_tree.price_and_existing_lengthes[0].price
      }]
    });
    //reset the "new_tree" for to add anather new tree,
    this.new_tree = {
      name_of_Wooden_beam: "",
      description: "",
      price_and_existing_lengthes: [{
        length: 0,
        price: 0
      }]
    }
    this.add_to_list.emit(this.list_carpentry);
  }

  add_length_and_price() {
    this._add = 2;
  }

  added_length_and_price(tree: types_of_woodens) {
    this._add = 0
    let index=this.list_carpentry.indexOf(tree);
    this.list_carpentry[index].price_and_existing_lengthes.push({
      length:this.length,
      price:this.price
    });
    this.length = 0;
    this.price = 0;
    this.add_to_list.emit(this.list_carpentry);
  }
}
