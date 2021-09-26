import {Injectable, Injector} from '@angular/core';
import {CrudService} from "../../../common/crud.service";
import {HomeChildrenModel} from "../common/home-children.model";
import {HttpClient} from "@angular/common/http";
import {AuthenticationService} from "../../authentication/services/authentication.service";
import {BehaviorSubject, Observable} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {RegistryRowModel} from "../common/registry-row.model";
import {environment} from "../../../../environments/environment";

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

  getRegistry(id: number): Observable<RegistryRowModel[]> {
    const headers = this.auth.getAuthorizationHeaders();
    return this.http.get(`${this.baseUrl}/registry`, {headers})
        .pipe(
            map((dataList: any[]) => {
              return dataList.find(row => row.id === id).pupils.map(pupil => new RegistryRowModel(pupil));
            })
        );
  }

  getTryRegistry(id: number): Observable<HomeChildrenModel[]> {
    const headers = this.auth.getAuthorizationHeaders();
    return this.http.get(`${this.baseUrl}/registry`, {headers})
        .pipe(
            map((dataList: any[]) => {
              return dataList;
            })
        );
  }

  saveChildrenInHomeChildren(data: RegistryRowModel, childHomeId: number) {
    const headers = this.auth.getAuthorizationHeaders();
    return this.http.post(`${this.baseUrl}/${childHomeId}/pupil`, data, {headers})
        .pipe(
            map(status => ({success: true})),
            catchError(() => [{success: false}])
        );
  }

  changePasswordForPupil(id: number, data: {password: string, c_password: string}){
    const headers = this.auth.getAuthorizationHeaders();
    return this.http.post(`${environment.apiUrl}/pupil/${id}/password/change`, data, {headers})
        .pipe(
            map(() => ({success: true}))
        );
  }

  getInteresList(){
      const likes = JSON.parse(localStorage.getItem('likes')) || [];
      return likes;
  }
}
