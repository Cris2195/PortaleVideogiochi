export class MenuItems{
    id:number;
    description:String;
    checked : boolean;

    constructor(id: number,description,checked=false){
        this.id = id;
        this.description = description;
        this.checked = checked;
        
    }
}