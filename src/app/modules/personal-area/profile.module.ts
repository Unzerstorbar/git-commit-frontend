import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { ChildrenHomeProfileComponent } from './components/children-home-profile/children-home-profile.component';
import { ContactPersonComponent } from './components/contact-person/contact-person.component';
import { ChildrenHomeCardComponent } from './components/children-home-card/children-home-card.component';
import { ChildrenHomeStudentsListComponent } from './components/children-home-students-list/children-home-students-list.component';
import {CoreCommonModule} from "../../../@core/common.module";


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
        CoreCommonModule,
    ],
  bootstrap: [ChildrenHomeProfileComponent]
})
export class ProfileModule { }
