<script>
  import { selected_chart } from "../components/plots/stores.js";
  import SelectionMenu from "../components/plots/selection_menu.svelte";
  import PieGChart from "../components/plots/pie_gcharts.svelte";
  import ScatterGChart from "../components/plots/scatter_gcharts.svelte";
  import WordTreeGChart from "../components/plots/wordtree_gcharts.svelte";
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
  }

  .row {
    flex: 1;
    background: #f2f2f2;
    border: 1px solid #e6e6e6;
    box-sizing: border-box;
  }
</style>

<div class="container">
  <div class="row">
    <SelectionMenu />
  </div>
  {#if $selected_chart == 'scatter'}
    <div class="row">
      <ScatterGChart />
    </div>
  {:else if $selected_chart == 'pie'}
    <div class="row">
      <PieGChart />
    </div>
  {:else if $selected_chart == 'wordtree'}
    <div class="row">
      <WordTreeGChart />
    </div>
  {/if}
</div>
