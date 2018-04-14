var ctx = document.getElementById("myChart").getContext("2d");
    var baseURL = "http://pidataspro.ddns.net:8056/";

	function drawFinalShotChart() {
		$.getJSON(baseURL.concat("shot_data"), function(results){
			var labels = [], boilerTemp=[],pressure=[];
			$.each(results, function(i, field){
				labels.push(field.timeStamp);
				boilerTemp.push(field.boilerTemp);
                pressure.push(field.pressure);
			});

			var tempData = {
				labels: labels,
				xAxisID: "Time",
				yAxisID: "Temperature in F",
				datasets : [{
					label: 'Boiler Temperature',
					backgroundColor: "rgba(153,255,51,0.4)",
					data: boilerTemp,
					radius: 2,
					fill: false
				},
				{
					label: 'Pressure',
					backgroundColor: "rgba(255,153,0,0.4)",
					data: pressure,
					radius: 2
				}
				]
			};


			var myChart = new Chart(ctx, {
				type: 'line',
				data: tempData,
				options:{
					animation:{
						duration: 0
					},
					title: {
						fontSize: 20,
						display: true,
						text: "Temp/Pressure"},
						
						scales: {
							yAxes: [{
								ticks: {
									stepSize: 1
								}
							}]
							
						}


					}
				});
		});
	}
	//setInterval(function(){
	//	drawFinalShotChart();
	//}, 2000);