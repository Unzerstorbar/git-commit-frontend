import {Injectable, Injector} from '@angular/core';
import {CrudService} from "../../../common/crud.service";
import {HttpClient} from "@angular/common/http";
import {AuthenticationService} from "../../authentication/services/authentication.service";
import {ProfileSetting} from "../common/profile-setting.model";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {environment} from "../../../../environments/environment";
import {ProfileModel} from "../common/profile.model";

@Injectable()
export class UserService extends CrudService<ProfileSetting> {

  constructor(private injector: Injector) {
    super(
        injector.get(HttpClient),
        injector.get(AuthenticationService),
        'user'
    );
  }


  get(id: number): Observable<ProfileSetting> {
    const headers = this.auth.getAuthorizationHeaders();
    return this.http.get(`${environment.apiUrl}/profile/${id}`, {headers})
        .pipe(
            map((data: ProfileModel) => this.mapProfileToProfileSetting(data))
        );
  }

  private mapProfileToProfileSetting(profile: ProfileModel): ProfileSetting {
    const data = {
      general: {
        first_name: profile.first_name,
        second_name: profile.second_name,
        last_name: profile.last_name,
        email: profile.email,
      },
      password: {},
      about: {
        about: profile.about,
        birthday: profile.birthday,
        phone: profile.phone,
      }
    };
    return new ProfileSetting(data as ProfileSetting);
  }

  updatePartData(data: any, id: number) {
    const headers = this.auth.getAuthorizationHeaders({'Content-Type': 'application/json'});
    return this.http.put(`${environment.apiUrl}/profile/${id}`, JSON.stringify(data), {headers})
        .pipe(
            map(status => ({success: true}))
        );
  }

  updatePassword(data: { old_password: string, password: string, c_password: string }, id: number){
    const headers = this.auth.getAuthorizationHeaders({'Content-Type': 'application/json'});
    return this.http.post(`${environment.apiUrl}/profile/${id}/password/change`, JSON.stringify(data), {headers})
        .pipe(
            map(status => ({success: true}))
        );
  }

}
