import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HomeChildrenService} from "../../services/home-children.service";

@Component({
  selector: 'app-children-home-profile',
  templateUrl: './children-home-profile.component.html',
  styleUrls: ['./children-home-profile.component.scss']
})
export class ChildrenHomeProfileComponent implements OnInit {

  id: number = null;

  constructor(
      private route: ActivatedRoute
      ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.id = +params['id']);
  }


}
