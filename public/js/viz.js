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
 * @since: April 21, 2015
 */

google.load('visualization', '1', { packages: ['corechart'] });

google.setOnLoadCallback(drawChart);


function drawChart() {

    // Get the whole Fusion table
    var query = "SELECT * FROM 1UZvX_REFzOYcCSvFO4ynGV3en00sJ3h3OQHmMCXh";
    var opts = { sendMethod: 'auto' };
    var queryObj = new google.visualization.Query('https://www.google.com/fusiontables/gvizdata?tq=', opts);

    // Set the options for the chart to be drawn.  This include the
    // width, height, title, horizontal axis, vertical axis.
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

    // Send the query and create the view
    queryObj.setQuery(query);
    queryObj.send(function (e) {

        data = e.getDataTable();

        view = new google.visualization.DataView(data);
        
        // set columns of the view based on which buttons are selected
        getCheckedBoxes();
        view.setColumns([0,2,3,4,5,6,7]);

        // draw the view
        var chart = new google.visualization.ColumnChart(document.getElementById('graphBox'));
        chart.draw(view.toDataTable(), options);

    })
}

function getCheckedBoxes(){
    var strArr = [];
    //retrieve all boxes
    var boxList = document.getElementsByClassName("cbox");

    //make sure only 5 are checked
    var counter = 0;
    for (var i = 0; i < boxList.length; i++)
    {//keep a count of the number of checked boxes
        if(boxList[i].checked)
        {
            strArr[strArr.length] = boxList[i].name
        }
    }
    console.log(strArr);
}

window.onresize = function(){ location.reload(); };