import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
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

const routes = [
  {
    path: 'events',
    component: EventsComponent,
    data: { animation: 'sample' }
  },
  {
    path: 'sample',
    component: SampleComponent,
    data: { animation: 'sample' }
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { animation: 'home' }
  }
];

@NgModule({
  declarations: [
      SampleComponent,
      HomeComponent,
      EventsComponent,
      MomentPipe,
      PlateEventComponent,
      EcommerceCheckoutItemComponent],
    imports: [
        RouterModule.forChild(routes),
        ContentHeaderModule,
        TranslateModule,
        CoreCommonModule,
        NgbModule,
        CoreTouchspinModule
    ],
  exports: [SampleComponent, HomeComponent]
})
export class SampleModule {}
