<script>
import { Scatter } from 'vue-chartjs';

export default {
  name: 'Chart',
  extends: Scatter,
  data: () => ({
    chartdata: {
      datasets: [
        {
          label: 'Scatter Dataset',
          data: [
            {
              x: -10,
              y: 0,
            },
            {
              x: 0,
              y: 10,
            },
            {
              x: 10,
              y: 5,
            },
          ],
        },
      ],
    },
    options: {
      events: ['click', 'mouseover', 'mousemove '],
      onClick: (e, arr) => {
        console.log(e);
        console.log(arr);
      },
      onHover: (e, arr) => {
        if (arr.length)console.log(arr);
      },
      scales: {
        xAxes: [
          {
            type: 'linear',
            position: 'bottom',
          },
        ],
      },
    },
  }),
  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
};
</script>

<style scoped>
</style>
