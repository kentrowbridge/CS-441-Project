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

google.setOnLoadCallback(drawChart);

function drawChart() {

    // Store the data by creating a google DataTable object with
    // two columns: Month and People Hours.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Year');
    data.addColumn('number', 'Number of Crashes');
    data.addColumn('number', 'numcrash2');

    // Add rows for each year we have data for
    data.addRows([
        ['2010', 6, 8],
        ['2011', 7, 10],
        ['2012', 5, 1],
        ['2013', 4, 4]
    ]);

    // Set the options for the chart to be drawn.  This include the
    // width, height, title, horizontal axis, vertical axis.  Finally
    // turn off the legend.
    var options = {
        width: 1000,
        height: 563,
        title: 'Crashes per year',
        hAxis: {
            title: 'Year'
        },
        vAxis: {
            title: 'Crashes'
        },
        legend: {
            position: 'none'
        }
    };

    // Create a new viz object using the google API -- specifically,
    // we are going to make a column chart inside the div called ex0
    // in the html file.
    var chart = new google.visualization.ColumnChart(document.getElementById('graphBox'));

    // STEP 7: SHOW THE DATA
    // Draw the chart with the supplied options.
    chart.draw(data, options);
}