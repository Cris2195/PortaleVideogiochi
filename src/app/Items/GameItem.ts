export class GameItem{
   
    private _name : string;
    id : Number;
    private _description : string;
    type : string;
    rating:Number;
    price : Number;
    releaseDate : Date;

    constructor(name?:string,id?:Number,description?:string,type?:string,rating?:Number,price?:Number,releaseDate?:Date){
        this._name = name;
        this.id = id;
    }

    get name()
    {
        return this._name;
    }

    set name(value: string){
        this._name = value;
    }

    get description(){
        return this._description;
    }

    set description(value : string){
        this._description = value;
    }
    


}