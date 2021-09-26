import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { Subject } from 'rxjs';
import {ProfileService} from "../../services/profile.service";
import {ActivatedRoute} from "@angular/router";
import {ProfileModel} from "../../common/profile.model";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit, OnDestroy {
  public data: ProfileModel;
  public toggleMenu = true;
  public loadMoreRef = false;

  likes = [];

  private _unsubscribeAll: Subject<any>;

  constructor(
      private profileService: ProfileService,
      private router: ActivatedRoute,
      private sanitizer: DomSanitizer,
  ) {
    this._unsubscribeAll = new Subject();
  }

  loadMore() {
    this.loadMoreRef = !this.loadMoreRef;
    setTimeout(() => {
      this.loadMoreRef = !this.loadMoreRef;
    }, 2000);
  }

  ngOnInit(): void {
    this.likes = this.profileService.getLikes();
    this.router.params.subscribe(params => {
      const id = +params['id'];
      this.profileService.get(id).subscribe(data => {
        this.data = data;
      });
    });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
