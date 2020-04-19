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
    google.charts.load("current", { packages: ["corechart"] });
    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(drawChart);
  }

  // Callback that creates and populates a data table,
  // instantiates the pie chart, passes in the data and
  // draws it.
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ["Age", "Weight"],
      [8, 12],
      [4, 5.5],
      [11, 14],
      [4, 5],
      [3, 3.5],
      [6.5, 7]
    ]);

    var options = {
      title: "Age vs. Weight comparison",
      hAxis: { title: "Age", minValue: 0, maxValue: 15 },
      vAxis: { title: "Weight", minValue: 0, maxValue: 15 },
      legend: "none"
    };

    var chart = new google.visualization.ScatterChart(
      document.getElementById("ScatterGChart")
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
<div id="ScatterGChart" />
