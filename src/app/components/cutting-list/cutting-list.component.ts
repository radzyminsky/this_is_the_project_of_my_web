import { Component, OnInit ,Input} from '@angular/core';
import { cutting, types_of_woodens } from 'src/app/interfaces';

@Component({
  selector: 'app-cutting-list',
  templateUrl: './cutting-list.component.html',
  styleUrls: ['./cutting-list.component.css']
})


export class CuttingListComponent implements OnInit {
  @Input()types_of_woodens: types_of_woodens ;
  cuts_list: cutting[];
  new_cut: cutting;

  constructor() {
    this.types_of_woodens={
      description:'',
      name_of_Wooden_beam:'',
      price_and_existing_lengthes:[{
        length:0,
        price:0
      }],
    }
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
