export interface types_of_woodens {
    name_of_Wooden_beam: String,
    description: String,
    price_and_existing_lengthes: [{
        length: Number,
        price: Number,
    }]
}

export interface shop_and_woodens_objects_list {
    carpentry_shop_name: string,
    adress: string,
    fon_numbers: number,
    types_of_woodens: types_of_woodens[],
    selected?:boolean
}