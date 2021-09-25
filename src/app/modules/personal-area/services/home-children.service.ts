import {Injectable, Injector} from '@angular/core';
import {CrudService} from "../../../common/crud.service";
import {HomeChildrenModel} from "../common/home-children.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AuthenticationService} from "../../authentication/services/authentication.service";

@Injectable({
  providedIn: 'root'
})
export class HomeChildrenService extends CrudService<HomeChildrenModel>{

  constructor(injector: Injector) {
    super(
        injector.get(HttpClient),
        injector.get(AuthenticationService),
        'orphanage'
    );
  }
}
