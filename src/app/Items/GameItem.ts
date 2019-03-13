export class GameItem{
   
    name : String;
    id : Number;
    description : String;
    type : String;
    rating:Number;
    price : Number;
    releaseDate : Date;

    constructor(name:String,id:Number,description?:String,type?:String,rating?:Number,price?:Number,releaseDate?:Date){
        this.name = name;
        this.id = id;
    }
    


}