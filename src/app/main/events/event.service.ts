import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {map, tap} from "rxjs/operators";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Token} from "../../modules/authentication/utils/authentication.types";
import moment from "moment";

@Injectable({
    providedIn: 'root'
})
export class EventService {

    private token: BehaviorSubject<Token>;

    header;
    url = environment.apiUrl + '/'
    constructor(private http: HttpClient) {
        this.token = new BehaviorSubject<Token>(JSON.parse(localStorage.getItem('token')));
        this.header = new HttpHeaders().set("Authorization", 'Bearer ' + this.token.value.access_token);
    }



    getListEvent(): Observable<any> {
        return this.http.get(`${environment.apiUrl}/event/registry`, { headers: this.header })
            .pipe(
                map( (list: []) => {
                    return list;
                })
            )
    }
}
