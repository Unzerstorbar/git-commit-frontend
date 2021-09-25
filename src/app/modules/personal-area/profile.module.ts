import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AuthorizationComponent} from "../authentication/components/authorization/authorization.component";
import {RegistrationComponent} from "../authentication/components/registration/registration.component";
import { ChildrenHomeProfileComponent } from './components/children-home-profile/children-home-profile.component';
import { ContactPersonComponent } from './components/contact-person/contact-person.component';
import { ChildrenHomeCardComponent } from './components/children-home-card/children-home-card.component';
import { ChildrenHomeStudentsListComponent } from './components/children-home-students-list/children-home-students-list.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";


const routes: Routes = [
  {
    path: 'lk',
    component: ChildrenHomeProfileComponent,
    children: [
      {
        path: 'card/:id',
        component: ChildrenHomeCardComponent,
      },
      {
        path: 'list/:id',
        component: ChildrenHomeStudentsListComponent
      },
    ]
  },
];

@NgModule({
  declarations: [
    ChildrenHomeProfileComponent,
    ContactPersonComponent,
    ChildrenHomeCardComponent,
    ChildrenHomeStudentsListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  bootstrap: [ChildrenHomeProfileComponent]
})
export class ProfileModule { }
