/*
 * viz.js
 *
 *
 * Initial code based on an example provided in the Google Charts API
 * documentation and Dr. Crenshaw's Librarians' project.  See:
 * 
 * https://developers.google.com/chart/interactive/docs/gallery/columnchart#Examples
 * https://github.com/crenshaw/thelibrarians/tree/master/simple
 *
 * @author: Casey Sigelmann
 * @since: March 15, 2015
 */

google.load('visualization', '1', { packages: ['corechart'] });

//google.setOnLoadCallback(drawVisualization);
google.setOnLoadCallback(drawChart1);

function createChart() {

}

function drawVisualization() {
    google.visualization.drawChart({
        "containerId": "graphBox",
        "dataSourceUrl": "https://www.google.com/fusiontables/gvizdata?tq=",
        "query": "SELECT 'Street1', 'NumAccidents' FROM " +
                "12nDINQjBEvtlBWBLd_FqDoUAbR7ssXWfEQX1CCJy WHERE Street1 IN '2nd Avenue'",
        "refreshInterval": 500,
        "chartType": "ColumnChart",
        "options": {}
    })
}

function drawChart1() {

    // Get the whole Fusion table
    var query = "SELECT Street1, Year, NumAccidents FROM 12nDINQjBEvtlBWBLd_FqDoUAbR7ssXWfEQX1CCJy";
    console.log(query);
    var opts = { sendMethod: 'auto' };
    var queryObj = new google.visualization.Query('https://www.google.com/fusiontables/gvizdata?tq=', opts);
    console.log("Query:");
    console.log(queryObj);

    // Set the options for the chart to be drawn.  This include the
    // width, height, title, horizontal axis, vertical axis.  Finally
    // turn off the legend.
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var options = {
        width: windowWidth / 2,
        height: windowHeight / 2,
        hAxis: {
            title: 'Year'
        },
        vAxis: {
            title: 'Crashes'
        },
        legend: {
            position: 'right'
        }
    };

    // Define variables to hold the entire fusion table
    // and a collection of views, one for each street
    var data;
    var view;
    var invTable;

    // Send the query and create the data for 2nd Ave
    queryObj.setQuery(query);
    queryObj.send(function (e) {

        data = e.getDataTable();


        view = new google.visualization.DataView(data);
        
        view.setRows(data.getFilteredRows([{ column: 0, value: "2nd Avenue" }]));

        console.log("HELLOILIKETURTLES");
        // Create the inverted view
        invertedView = new google.visualization.DataView();
        invertedView.addColumn('string');
        for (row = 1; row < view.getNumberOfRows() ; row++)
        {
            invertedView.addColumn('Number')
        }
        for (col = 0; col < view.getNumberOfColumns() ; col++)
        {
            invertedView.addRow()
        }
        console.log("HELLOILIKETURTLES");
        // Invert the view
        for (row = 0; row < view.getNumberOfRows() ; row++)
        {
            for (col = 0; col < view.getNumberOfColumns(); col++)
            {
                invertedView.setCell(col, row, view.getValue(row, col));
            }
        }
        console.log("HELLOILIKETURTLES");
        var chart = new google.visualization.ColumnChart(document.getElementById('graphBox'));
        chart.draw(view.toDataTable(), options);

    })

    // Store the data by creating a google DataTable object with
    // two columns: Month and People Hours.
    //var data = new google.visualization.DataTable();
    //data.addColumn('string', 'Year');
    //data.addColumn('number', '2nd Ave');
    //data.addColumn('number', 'Couch St');
    //data.addColumn('number', 'Stark St');

    // Add rows for each year we have data for
    //data.addRows([
    //    ['2010', 6, 8, 2],
    //    ['2011', 7, 10, 1],
    //    ['2012', 5, 1, 4],
    //    ['2013', 4, 4, 3]
    //]);

    

    // Create a new viz object using the google API -- specifically,
    // we are going to make a column chart inside the div called graphBox
    // in the html file.
    //var chart = new google.visualization.ColumnChart(document.getElementById('graphBox'));

    // Draw the chart with the supplied options.
    //chart.draw(data, options);
}

window.onresize = function(){ location.reload(); };