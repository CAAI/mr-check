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
  finalData: Object[];

  constructor() {
    this.labels = ['BJP', 'INC', 'AAP', 'CPI', 'CPI-M', 'NCP'];
    this.data = [200, 50, 30, 15, 20, 34];
    this.bgColors = [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
    ];
    this.borderColors = [
      'rgba(255,99,132,1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)',
    ];
    this.finalData = [];
    for (var i = 0; i < this.data.length; i++) {
      this.finalData.push({
        
        y: this.data[i],
        x: this.labels[i],
        backgroundColor: this.bgColors[i],
      });
    }
    console.log(this.finalData);
  }

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    console.log('charting');
    this.barChart = new Chart(this.barCanvas.nativeElement.id, {
      type: 'bar',
      
      data: {
        labels: this.labels,
        datasets: [
          {
            label: '# of Votes',
            data: this.finalData,
            borderWidth: 1,
            
          },
        ],
      },
      options: {

        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
        onClick: function (c, i) {
          console.log(c, i);
        },
      },
    });
  }
}
