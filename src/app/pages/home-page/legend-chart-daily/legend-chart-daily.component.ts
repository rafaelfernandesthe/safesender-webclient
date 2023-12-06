import { Component, Input } from '@angular/core';

import { NgxLegendItemColor } from './enum.legend-item-color';

@Component({
  selector: 'ngx-legend-chart-daily',
  styleUrls: ['./legend-chart-daily.component.scss'],
  templateUrl: './legend-chart-daily.component.html',
})
export class LegendChartDailyComponent {

  /**
   * Take an array of legend items
   * Available iconColor: 'green', 'purple', 'light-purple', 'blue', 'yellow'
   * @type {{iconColor: string; title: string}[]}
   */
  @Input()
  legendItems: { iconColor: NgxLegendItemColor; title: string }[] = [];
}
