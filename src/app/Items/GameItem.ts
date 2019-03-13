export class GameItem{
   
    private _name : String;
    id : Number;
    description : String;
    type : String;
    rating:Number;
    price : Number;
    releaseDate : Date;

    constructor(name:String,id:Number,description?:String,type?:String,rating?:Number,price?:Number,releaseDate?:Date){
        this._name = name;
        this.id = id;
    }

    get name()
    {
        return this._name;
    }
    


}