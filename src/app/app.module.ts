import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import 'hammerjs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr'; // For auth after login toast

import { CoreModule } from '@core/core.module';
import { CoreCommonModule } from '@core/common.module';
import { CoreSidebarModule, CoreThemeCustomizerModule } from '@core/components';

import { coreConfig } from 'app/app-config';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { SampleModule } from 'app/main/sample/sample.module';
import { AuthenticationModule } from "./modules/authentication/authentication.module";
import {AuthGuard} from "./common/auth.guard";
import { ProfileComponent } from './main/profile/profile.component';
import { EventEditorComponent } from './main/event-editor/event-editor.component';
import { FaqComponent } from './main/faq/faq.component';
import {SwiperModule} from "swiper/angular";
import {AboutComponent} from "./modules/about/components/about/about.component";

const appRoutes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./main/pages/pages.module').then(m => m.PagesModule),
    canActivate: [AuthGuard]
  },

  {
    path: 'authentication',
    loadChildren: () => import('./modules/authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: 'orphanage',
    loadChildren: () => import('./modules/personal-area/orphanage.module').then(m => m.OrphanageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule),
    canActivate: [AuthGuard]
  },

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'about-us',
    component: AboutComponent
  },
  {
    path: '**',
    redirectTo: '/pages/miscellaneous/error'
  }
];

@NgModule({
  declarations: [
      AppComponent,
      ProfileComponent,
      EventEditorComponent,
      AboutComponent,
      FaqComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: 'enabled', // Add options right here
      relativeLinkResolution: 'legacy'
    }),
    TranslateModule.forRoot(),

    //NgBootstrap
    NgbModule,
    ToastrModule.forRoot(),

    // Core modules
    CoreModule.forRoot(coreConfig),
    CoreCommonModule,
    CoreSidebarModule,
    CoreThemeCustomizerModule,

    // App modules
    LayoutModule,
    SampleModule,
    AuthenticationModule,
    SwiperModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
