import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthorizationComponent} from "./components/authorization/authorization.component";
import {RegistrationComponent} from "./components/registration/registration.component";
import {RouterModule, Routes} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
    {
        path: 'sign_in',
        component: AuthorizationComponent
    },
    {
        path: 'create_account',
        component: RegistrationComponent
    },
];

@NgModule({
  declarations: [
      AuthorizationComponent,
      RegistrationComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class AuthenticationModule { }
