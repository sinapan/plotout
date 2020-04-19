<script>
  import PieGChart from "../components/plots/pie_gcharts.svelte";
  import ScatterGChart from "../components/plots/scatter_gcharts.svelte";
  import WordTreeGChart from "../components/plots/wordtree_gcharts.svelte";
</script>

<style>
  .container {
    display: flex;
  }

  .column {
    flex: 1;
    /*for demo purposes only */
    background: #f2f2f2;
    border: 1px solid #e6e6e6;
    box-sizing: border-box;
  }

  .column-one {
    order: 1;
  }
  .column-two {
    order: 2;
  }
  .column-three {
    order: 3;
  }
</style>

<div class="container">
  <div class="column column-one">
    <PieGChart />
  </div>
  <div class="column column-two">
    <ScatterGChart />
  </div>
  <div class="column column-three">
    <WordTreeGChart />
  </div>
</div>
