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

  constructor(
      private homeChildrenService: HomeChildrenService,
      private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.homeChildrenService.get(param['id'])
          .subscribe(data => this.homeChildren = data);
    });
  }

}
