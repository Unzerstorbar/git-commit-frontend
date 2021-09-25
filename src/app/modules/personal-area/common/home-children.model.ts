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

type City = {
    id: number;
    name: string;
};

export class HomeChildrenModel {
    id: number;
    name: string;
    description: string;
    address: string;
    city: City;
    pupils: Pupils[];
    contacts: Contact[];
    requisites: []


    constructor(obj:HomeChildrenModel ) {
        this.id = obj.id;
        this.name = obj.name;
        this.description = obj.description;
        this.address = obj.address;
        this.city = obj.city;
        this.pupils = obj.pupils || [];
        this.contacts = obj.contacts || [];
        this.requisites = obj.requisites || [];
    }
}