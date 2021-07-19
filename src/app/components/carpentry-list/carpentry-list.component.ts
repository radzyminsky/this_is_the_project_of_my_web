import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { OneService } from 'src/app/all_servises/one.service';
import { analyze } from 'eslint-scope';
import { types_of_woodens, shop_and_woodens_objects_list } from 'src/app/interfaces';

@Component({
  selector: 'app-carpentry-list',
  templateUrl: './carpentry-list.component.html',
  styleUrls: ['./carpentry-list.component.css']
})
export class CarpentryListComponent {
  keep_to_cutting_component: boolean;
  shop_and_woodens_objects_list: shop_and_woodens_objects_list[];
  the_selected_wooden_for_caculate: types_of_woodens;


  constructor(hc: OneService) {
    this.keep_to_cutting_component = false;
    this.shop_and_woodens_objects_list = [{
      carpentry_shop_name: "",
      adress: "",
      fon_numbers: 0,
      types_of_woodens: []
    }];

    hc.get().subscribe((data: { shop_and_woodens_objects_list: shop_and_woodens_objects_list[] }) => {

      this.shop_and_woodens_objects_list = data.shop_and_woodens_objects_list;
    });

    this.the_selected_wooden_for_caculate = {
      name_of_Wooden_beam: "",
      description: "",
      price_and_existing_lengthes: [{
        length: 0,
        price: 0
      }]
    }

  }
  pass_to_cutting_component(types_of_woodens: types_of_woodens) {
    this.keep_to_cutting_component = true;
    this.the_selected_wooden_for_caculate = types_of_woodens;
  }

}
