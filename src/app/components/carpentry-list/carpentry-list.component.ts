import { Component, OnInit } from '@angular/core';
import { OneService } from 'src/app/all_servises/one.service';
import { analyze } from 'eslint-scope';
import { types_of_woodens, shop_and_woodens_objects_list } from 'src/app/interfaces';

@Component({
  selector: 'app-carpentry-list',
  templateUrl: './carpentry-list.component.html',
  styleUrls: ['./carpentry-list.component.css']
})
export class CarpentryListComponent implements OnInit {

  shop_and_woodens_objects_list: shop_and_woodens_objects_list[];
  show_carpentry: boolean;

  constructor(hc: OneService) {
    this.show_carpentry = false;

    this.shop_and_woodens_objects_list = [{
      carpentry_shop_name: "",
      adress: "",
      fon_numbers: 0,
      types_of_woodens: []
    }];

    hc.get().subscribe((data: { shop_and_woodens_objects_list: shop_and_woodens_objects_list[] }) => {

      this.shop_and_woodens_objects_list = data.shop_and_woodens_objects_list;
    });
  }

  ngOnInit(): void {

  }
  showCarpentry() {
    this.show_carpentry
  }

}
