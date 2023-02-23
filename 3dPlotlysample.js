const CSV =
    "https://raw.githubusercontent.com/chris3edwards3/exampledata/master/plotlyJS/3d.csv";
Plotly.d3.csv(CSV, function(err, rows){
    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }
    let z_data=[];
    let i = 0;
    while (i < 21) {
        z_data.push(unpack(rows, i));
        i += 1;
    }
    let data = [{
        z: z_data,
        type: 'surface',
        colorscale: "YIGnBu" //https://plot.ly/javascript/colorscales/
    }];
    let layout = {
        title: 'Example 3D Surface',
        autosize: false,
        height: 600,
        width: 700,
        margin: {
            l: 65,
            r: 50,
            b: 65,
            t: 30,
        }
    };
    Plotly.newPlot('plot', data, layout);
});