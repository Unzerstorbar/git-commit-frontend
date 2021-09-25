import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {map, tap} from "rxjs/operators";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import moment from "moment";
import {UserData} from "../../modules/authentication/utils/authentication.types";

@Injectable({
    providedIn: 'root'
})
export class EventPageService {

    private token: BehaviorSubject<UserData>;

    header;
    url = environment.apiUrl + '/'
    constructor(private http: HttpClient) {
        this.token = new BehaviorSubject<UserData>(JSON.parse(localStorage.getItem('token')));
        this.header = new HttpHeaders().set("Authorization", 'Bearer ' + this.token.value.access_token);
    }



    getData(id): Observable<any> {
        return this.http.get(`${environment.apiUrl}/event/` + id, { headers: this.header })
            .pipe(
                map( (list: []) => {
                    return list;
                })
            )
    }
}
