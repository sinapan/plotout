export const sample_data = await getSampleData();

function getSampleData() {
  let data;
  // reading the sample data from a csv
  let queryOptions = {
    csvColumns: [
      "sepal_length",
      "sepal_width",
      "petal_length",
      "petal_width",
      "species",
    ],
    csvHasHeader: true,
  };
  const csvUrl = "../../../static/iris_dataset.csv";
  let query = new google.visualization.Query(csvUrl, queryOptions);
  query.send(handleQueryResponse);

  function handleQueryResponse(response) {
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
  }
  return writable(data);
}
