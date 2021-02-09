import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.sass'],
})
export class ChartComponent implements OnInit, AfterViewInit {
  @ViewChild('chartCanvas') barCanvas: ElementRef<HTMLCanvasElement>;
  barChart: Chart;
  labels: Array<string>;
  data: number[];
  bgColors: String[];
  borderColors: String[];
  datasets: Chart.ChartDataSets[];

  constructor() {
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.labels = [...Array(100).keys()].map(
      () =>
        chars.charAt(Math.random() * chars.length) +
        chars.charAt(Math.random() * chars.length) +
        chars.charAt(Math.random() * chars.length)
    );
    this.data = [...Array(100).keys()].map(() => Math.random());

    var movingMean = this.data.map(
      (_, i) => this.data.slice(0, i + 1).reduce((a, b) => a + b, 0) / (i + 1)
    );
    this.datasets = [];

    this.datasets.push({
      label: '# of Votes',
      data: this.data.map((v, i) => ({ y: v, x: this.labels[i] })),
      borderWidth: 1,
      type: 'scatter',
      backgroundColor: 'rgb(0,0,0)',
    });
    this.datasets.push({
      label: 'Running average',
      data: movingMean,
      borderWidth: 1,
      type: 'line',
      fill: false,
    });
  }

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.barChart = new Chart(this.barCanvas.nativeElement.id, {
      type: 'line',

      data: {
        labels: this.labels,
        datasets: this.datasets,
      },
      options: {
        showLines:true,
        responsive: true,
        title: {
          display: true,
          text: 'Chart.js Scatter Chart - Multi Axis',
        },
        scales: {
          xAxes: [
            {
              position: 'bottom',
              gridLines: {
                zeroLineColor: 'rgba(0,0,0,1)',
              },
            },
          ],
          yAxes: [
            {
              type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
              display: true,
              position: 'left',
              id: 'y-axis-1',
            },
          ],
        },
      },
    });
  }
}
// https://jsfiddle.net/qLhojncy/
// http://jsfiddle.net/Em4Xu/1/