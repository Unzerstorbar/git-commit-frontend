import {Component, Input, OnInit} from '@angular/core';
import {EventService} from "../event.service";
import {ActivatedRoute} from "@angular/router";
import {AuthenticationService} from "../../../modules/authentication/services/authentication.service";
import moment from "moment";

@Component({
  selector: 'app-plate-event',
  templateUrl: './plate-event.component.html',
  styleUrls: ['./plate-event.component.scss']
})
export class PlateEventComponent implements OnInit {

  likes: any = [];

  constructor(
      private eventService: EventService,
      private route: ActivatedRoute,
      private auth: AuthenticationService,
  ) { }

  @Input() eventItem;

  ngOnInit(): void {
    console.log(1);    this.likes = JSON.parse(localStorage.getItem('likes')) || [];
  }

  wantParticipate(eventItem){
    console.log(eventItem);    const likes = JSON.parse(localStorage.getItem('likes')) || [];
    const liked = likes.find(eventLike => eventLike.eventId === eventItem.id);

    if (!liked) {
      const user = this.auth.getUserData;
      likes.push({
        eventId: eventItem.id,
        eventName: eventItem.name,
        user: user,
        date: moment().format('DD.mm.yyyy')
      });
      localStorage.setItem('likes', JSON.stringify(likes));
    }
  }

}
