import { Component, OnDestroy, ViewChild } from '@angular/core';
import { takeWhile } from 'rxjs/operators';

import { OrdersChartDailyComponent } from './charts-daily/orders-chart-daily.component';
import { ProfitChartDailyComponent } from './charts-daily/profit-chart-daily.component';
import { OrdersChart } from '../../../@core/data/orders-chart';
import { ProfitChart } from '../../../@core/data/profit-chart';
import { OrderProfitChartSummary, OrdersProfitChartData } from '../../../@core/data/orders-profit-chart';

@Component({
  selector: 'ngx-chart-send-daily',
  styleUrls: ['./chart-send-daily.component.scss'],
  templateUrl: './chart-send-daily.component.html',
})
export class ChartSendDailyComponent implements OnDestroy {

  private alive = true;

  chartPanelSummary: OrderProfitChartSummary[];
  period: string = 'week';
  ordersChartData: OrdersChart;
  profitChartData: ProfitChart;

  @ViewChild('ordersChart', { static: true }) ordersChart: OrdersChartDailyComponent;
  @ViewChild('profitChart', { static: true }) profitChart: ProfitChartDailyComponent;

  constructor(private ordersProfitChartService: OrdersProfitChartData) {
    this.ordersProfitChartService.getOrderProfitChartSummary()
      .pipe(takeWhile(() => this.alive))
      .subscribe((summary) => {
        this.chartPanelSummary = summary;
      });

    this.getOrdersChartData(this.period);
    this.getProfitChartData(this.period);
  }

  setPeriodAndGetChartData(value: string): void {
    if (this.period !== value) {
      this.period = value;
    }

    this.getOrdersChartData(value);
    this.getProfitChartData(value);
  }

  changeTab(selectedTab) {
    if (selectedTab.tabTitle === 'Profit') {
      this.profitChart.resizeChart();
    } else {
      this.ordersChart.resizeChart();
    }
  }

  getOrdersChartData(period: string) {
    this.ordersProfitChartService.getOrdersChartData(period)
      .pipe(takeWhile(() => this.alive))
      .subscribe(ordersChartData => {
        this.ordersChartData = ordersChartData;
      });
  }

  getProfitChartData(period: string) {
    this.ordersProfitChartService.getProfitChartData(period)
      .pipe(takeWhile(() => this.alive))
      .subscribe(profitChartData => {
        this.profitChartData = profitChartData;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
