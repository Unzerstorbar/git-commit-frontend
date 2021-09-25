type Pupils = {
    id: number;
    name: string;
    birthday: string;
};

type Contact = {
    id: number;
    name: string;
    role: string;
    type: string;
    contact: string;
};

export class HomeChildrenModel {
    id: number;
    name: string;
    description: string;
    address: string;
    pupils: Pupils[];
    contacts: Contact[];


    constructor(obj:HomeChildrenModel ) {
        this.id = obj.id;
        this.name = obj.name;
        this.description = obj.description;
        this.address = obj.address;
        this.pupils = obj.pupils || [];
        this.contacts = obj.contacts || [];
    }
}