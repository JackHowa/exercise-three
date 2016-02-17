$(document).ready(function() {
    getData();


});







function getData() {

	$.getJSON("js/columbia.json", function(schoolsData){


		loopThroughData(schoolsData);
	})

}


function loopThroughData(s) {

	for (i=0; i<s.length; i++){

		var schoolName = s[i]["SCHOOL_NAME"];
		var year = s[i]["YEAR"];
		var gradPct = s[i]["Graduates_PCT"];

		

			1 === 1;
			1 == "1";
			1 === "1";

			if (schoolName === "FREDERICK DOUGLASS HIGH"){

				$(".chart").append("div class='bar'style='width: "+gradPct+"px'></div>");



					
			}
		
	}

}



