import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbListModule,
  NbProgressBarModule,
  NbSelectModule,
  NbTabsetModule,
  NbUserModule,
} from '@nebular/theme';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxEchartsModule } from 'ngx-echarts';

import { ChartModule } from 'angular2-chartjs';
import { ThemeModule } from '../../@theme/theme.module';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { HomePageComponent } from './home-page.component';
import { OrdersChartService } from '../../@core/mock/orders-chart.service';
import { CountryOrdersMapService } from '../e-commerce/country-orders/map/country-orders-map.service';
import { ChartPanelHeaderDailyComponent } from './chart-daily-send/chart-panel-header-daily/chart-panel-header-daily.component';
import { ChartPanelSummaryDailyComponent } from './chart-daily-send/chart-panel-summary-daily/chart-panel-summary-daily.component';
import { OrdersChartDailyComponent } from './chart-daily-send/charts-daily/orders-chart-daily.component';
import { ProfitChartDailyComponent } from './chart-daily-send/charts-daily/profit-chart-daily.component';
import { LegendChartDailyComponent } from './legend-chart-daily/legend-chart-daily.component';
import { ChartSendDailyComponent } from './chart-daily-send/chart-send-daily.component';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbIconModule,
    NbTabsetModule,
    NbSelectModule,
    NbListModule,
    ChartModule,
    NbProgressBarModule,
    NgxEchartsModule,
    NgxChartsModule,
    LeafletModule,
  ],
  declarations: [
    HomePageComponent,
    ChartSendDailyComponent,
    ChartPanelHeaderDailyComponent,
    ChartPanelSummaryDailyComponent,
    OrdersChartDailyComponent,
    ProfitChartDailyComponent,
    LegendChartDailyComponent
  ],
  providers: [
    CountryOrdersMapService,
    OrdersChartService
  ],
})
export class HomePageModule { }
