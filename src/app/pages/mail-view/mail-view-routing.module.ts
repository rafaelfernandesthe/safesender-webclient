import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MailViewComponent } from './mail-view.component';
import { MailViewListComponent } from './mail-view-list/mail-view-list.component';

const routes: Routes = [{
  path: '',
  component: MailViewComponent,
  children: [
    {
      path: 'mail-view-list',
      component: MailViewListComponent,
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MailViewRoutingModule { }

export const routedComponents = [
  MailViewComponent,
  MailViewListComponent
];
