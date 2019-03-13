export class MenuItems{
    id:string;
    description:String;
    checked : boolean;

    constructor(id,description,checked=false){
        this.id = id;
        this.description = description;
        this.checked = checked;
        
    }
}