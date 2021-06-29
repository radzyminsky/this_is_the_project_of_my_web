import { Component, OnInit ,Input} from '@angular/core';
import { cutting } from 'src/app/interfaces';

@Component({
  selector: 'app-cutting-list',
  templateUrl: './cutting-list.component.html',
  styleUrls: ['./cutting-list.component.css']
})

@Input() types_of_woodens: types_of_woodens;
export class CuttingListComponent implements OnInit {

  cuts_list: cutting[];
  new_cut: cutting;

  constructor() {
    this.cuts_list = [];
    this.new_cut = {
      length_size: 0,
      cutts_sum_of_this_size: 0
    };
  }

  ngOnInit(): void {
  }

  add_to_cuts_list() {
    this.cuts_list.push(this.new_cut);
    this.new_cut = {
      length_size: 0,
      cutts_sum_of_this_size: 0
    };
  }

  sub_from_cuts_list(sub_this_cut: cutting) {
    this.cuts_list.splice(this.cuts_list.indexOf(sub_this_cut), 1);
  }
}
