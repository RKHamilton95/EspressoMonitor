	var ctx = document.getElementById("myChart").getContext("2d");
    var baseURL = "http://pidataspro.ddns.net:8056/";

	function drawRealTempChart() {
		$.getJSON(baseURL.concat("realTime"), function(results){
			var labels = [], boilerTemp=[],roomTemp=[];
			$.each(results, function(i, field){
				labels.push(field.timestamp);
				boilerTemp.push(field.boilerTemp);
                roomTemp.push(field.roomTemp);
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
					label: 'Room Temp',
					backgroundColor: "rgba(255,153,0,0.4)",
					data: roomTemp,
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
						text: "Boiler/Room Temperature"},
						
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

    function drawRealPressureChart() {
		$.getJSON(baseURL.concat("realTime"), function(results){
			var labels = [], pressure=[];
			$.each(results, function(i, field){
				labels.push(field.timestamp);
				pressure.push(field.pressure);
			});

			var pressureData = {
				labels: labels,
				xAxisID: "Time",
				yAxisID: "Pressure in Bar",
				datasets : [{
					label: 'Pressure',
					backgroundColor: "rgba(153,255,51,0.4)",
					data: pressure,
					radius: 2,
					fill: false
				}]
			};


			var myChart = new Chart(ctx, {
				type: 'line',
				data: pressureData,
				options:{
					animation:{
						duration: 0
					},
					title: {
						fontSize: 20,
						display: true,
						text: "Pressure"},
						
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
    
        function drawRealHumidityChart() {
		$.getJSON(baseURL.concat("realTime"), function(results){
			var labels = [], humidity=[];
			$.each(results, function(i, field){
				labels.push(field.timestamp);
				humidity.push(field.ambientHumidity);
			});

			var humidityeData = {
				labels: labels,
				xAxisID: "Time",
				yAxisID: "Humidity in Percent",
				datasets : [{
					label: 'Humidity',
					backgroundColor: "rgba(153,255,51,0.4)",
					data: humidity,
					radius: 2,
					fill: false
				}]
			};


			var myChart = new Chart(ctx, {
				type: 'line',
				data: humidityData,
				options:{
					animation:{
						duration: 0
					},
					title: {
						fontSize: 20,
						display: true,
						text: "Humidity"},
						
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

    drawRealTempChart();
	drawRealPressureChart();
    drawRealHumidityChart();

	setInterval(function(){
		drawRealPressureChart();
        drawRealTempChart();
        drawRealHumidityChart();
	}, 1000);