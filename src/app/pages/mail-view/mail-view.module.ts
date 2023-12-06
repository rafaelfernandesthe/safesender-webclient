import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { MailViewRoutingModule, routedComponents } from './mail-view-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    MailViewRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents
  ],
})
export class MailViewModule { }
