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
    data.addColumn('number', '2nd Ave');
    data.addColumn('number', 'Couch St');
    data.addColumn('number', 'Stark St');

    // Add rows for each year we have data for
    data.addRows([
        ['2010', 6, 8, 2],
        ['2011', 7, 10, 1],
        ['2012', 5, 1, 4],
        ['2013', 4, 4, 3]
    ]);

    // Set the options for the chart to be drawn.  This include the
    // width, height, title, horizontal axis, vertical axis.  Finally
    // turn off the legend.
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var options = {
        width: windowWidth/2,
        height: windowHeight/2,
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

    // Create a new viz object using the google API -- specifically,
    // we are going to make a column chart inside the div called ex0
    // in the html file.
    var chart = new google.visualization.ColumnChart(document.getElementById('graphBox'));

    // STEP 7: SHOW THE DATA
    // Draw the chart with the supplied options.
    chart.draw(data, options);
}

window.onresize = function(){ location.reload(); };