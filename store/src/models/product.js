export class Product {
  constructor(){
    this.id = 0;
    this.name = "";
    this.description = "";
    this.price = 0;
    this.imageUrl = "";
    this.reviews = [];
  }
  constructor(id, name, description, price, imageUrl, reviews){
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.imageUrl = imageUrl;
    this.reviews = reviews;
  }  
}