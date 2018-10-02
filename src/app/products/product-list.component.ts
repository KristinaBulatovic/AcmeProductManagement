import { Component, OnInit } from '@angular/core';
import { IProduct } from './poduct'

@Component({
    selector:'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list-component.css']
})

export class ProductListComponent implements OnInit{
pageTitle: string = 'Product List';
imageWidth: number = 50;
imageMargin: number = 2;
showImage: boolean = false;

_listFilter: string;
get listFilter(): string {
    return this._listFilter;
}
set listFilter(value:string){
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
}

filteredProducts: IProduct[];
products: IProduct[] = [
    {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2016",
        "description": "15 gallon capacity rolling garden...",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "https://fyf.tac-cdn.net/images/products/large/F-692.jpg"
    },
    {
        "productId": 5,
        "productName": "Hammer",
        "productCode": "TBX-0048",
        "releaseDate": "May 21, 2016",
        "description": "Curved claw steel hammer",
        "price": 8.9,
        "starRating": 4.8,
        "imageUrl": "https://res.cloudinary.com/ufn/image/upload/c_pad,dpr_1.5,f_auto,fl_progressive,h_449,w_400/mtzii15kfcgkfnlhc8mp.jpg"
    }
];


constructor(){
    this.filteredProducts = this.products;
    this.listFilter = 'cart';
}

onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
}

performFilter(filterBy: string): IProduct[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
}

toggleImage():void{
    this.showImage = !this.showImage;
}

ngOnInit(): void{
    console.log('In onInit');
}

}