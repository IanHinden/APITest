function openConnect(){
	var xhr = new XMLHttpRequest();
	//var city = document.getElementById('city').value;
	var url = 'https://shiitake-dev.zappos.biz/tag/public/page/0/size/10';
	
	xhr.onload = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        responseObject = JSON.parse(xhr.responseText);


	
	var newContent = '';
	function refreshInfo(){
	document.getElementById('content').innerHTML = newContent;
	}
	//newContent = 'The temp is ' + responseObject.main.temp + ' and the humidity is ' + responseObject.main.humidity;
	for (var i = 0; i < responseObject.payload.length; i++){
		newContent += '<div class="categories">';
		newContent += '<p>' + responseObject.payload[i].name + '</p>';
		newContent += '</div>';
			}
	
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