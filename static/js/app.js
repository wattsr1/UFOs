// import data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");
function buildTable(data) {
    // Clear out any existing data
    tbody.html("");
    // Loop through each object in the data
    // append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // Append a row to the table body
        let row = tbody.append("tr");
        // Loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
}
function handleClick() { 
    // Get the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    // Check the date entered against the data and filter
    // for data that matches the date
    if (date) {
        // Apply filter to the data to only keep the rows
        // where the datatime value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    }
    // Rebuild the table using the filtered data
    // @NOTE: If no date is entered the filterData will
    // just be the original tableData.
    buildTable(filteredData);
}
// Attach and event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);