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
    Scatter
  </button>
  <button id="line" class="button is-info" on:click={handleClick}>Line</button>
  <button id="curve" class="button is-info" on:click={handleClick}>
    Curve
  </button>
</div>
