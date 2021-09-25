export class RegistryRowModel {
    id: number;
    name: string;
    birthday: string;
    age: string;
    email: string;


    constructor(obj: RegistryRowModel) {
        this.id = obj.id;
        this.name = obj.name;
        this.birthday = obj.birthday;
        this.age = obj.age || '';
        this.email = obj.email || '';
    }
}