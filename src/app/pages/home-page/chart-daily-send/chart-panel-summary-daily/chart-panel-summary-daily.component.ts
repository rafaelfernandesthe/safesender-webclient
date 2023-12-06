import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-chart-panel-summary-daily',
  styleUrls: ['./chart-panel-summary-daily.component.scss'],
  template: `
    <div class="summary-container">
      <div *ngFor="let item of summary">
        <div>{{ item.title }}</div>
        <div class="h6">{{ item.value }}</div>
      </div>
    </div>
  `,
})
export class ChartPanelSummaryDailyComponent {
  @Input() summary: {title: string; value: number}[];
}

