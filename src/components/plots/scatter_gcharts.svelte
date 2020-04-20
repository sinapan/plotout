<script type="text/javascript">
  // import { sample_data } from "./sample_data.js";
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
    google.charts.setOnLoadCallback(drawFromSheet);
  }

  // Callback that creates and populates a data table,
  // instantiates the pie chart, passes in the data and
  // draws it.
  function drawFromSheet() {
    let queryString = encodeURIComponent("SELECT A, C");
    let iris_dataset_URL =
      "https://docs.google.com/spreadsheets/d/1yPpCNkZdLZkK2Sgh-zh6xcR5W8KuBALzAO4rkrkmW5M/edit?usp=sharing";
    let query = new google.visualization.Query(
      iris_dataset_URL + "/gviz/tq?sheet=Sheet1&headers=1&tq=" + queryString
    );
    query.send(handleDataQueryResponse);
  }

  let data;
  function handleDataQueryResponse(response) {
    if (response.isError()) {
      console.log(
        "Error in query: " +
          response.getMessage() +
          " " +
          response.getDetailedMessage()
      );
      return;
    }
    data = response.getDataTable();
    drawChart(data);
  }
  function drawChart(data) {
    console.log(data);
    let options = {
      title: "Iris Dataset",
      hAxis: { title: "X" },
      vAxis: { title: "Y" },
      legend: "none" //{ position: "top", textStyle: { color: "blue", fontSize: 16 } }
    };
    let chart = new google.visualization.ScatterChart(
      document.getElementById("ScatterGChart")
    );
    chart.draw(data, options);
  }
  // auto window resizing
  function resize() {
    setTimeout(() => drawChart(data), 500);
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
