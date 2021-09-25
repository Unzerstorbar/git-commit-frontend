import {Injectable, Injector} from '@angular/core';
import {CrudService} from "../../../common/crud.service";
import {HomeChildrenModel} from "../common/home-children.model";
import {HttpClient} from "@angular/common/http";
import {AuthenticationService} from "../../authentication/services/authentication.service";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HomeChildrenService extends CrudService<HomeChildrenModel>{

  private _currentId = new BehaviorSubject(null);

  constructor(injector: Injector) {
    super(
        injector.get(HttpClient),
        injector.get(AuthenticationService),
        'orphanage'
    );
  }

  get currentId(): number | null {
    return this._currentId.getValue();
  }

  setCurrentId(id: number) {
    this._currentId.next(id);
  }

  getRegistry(){
    const headers = this.auth.getAuthorizationHeaders();
    return this.http.get(`${this.baseUrl}/registry`, {headers})
  }
}
