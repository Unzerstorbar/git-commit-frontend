import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { ChildrenHomeProfileComponent } from './components/children-home-profile/children-home-profile.component';
import { ContactPersonComponent } from './components/contact-person/contact-person.component';
import { ChildrenHomeCardComponent } from './components/children-home-card/children-home-card.component';
import { ChildrenHomeStudentsListComponent } from './components/children-home-students-list/children-home-students-list.component';
import {CoreCommonModule} from "../../../@core/common.module";
import { OrphanageEditorComponent } from './components/orphanage-editor/orphanage-editor.component';
import { OrphanageListComponent } from './components/orphanage-list/orphanage-list.component';
import {NgbNavModule} from "@ng-bootstrap/ng-bootstrap";


const routes: Routes = [
  {
    path: ':id',
    component: ChildrenHomeProfileComponent,
  },
  {
    path: 'edit/:id',
    component: OrphanageEditorComponent
  },
  {
    path: 'list',
    component: OrphanageListComponent
  },
];

@NgModule({
  declarations: [
    ChildrenHomeProfileComponent,
    ContactPersonComponent,
    ChildrenHomeCardComponent,
    ChildrenHomeStudentsListComponent,
    OrphanageEditorComponent,
    OrphanageListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CoreCommonModule,
    NgbNavModule,
  ],
})
export class OrphanageModule { }
