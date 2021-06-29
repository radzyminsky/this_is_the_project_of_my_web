export interface types_of_woodens {
    name_of_Wooden_beam: String,
    description: String,
    price_and_existing_lengthes: [{
        length: number,
        price: number,
       
    }],
    update?:boolean
}

export interface shop_and_woodens_objects_list {
    carpentry_shop_name: string,
    adress: string,
    fon_numbers: number,
    types_of_woodens: types_of_woodens[],
    selected?:boolean
}


export interface cutting{
    length_size:number,
    cutts_sum_of_this_size:number
}