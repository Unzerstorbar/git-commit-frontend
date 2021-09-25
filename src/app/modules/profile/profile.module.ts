import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {CoreCommonModule} from "../../../@core/common.module";
import {ContentHeaderModule} from "../../layout/components/content-header/content-header.module";
import {ProfileComponent} from "./components/profile/profile.component";
import {ProfileService} from "./services/profile.service";
import {ProfileEditorComponent} from "./components/profile-editor/profile-editor.component";
import {ProfileListComponent} from "./components/profile-list/profile-list.component";
import {AuthGuard} from "../../common/auth.guard";

const routes: Routes = [
  {
    path: ':id',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'list',
    component: ProfileListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'edit/:id',
    component: ProfileEditorComponent,
    canActivate: [AuthGuard],
  }
];

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule,
    CoreCommonModule,
    ContentHeaderModule,
  ],
  providers: [ProfileService]
})
export class ProfileModule { }
