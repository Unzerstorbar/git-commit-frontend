import {Component, Inject, OnInit} from '@angular/core';
import {HomeChildrenService} from "../../services/home-children.service";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {HomeChildrenModel} from "../../common/home-children.model";
import {PassRouter} from "../../../../../@core/pipes/pass-route";

@Component({
  selector: 'app-orphanage-list',
  templateUrl: './orphanage-list.component.html',
  styleUrls: ['./orphanage-list.component.scss']
})
export class OrphanageListComponent implements OnInit {

  homeChildren: HomeChildrenModel[];

  constructor(
      private homeChildrenService: HomeChildrenService,
      private route: ActivatedRoute,
      private router: Router
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.homeChildrenService.setCurrentId(+params['id']);
      this.homeChildrenService.getTryRegistry(params['id'])
          .subscribe(data => this.homeChildren = data);
    });
  }

  goToPupils(id) {
    debugger;
    this.router.navigate(['/orphanage/pupil', id])
  }

}
