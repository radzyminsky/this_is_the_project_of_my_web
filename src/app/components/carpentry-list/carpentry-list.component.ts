import { Component, OnInit } from '@angular/core';
import { OneService } from 'src/app/all_servises/one.service';
import { analyze } from 'eslint-scope';
import { types_of_woodens } from 'src/app/interfaces';

@Component({
  selector: 'app-carpentry-list',
  templateUrl: './carpentry-list.component.html',
  styleUrls: ['./carpentry-list.component.css']
})
export class CarpentryListComponent implements OnInit {
  
  type_tree_list: [types_of_woodens[]];
  carpentry_shop_name_list: string[];

  constructor(hc: OneService) {

    this.type_tree_list = [[]] ;
    this.carpentry_shop_name_list = [];

    hc.get().subscribe((data: { type_tree_list:   [types_of_woodens[]], carpentry_shop_name_list: string[] }) => {

      this.type_tree_list = data.type_tree_list;
      this.carpentry_shop_name_list = data.carpentry_shop_name_list;

    });
  }

  ngOnInit(): void {
    
  }


}
