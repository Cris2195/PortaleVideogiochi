export class MenuItems{
    id:number;
    description:string;
    checked : boolean;
    endpoint:string;

    constructor(id: number,description,checked=false,endpoint:string){
        this.id = id;
        this.description = description;
        this.checked = checked;
        this.endpoint = endpoint;
    }
}