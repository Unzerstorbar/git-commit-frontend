import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';

import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

import { SampleComponent } from './sample.component';
import { HomeComponent } from './home.component';
import { EventsComponent } from "../events/events.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {EcommerceCheckoutItemComponent} from "../events/ecommerce-checkout-item/ecommerce-checkout-item.component";
import {CoreTouchspinModule} from "../../../@core/components/core-touchspin/core-touchspin.module";
import {PlateEventComponent} from "../events/plate-event/plate-event.component";
import {MomentPipe} from "../../../@core/pipes/moment.pipe";
import {EventPageComponent} from "../event-page/event-page.component";
import {CardSnippetModule} from "../../../@core/components/card-snippet/card-snippet.module";
import {GoogleMapsModule} from "@angular/google-maps";
import {EventEditorComponent} from "../event-editor/event-editor.component";
import {AboutComponent} from "../about/about.component";
import {FaqComponent} from "../faq/faq.component";
import {AuthGuard} from "../../common/auth.guard";
import {NgSelectModule} from "@ng-select/ng-select";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
    {
        path: 'about-us',
        component: AboutComponent,
        data: { animation: 'sample' },
        canActivate: [AuthGuard]
    },
    {
        path: 'faq',
        component: FaqComponent,
        data: { animation: 'sample' },
        canActivate: [AuthGuard]
    },
    {
    path: 'event/list',
    component: EventsComponent,
      canActivate: [AuthGuard],
      children: [
      {
          path: 'events/:id',
          redirectTo: '/event/:id',
      }
    ],
    },
    {
    path: 'event/:id',
    component: EventPageComponent,
    data: { animation: 'sample' },
      canActivate: [AuthGuard]
    },
    {
        path: 'event/edit/;id',
        component: EventEditorComponent,
        data: { animation: 'sample' },
        canActivate: [AuthGuard]
    },
  {
    path: 'sample',
    component: SampleComponent,
    data: { animation: 'sample' },
      canActivate: [AuthGuard]
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { animation: 'home' },
    canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [
      SampleComponent,
      HomeComponent,
      EventsComponent,
      MomentPipe,
      PlateEventComponent,
      EventPageComponent,
      EcommerceCheckoutItemComponent],
    imports: [
        RouterModule.forChild(routes),
        ContentHeaderModule,
        TranslateModule,
        CoreCommonModule,
        CommonModule,
        NgbModule,
        NgSelectModule,
        CoreTouchspinModule,
        CardSnippetModule,
        FormsModule,
        ReactiveFormsModule,
        GoogleMapsModule
    ],
  exports: [SampleComponent, HomeComponent]
})
export class SampleModule {}
