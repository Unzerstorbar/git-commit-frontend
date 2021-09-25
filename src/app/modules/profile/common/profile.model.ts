import moment from "moment";

export class ProfileModel {
    id: number;
    first_name: string;
    second_name: string;
    last_name: string;
    name: string;
    birthday: string;
    email: string;
    email_verified_at: any;
    phone: string;
    about: string;
    role: {id: number, name: string, code: string};
    role_id: number;
    created_at: string;

    constructor(obj: ProfileModel) {
        this.id = obj.id;
        this.first_name = obj.first_name;
        this.second_name = obj.second_name;
        this.last_name = obj.last_name;
        this.name = obj.name;
        this.birthday = obj.birthday;
        this.email = obj.email;
        this.email_verified_at = obj.email_verified_at;
        this.phone = obj.phone;
        this.about = obj.about;
        this.role = obj.role;
        this.role_id = obj.role_id;
        this.created_at = moment(obj.created_at).format('DD.MM.yyyy');
        console.log(this.created_at);
    }
}