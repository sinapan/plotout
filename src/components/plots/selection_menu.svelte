<script>
  import { selected_chart } from "./stores.js";
  function handleClick(event) {
    document.getElementById($selected_chart).className = "button is-info";
    $selected_chart = event.target.id;
    document.getElementById($selected_chart).className =
      "button is-selected is-success";
  }
</script>

<div class="buttons is-centered">
  <button
    id="scatter"
    class="button is-selected is-success"
    on:click={handleClick}>
    Scatter Plot
  </button>
  <button id="pie" class="button is-info" on:click={handleClick}>
    Pie Chart
  </button>
  <button id="wordtree" class="button is-info" on:click={handleClick}>
    Word Tree Chart
  </button>
</div>
