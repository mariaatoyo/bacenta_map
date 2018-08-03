// GOOGLE MAPS

function initMap() {
    //Map options
    var options = {
        zoom: 12,
        center: {
            lat: 52.6298,
            lng: -1.1394
        }
    }
    //New map
    var map = new google.maps.Map(document.getElementById('map'), options);

    //MARKERS
    var marker = new google.maps.Marker({
        position: {
            lat: 52.6287,
            lng: -1.1473
        },
        map: map,
    });
    //Markers clickable and linked to pages
    google.maps.event.addListener(marker, 'click', function() {
        window.location.href = "code.html";
    });

    var marker = new google.maps.Marker({
        position: {
            lat: 52.6235,
            lng: -1.1411
        },
        map: map
    });
    google.maps.event.addListener(marker, 'click', function() {
        window.location.href = "filbert.html";
    });

    var marker = new google.maps.Marker({
        position: {
            lat: 52.6317,
            lng: -1.1374
        },
        map: map
    });
    google.maps.event.addListener(marker, 'click', function() {
        window.location.href = "glassworks.html";
    });

    var marker = new google.maps.Marker({
        position: {
            lat: 52.6319,
            lng: -1.1364
        },
        map: map
    });
    google.maps.event.addListener(marker, 'click', function() {
        window.location.href = "grosvenor-house.html";
    });
    
    var marker = new google.maps.Marker({
        position: {
            lat: 52.6296,
            lng: -1.1370
        },
        map: map
    });
    google.maps.event.addListener(marker, 'click', function() {
        window.location.href = "gosling-court.html";
    });
    
    var marker = new google.maps.Marker({
        position: {
            lat: 52.6294,
            lng: -1.1366
        },
        map: map
    });
    google.maps.event.addListener(marker, 'click', function() {
        window.location.href = "kingfisher-court.html";
    });
    
    var marker = new google.maps.Marker({
        position: {
            lat: 52.6250,
            lng: -1.1425
        },
        map: map
    });
    google.maps.event.addListener(marker, 'click', function() {
        window.location.href = "liberty-park.html";
    });
    
    var marker = new google.maps.Marker({
        position: {
            lat: 52.6362,
            lng: -1.1432
        },
        map: map
    });
    google.maps.event.addListener(marker, 'click', function() {
        window.location.href = "merlin-heights";
    });
    
    var marker = new google.maps.Marker({
        position: {
            lat: 52.6303,
            lng: -1.1411
        },
        map: map
    });
    google.maps.event.addListener(marker, 'click', function() {
        window.location.href = "newark-point";
    });

}