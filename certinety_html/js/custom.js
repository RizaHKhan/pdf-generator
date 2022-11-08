const backgroundColor = [
  "rgb(0 162 222 / 100%)",
  "rgb(81 185 90 / 100%)",
  "rgb(246 186 4 / 100%)",
  "rgb(255 0 0 / 100%)",
];
const borderColor = [
  "rgb(0 162 222 / 100%)",
  "rgb(81 185 90 / 100%)",
  "rgb(246 186 4 / 100%)",
  "rgb(255 0 0 / 100%)",
];
const ctx_barchart = document.getElementById("barchart").getContext("2d");

const barchart = new Chart(ctx_barchart, {
  type: "bar",
  data: {
    labels: ["Informational", "Low", "Medium", "High"],
    datasets: [
      {
        label: ["Finding Summery"],
        data: [12, 19, 3, 5],
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        borderWidth: 1,
      },
    ],
  },
  options: {
    plugins: {
      legend: false, // Hide legend
    },
    scales: {
      xAxis: {
        grid: {
          display: false,
        },
      },
      yAxis: {
        grid: {
          display: false,
        },
      },
    },
  },
});

// Barchart END

const ctx_piechart = document.getElementById("piechart").getContext("2d");
const piechart = new Chart(ctx_piechart, {
  type: "pie",
  data: {
    labels: ["Informational", "Low", "Medium", "High"],
    datasets: [
      {
        label: ["Finding Summery"],
        data: [12, 56, 55, 40],
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        borderWidth: 1,
      },
    ],
  },
  options: {
    plugins: {
      legend: false, // Hide legend
    },
  },
});
// piechart end

const ctx_doughnutchart = document
  .getElementById("doughnutchart")
  .getContext("2d");
const doughnutchart = new Chart(ctx_doughnutchart, {
  type: "doughnut",
  data: {
    labels: ["Informational", "Low", "Medium", "High"],
    datasets: [
      {
        label: ["Finding Summery"],
        data: [65, 59, 80, 81],
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        borderWidth: 1,
      },
    ],
  },
  options: {
    plugins: {
      legend: false, // Hide legend
    },
  },
});

//doughnutchart end

// ==========================
// D3 chart config
var labelTEXT = "Label"; //calcuting total manually
const width = 500;
const height = 470;

// Pie size
const pieWidth = 250;
const pieHeight = 250;
const pieRadius = Math.min(pieWidth, pieHeight);

// Donut shape
const arc = d3
  .arc()
  .outerRadius(pieRadius - 80)
  .innerRadius(80);

// Pie
const pie = d3
  .pie()
  .sort(null)
  .value((d) => {
    return d.number;
  });

// Legend squares
const legSqr = 20;
const legSpace = 10;

// Colors
const colors = d3
  .scaleOrdinal()
  .range([
    "rgb(0 162 222 / 100%)",
    "rgb(81 185 90 / 100%)",
    "rgb(246 186 4 / 100%)",
    "rgb(255 0 0 / 100%)",
    "rgb(156 39 176)",
  ]);

// SVG canvas top
const canvasTop = d3
  .select("#top-canvas")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .attr(
    "viewBox",
    "0 0 " + Math.min(width, height) + " " + Math.min(width, height)
  )
  .attr("preserveAspectRatio", "xMinYMin")
  .append("g")
  .attr("transform", "translate(250, 200)");

// Legend top
const legendGroupTop = canvasTop
  .append("g")
  .attr("width", width)
  .attr("height", 100)
  .attr("transform", "translate(-200, 200)");

// JSON import
d3.json(
  "https://rawgit.com/RollWithThePunches/D3-pie-chart/6afecf40cef31d8af351a0f2039bfd70fa10e26a/data.json",
  (error, data) => {
    // collecting "number" values from JSON
    data.forEach((d) => {
      d.item = d.item;
      d.number = +d.number;
      return d;
    });
    if (error) throw error;

    console.log(data);

    // Slices of pie charts
    const pieGroup = canvasTop
      .selectAll(".arc")
      .data(pie(data))
      .enter()
      .append("g")
      .attr("class", "arc");

    // Adding colors
    pieGroup
      .append("path")
      .data(pie(data))
      .attr("d", arc)
      .attr("fill", (d, i) => {
        return colors(d.data.item);
      });

    // Adding percentage text inside pie
    pieGroup
      .append("text")
      .attr("transform", (d) => {
        return "translate(" + arc.centroid(d) + ")";
      })
      .attr("dy", ".35em")
      .attr("font-size", 15)
      .attr("fill", "#fff")
      .attr("text-anchor", "middle")
      .text((d, i) => {
        return d.data.number + "%";
      });

    // Legend
    const legend = legendGroupTop
      .selectAll(".legend")
      .data(colors.domain())
      .enter()
      .append("g")
      .attr("class", "legend")
      .attr("transform", (d, i) => {
        const legHeight = legSqr + legSpace;
        const offset = (legHeight * colors.domain().length) / 2;
        const horz = legSqr;
        const vert = i * (legHeight + 50);
        return "translate(" + vert + "," + horz + ")";
      });
    pieGroup
      .append("text")
      .attr("text-anchor", "middle")
      .attr("font-size", "1.5em")
      .attr("y", 10)
      .text(labelTEXT);
    /*// Legend squares
	legend.append('rect')
		.attr('width', legSqr * 3)
		.attr('height', legSqr)
		.attr('fill', colors);

	// Legend text
	legend.append('text')
		.attr('x', legSqr - (legSpace + 2))
		.attr('y', legSqr + (legSpace * 2.2))
		.text((d) => { return d; });*/
  }
);
