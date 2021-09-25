import {HttpClient} from "@angular/common/http";
import {AuthenticationService} from "../modules/authentication/services/authentication.service";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";

export abstract class CrudService<T> {

    baseUrl: string;

    protected constructor(
        protected http: HttpClient,
        protected auth: AuthenticationService,
        protected baseUrlPart: string,
        protected map?: any,
    ) {
        this.baseUrl = `${environment.apiUrl}/${baseUrlPart}`
    }

    get(id: number): Observable<T> {
        const headers = this.auth.getAuthorizationHeaders();
        return this.http.get(`${this.baseUrl}/${id}`, {headers})
            .pipe(
                this.map ? this.map : map(data => data as T)
            );
    };

    save(entity: T): Observable<{success: boolean}> {
        const headers = this.auth.getAuthorizationHeaders();
        return this.http.post(`${this.baseUrl}`, JSON.stringify(entity), {headers})
            .pipe(
                map(status => ({success: true}))
            );
    };

    update(entity: T, id: number): Observable<{success: boolean}> {
        const headers = this.auth.getAuthorizationHeaders();
        return this.http.patch(`${this.baseUrl}/${id}`, JSON.stringify(entity), {headers})
            .pipe(
                map(status => ({success: true}))
            );
    };

    deleteById(id: number): Observable<{success: boolean}> {
        const headers = this.auth.getAuthorizationHeaders();
        return this.http.delete(`${this.baseUrl}/${id}`, {headers})
            .pipe(
                map(status => ({success: true}))
            );
    };
}