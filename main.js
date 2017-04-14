$(function () {
    myMap();
});

function myMap() {
    var myCenter = new google.maps.LatLng(41.878114, -87.629798);
    var mapProp = {
        center: myCenter,
        zoom: 12,
        draggable: false,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = google.maps.Map(document.getElementById('googleMap'), mapProp);
    var marker = google.maps.Marker({
        position: myCenter
    });
    marker.setMap(map);
}