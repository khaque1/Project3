function initMap() {
	var bean = {lat: 41.882965, lng: -87.623272};
	var map = new google.maps.Map(document.getElementById('map'), {center:bean, zoom: 18});
	
	var marker = new google.maps.Marker({
			position: bean,
			map: map,
			animation: google.maps.Animation.BOUNCE,
			icon: 'pics/marker.png'
	});
	
	var info = new google.maps.InfoWindow ({
		content: 'The Cloud Gate'
	});
	
	marker.addListener('click', function() {
		info.open(map, marker);
	});
}
google.maps.event.addDomListener(window,'load', init);