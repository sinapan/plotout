<script type="text/javascript">
  import { onMount } from "svelte";
  let googleChartsReady = false;
  let mounted = false;

  function googleChartsLoaded() {
    googleChartsReady = true;
    if (mounted) {
      loadGoogleChartsElements();
    }
  }

  onMount(() => {
    mounted = true;
    if (googleChartsReady) {
      loadGoogleChartsElements();
    }
  });

  function loadGoogleChartsElements() {
    // Load the Visualization API and the corechart package.
    google.charts.load("current", { packages: ["wordtree"] });
    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(drawChart);
  }

  // Callback that creates and populates a data table,
  // instantiates the pie chart, passes in the data and
  // draws it.
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ["Phrases"],
      ["cats are better than dogs"],
      ["cats eat kibble"],
      ["cats are better than hamsters"],
      ["cats are awesome"],
      ["cats are people too"],
      ["cats eat mice"],
      ["cats meowing"],
      ["cats in the cradle"],
      ["cats eat mice"],
      ["cats in the cradle lyrics"],
      ["cats eat kibble"],
      ["cats for adoption"],
      ["cats are family"],
      ["cats eat mice"],
      ["cats are better than kittens"],
      ["cats are evil"],
      ["cats are weird"],
      ["cats eat mice"]
    ]);

    var options = {
      wordtree: {
        format: "implicit",
        word: "cats"
      }
    };

    var chart = new google.visualization.WordTree(
      document.getElementById("WordTreeGChart")
    );
    chart.draw(data, options);
  }
  function resize() {
    setTimeout(() => drawChart(), 500);
  }
</script>

<svelte:head>
  <!-- Load the AJAX API -->
  <script
    type="text/javascript"
    src="https://www.gstatic.com/charts/loader.js"
    on:load={googleChartsLoaded}>

  </script>
</svelte:head>
<svelte:window on:resize={resize} />
<!--Div that will hold the pie chart-->
<div id="WordTreeGChart" />
