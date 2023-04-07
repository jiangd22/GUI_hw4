export class ProductReview{
    constructor(){
        this.userName = "";
        this.rating = 0;
        this.comment = "";
        this.date = new Date();
    }
    constructor(userName, rating, comment, date){
        this.userName = userName;
        this.rating = rating;
        this.comment = comment;
        this.date = date;
    }
}