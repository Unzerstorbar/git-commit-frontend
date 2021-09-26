import {Injectable, Injector} from '@angular/core';
import {CrudService} from "../../../common/crud.service";
import {HttpClient} from "@angular/common/http";
import {AuthenticationService} from "../../authentication/services/authentication.service";
import {ProfileModel} from "../common/profile.model";
import {map} from "rxjs/operators";

@Injectable()
export class ProfileService extends CrudService<ProfileModel>{


  constructor(private injector: Injector) {
    super(
        injector.get(HttpClient),
        injector.get(AuthenticationService),
        'profile',
        map(data => new ProfileModel(data as ProfileModel))
    );
  }

  getLikes(){
    return JSON.parse(localStorage.getItem('likes')) || [];
  }
}
