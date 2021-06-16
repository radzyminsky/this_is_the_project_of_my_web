import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { tree_type } from 'src/app/interfaces';
import { from } from 'rxjs';
import { OneService } from 'src/app/all_servises/one.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-carpentry',
  templateUrl: './carpentry.component.html',
  styleUrls: ['./carpentry.component.css']
})
export class CarpentryComponent implements OnInit {

  @Input() list_carpentry: tree_type[] = [];
  @Output() add_to_list: EventEmitter<tree_type[]>;
  _add: boolean;
  new_tree: tree_type;
// hc: OneService = new OneService(public h:HttpClient);
  constructor() {
    this.add_to_list = new EventEmitter<tree_type[]>();
    this.new_tree = {
      name_of_Wooden_beam: "",
      length: 0,
      price: 0,
      description: ""
    }
    this._add = false

  }

  ngOnInit(): void {
  }

  add() {
    this._add = true;
  }

  taken_down(tree: tree_type) {
    this.list_carpentry.splice(this.list_carpentry.indexOf(tree), 1);
    this.add_to_list.emit(this.list_carpentry);
  }

  added() {
    this._add = false
    this.list_carpentry.push({
      name_of_Wooden_beam: this.new_tree.name_of_Wooden_beam,
      length: this.new_tree.length,
      price: this.new_tree.price,
      description: this.new_tree.description
    });
    this.add_to_list.emit(this.list_carpentry);
  }
}
