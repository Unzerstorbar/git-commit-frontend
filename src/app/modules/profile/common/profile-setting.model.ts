export class ProfileSetting {
    general: GeneralProfileSetting;
    password: PasswordProfileSetting;
    about: AboutProfileSetting;

    constructor(obj: ProfileSetting) {
        this.general = obj.general;
        this.password = obj.password;
        this.about = obj.about;
    }
}

export class GeneralProfileSetting {
    first_name: string;
    second_name: string;
    last_name: string;
    email: string;

    constructor(obj: GeneralProfileSetting) {
        this.first_name = obj.first_name;
        this.second_name = obj.second_name;
        this.last_name = obj.last_name;
        this.email = obj.email;
    }
}

export class PasswordProfileSetting {
    old_password: string;
    password: string;
    c_password: string;

    constructor(obj: PasswordProfileSetting) {
        this.old_password ??= obj.old_password;
        this.password ??= obj.password;
        this.c_password ??= obj.c_password;
    }
}

export class AboutProfileSetting {
    about: string;
    birthday: string;
    phone: string;

    constructor(obj: AboutProfileSetting) {
        this.about = obj.about;
        this.birthday = obj.birthday;
        this.phone = obj.phone;
    }
}