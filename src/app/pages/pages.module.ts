import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { HomePageModule } from './home-page/home-page.module';
import { MailViewModule } from './mail-view/mail-view.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    HomePageModule,
    MailViewModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule
  ],
  declarations: [
    PagesComponent
  ],
})
export class PagesModule {
}
