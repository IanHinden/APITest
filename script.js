function openConnect(){
	var xhr = new XMLHttpRequest();
	var city = document.getElementById('city').value;
	var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=7f5c20c0575896dc8da770c70446a169';
	
	xhr.onload = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        responseObject = JSON.parse(xhr.responseText);


	
	var newContent = '';
	function refreshInfo(){
	document.getElementById('content').innerHTML = newContent;
	}
	newContent = 'The temp is ' + responseObject.main.temp + ' and the humidity is ' + responseObject.main.humidity;
	/*for (var i = 0; i < responseObject.list.length; i++){
		newContent += '<div class='places'>';
		newContent += '<p>' + responseObject.list[i].main.temp + '</p>';
		newContent += '</div>';
			}
	*/
	refreshInfo();
	//.getElementById('content').innerHTML = newContent;
		}
	};
	
	xhr.open("GET", url, false);
	xhr.send();
}

  document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed");
	
	var el = document.getElementById('test');
	el.addEventListener('click', openConnect, false);
	
	
  });