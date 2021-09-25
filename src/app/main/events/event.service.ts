import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {catchError, map, tap} from "rxjs/operators";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, from, Observable, of} from "rxjs";
import {UserData} from "../../modules/authentication/utils/authentication.types";
import moment from "moment";

@Injectable({
    providedIn: 'root'
})
export class EventService {

    private token: BehaviorSubject<UserData>;

    header;
    url = environment.apiUrl + '/'
    constructor(private http: HttpClient) {
        console.log(localStorage)
        this.token = new BehaviorSubject<UserData>(JSON.parse(localStorage.getItem('userData')));
        this.header = new HttpHeaders().set("Authorization", 'Bearer ' + this.token.value.access_token);
    }



    getListEvent(): Observable<any> {
        return this.http.get(`${environment.apiUrl}/event/list`, { headers: this.header })
            .pipe(
                map( (list: []) => {
                    return list;
                })
            )
    }

    getTags() {
        return this.http.get(`${environment.apiUrl}/tag/list`, { headers: this.header })
            .pipe(
                map( (tags: [{}]) => {
                    return tags;
                })
            )
    }

    sendEvent(data) {
        const body = {
            city: {id: 621, name: "Нижний Новгород"},
            date: data.date,
            description: data.description,
            event_status: {id: 2, name: "Активно"},
            name: data.title,
            organizers: data.volunteers,
            participants: data.participants,
            users: [{id: 1}],
            tags: [{id: 36, name: "PHP"}, {id: 37, name: "Angular 11"}, {id: 38, name: "Python"}],
            venue: {
                id: 2,
                address: "пр-т Гагарина, 29",
                phone: "+7 (831) 422-60-68",
                index: 603950
            },

    }
        return this.http.post(`${environment.apiUrl}/event`, { ...body }, {headers: this.header})
            .pipe(
                catchError( err => {
                    return err
                }),
                map( (response) => {
                    return response;
                })
            )
    }
}
