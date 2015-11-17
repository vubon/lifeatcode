	// Radar Char 

		var radarChartData = {
		labels: ["Coding", "Designing", "Creativity", "Success", "Performance", "+Feedback", "- Feedback","Love",],
		datasets: [
			{
				label: "My First dataset",
				fillColor: "rgba(102,102,204,0.4)",
				strokeColor: "rgba(102,102,204,1)",
				pointColor: "rgba(102,102,202,1)",
				pointStrokeColor: "#fff",
				pointHighlightFill: "#fff",
				pointHighlightStroke: "rgba(220,220,220,1)",
				data: [100,28,100,28,100,28,100,28]
			},
			{
				label: "My Second dataset",
				fillColor: "rgba(72,66,136,0.7)",
				strokeColor: "#484288",
				pointColor: "#484288",
				pointStrokeColor: "#fff",
				pointHighlightFill: "#fff",
				pointHighlightStroke: "rgba(151,187,205,1)",
				data: [28,100,28,100,28,100,28,100]
			}
		]
	};

	window.onload = function(){
		window.myRadar = new Chart(document.getElementById("canvas").getContext("2d")).Radar(radarChartData, {
			responsive: true
		});
	}
