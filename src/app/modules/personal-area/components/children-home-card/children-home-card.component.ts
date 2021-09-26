import {Component, Input, OnInit} from '@angular/core';
import {HomeChildrenModel} from "../../common/home-children.model";
import {ActivatedRoute, Router} from "@angular/router";
import {HomeChildrenService} from "../../services/home-children.service";

@Component({
  selector: 'app-children-home-card',
  templateUrl: './children-home-card.component.html',
  styleUrls: ['./children-home-card.component.scss']
})
export class ChildrenHomeCardComponent implements OnInit {

  @Input() id: number;

  homeChildren: HomeChildrenModel = {} as HomeChildrenModel;

  interesList = [];

  constructor(
      private homeChildrenService: HomeChildrenService,
      private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.homeChildrenService.setCurrentId(+params['id']);
      this.homeChildrenService.get(params['id'])
          .subscribe(data => this.homeChildren = data);
    });

    this.interesList = this.homeChildrenService.getInteresList();
  }

  getEventsGroup(){
    const events = {}
    for(let interes of this.interesList) {
      if (events[interes.eventId]) {
        events[interes.eventId].countUser += 1;
      } else {
        events[interes.eventId] = {...interes, countUser: 2};
      }
    }
    console.log(events);
    return Object.values(events);
  }

}
