var js0907 = (function () {

	var sampledata = null;

	return {

		getData: function () {

			// fetch example JSON data from a public API

			var that = this; // needed to give our AJAX callback access to the object scope!

			alert("Getting sample data ...");
			$.ajax({
				url: 'https://jsonplaceholder.typicode.com/todos/1',
				method: 'GET',
				dataType: 'json',
				success: function (response) {
					sampledata = response;
					that.printDataToConsole();
					that.displayData();
				}
			});

		},

		displayData: function () {

			// adds data object properties and values to page as paragraphs

			for (var key in sampledata) {
				if (sampledata.hasOwnProperty(key)) {
					var newparagraph = document.createElement("p");
					newparagraph.innerHTML = key + ": " + sampledata[key];
					$("#output").append(newparagraph);
				}
			}

		},

		printDataToConsole: function () {

			// diagnostic print; echoes JSON data to the console

			console.log(JSON.stringify(sampledata));

		}

	}

})();
