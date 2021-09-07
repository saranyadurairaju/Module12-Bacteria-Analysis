function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");
  
  // Use the list of sample names to populate the select options
  d3.json("samples.json").then((data) => {
    
    console.log(data);
    var sampleNames = data.names;

    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    var firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
  
}

// Demographics Panel 
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

  });
}

// 1. Create the buildCharts function.
function buildCharts(sample) {
  // 2. Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {
    // 3. Create a variable that holds the samples array. 
    var samples = data.samples; 
    // 4. Create a variable that filters the samples for the object with the desired sample number.
    var samplesArray = samples.filter(sampleObj => sampleObj.id == sample);
    console.log(samplesArray)

    var metadata = data.metadata;

    // (3) 1. Create a variable that filters the metadata array for the object with the desired sample number.
    var metadataArray = metadata.filter(sampleObj => sampleObj.id == sample);

    //  5. Create a variable that holds the first sample in the array.
    var sampleOne = samplesArray[0];

    // (3) 2. Create a variable that holds the first sample in the metadata array.
    var metadata = metadataArray[0];

    // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
    console.log("inside buildChart");
    console.log(sampleOne);
    
    var sampleOtuID = sampleOne.otu_ids;
    console.log(sampleOtuID);
    var sampleOtuLabel = sampleOne.otu_labels;
    console.log(sampleOtuLabel);
    var sampleValues = sampleOne.sample_values;
    console.log(sampleValues);

    // (3) 3. Create a variable that holds the washing frequency.
    var washfreq = (metadata.wfreq).toFixed(2);
    console.log(washfreq);

    // ************BAR CHART**************

    // 7. Create the yticks for the bar chart.
    // Hint: Get the the top 10 otu_ids and map them in descending order  
    //  so the otu_ids with the most bacteria are last. 
    
    // Sort the array in descending order and assign the results to a variable
    // var sorted = sampleOtuID.sort((a, b) => b - a);
    // var yticks = sorted.slice(0, 10);
    // console.log(yticks);

    var sorted = sampleValues.sort((a, b) => b - a);
    var xticks = sorted.slice(0, 10);
    console.log(xticks);
    var yticks = sampleOtuID.slice(0,10);
    console.log(yticks);

    // // 8. Create the trace for the bar chart. 
    var barData = [{
      x: xticks,
      y: yticks,
      name: "OTU IDs",
      type: "bar",
      orientation: "h"
    }      
    ];
    // // 9. Create the layout for the bar chart. 
    var barLayout = {
      title: "The Most OTU IDs",
      xaxis: { title: "Count" },
      yaxis: { title: "OTU IDs"}
    };
    // 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot("bar", barData, barLayout);

    
    // ************BUBBLE CHART**************
    
    // 1. Create the trace for the bubble chart.
    var bubbleData = [{
      x: sampleOtuID,
      y: sampleValues,
      text: sampleOtuLabel,
      mode: 'markers',
      marker: {
        // color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
        size: sampleOtuID,
        //setting 'sizeref' to lower than 1 decreases the rendered size
        sizeref: 2,
        sizemode: 'area'
      }}
    ];

    // 2. Create the layout for the bubble chart.
    var bubbleLayout = {
      title: 'Bubble Chart Hover Text',
      showlegend: false,
      height: 600,
      width: 1200
    };

    // 3. Use Plotly to plot the data with the layout.
    Plotly.newPlot('bubble', bubbleData, bubbleLayout); 

    // ************GUAGE CHART**************

    // 4. Create the trace for the gauge chart.
    var gaugeData = [
      {
        domain: { x: [0, 1], y: [0, 1] },
        value: washfreq,
        title: { text: "Speed" },
        type: "indicator",
        mode: "gauge+number"
      }
    ];
    
    // 5. Create the layout for the gauge chart.
    var gaugeLayout = { 
      width: 600, 
      height: 500, 
      margin: { t: 0, b: 0 }
    };

    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot(gauge, gaugeData,gaugeLayout); 

  });
}
