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
import {EventsListComponent} from "../events-list/events-list.component";
import {EventEditorComponent} from "../event-editor/event-editor.component";
import {FaqComponent} from "../faq/faq.component";
import {AuthGuard} from "../../common/auth.guard";

const routes: Routes = [
    {
        path: 'faq',
        component: FaqComponent,
        data: { animation: 'sample' },
        canActivate: [AuthGuard]
    },
  {
    path: 'events',
    component: EventsComponent,
      canActivate: [AuthGuard],
      children: [
      {
          path: 'event/:id',
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
        path: 'event/list',
        component: EventsListComponent,
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
        NgbModule,
        CoreTouchspinModule,
        CardSnippetModule,
        GoogleMapsModule
    ],
  exports: [SampleComponent, HomeComponent]
})
export class SampleModule {}
