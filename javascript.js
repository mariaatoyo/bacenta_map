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
    var code = new google.maps.Marker({
        position: {
            lat: 52.6287,
            lng: -1.1473
        },
     icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 10
          },
          draggable: true,
          map: map
        });
     var contentStrings = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Code Bacenta</h1>'+
            '<div id="bodyContent">'+
            '<img id ="b_image" src="B_Leader2.jpeg" alt="Smiley face" width="50" height="50">'+
            '<p id="bacdesc"><b>Name Of Bacenta Leader : Anita Dzere</br> Name Of Center Leader : Daniel Nyirenda<br> Number Of People In Bacenta : 10</b></p>'+
            '<p>Bacenta Data: <a href="https://docs.google.com/spreadsheets/d/14TOGB-xeacO0ryZWEkiHam15MnITswm3T-TzmtZIf7w/edit#gid=1259102272">'+
            'Google Sheets Data</a> '+
            '</p>'+
            '</div>'+
            '</div>';

        var infowindows = new google.maps.InfoWindow({
          content: contentStrings
        });

        code.addListener('click', function() {
          infowindows.open(map, code); 
        });
    
          
    
   

    
     var marker = new google.maps.Marker({
        position: {
            lat: 52.6033559,
            lng: -1.155743
        },
        map: map
    }); 
    
    google.maps.event.addListener(marker, 'click', function() {
        window.location.href = "ben-russle-court";
    });

    
    
    var filbert = new google.maps.Marker({
        position: {
            lat: 52.6235,
            lng: -1.1411
        },
     icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 10
          },
          draggable: true,
          map: map
        });

        var contentStringe = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Filbert Village Bacenta</h1>'+
            '<div id="bodyContent">'+
            '<img id ="b_image" src="B_Leader.jpeg" alt="Smiley face" width="50" height="50">'+
            '<p id="bacdesc"><b>Name Of Bacenta Leader : Chisemble Joy Bwayla</br> Name Of Center Leader : Daniel Nyirenda<br> Number Of People In Bacenta : 72</b></p>'+
            '<p>Bacenta Data: <a href="https://docs.google.com/spreadsheets/d/14TOGB-xeacO0ryZWEkiHam15MnITswm3T-TzmtZIf7w/edit#gid=1259102272">'+
            'Google Sheets Data</a> '+
            '</p>'+
            '</div>'+
            '</div>';

        var infowindowe = new google.maps.InfoWindow({
          content: contentStringe
        });

        filbert.addListener('click', function() {
          infowindowe.open(map, filbert); 
        });
    //filbert village
   // google.maps.event.addListener(marker, 'click', function() {
     //window.location.href = 'https://docs.google.com/spreadsheets/d/14TOGB-xeacO0ryZWEkiHam15MnITswm3T-TzmtZIf7w/edit#gid=1259102272';
    //});

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
    
        var marker = new google.maps.Marker({
        position: {
            lat: 52.611062,
            lng: -1.129522
        },
        map: map
    });
    google.maps.event.addListener(marker, 'click', function() {
        window.location.href = "burn-street";
    });
    
         var marker = new google.maps.Marker({
        position: {
            lat: 52.630546,
            lng: -1.147296
        },
        map: map
    });
    google.maps.event.addListener(marker, 'click', function() {
        window.location.href = "10-narborough-road";
    });
    
             var marker = new google.maps.Marker({
        position: {
            lat: 52.638650,
            lng: -1.136913
        },
        map: map
    });
    google.maps.event.addListener(marker, 'click', function() {
        window.location.href = "100-vaughn-way";
    });
    
             var marker = new google.maps.Marker({
        position: {
            lat: 52.631047,
            lng: -1.144807
        },
        map: map
    });
    google.maps.event.addListener(marker, 'click', function() {
        window.location.href = "11-bede-street";
    });
    
              var marker = new google.maps.Marker({
        position: {
            lat: 52.624728,
            lng: -1.138271
        },
        map: map
    });
    google.maps.event.addListener(marker, 'click', function() {
        window.location.href = "11-douglas-walnut";
    });
    
              var marker = new google.maps.Marker({
        position: {
            lat: 52.624728,
            lng: -1.138271
        },
        map: map
    });
    google.maps.event.addListener(marker, 'click', function() {
        window.location.href = "11-dane-street";
    });
    
                var marker = new google.maps.Marker({
        position: {
            lat: 52.634114,
            lng: -1.128490
        },
        map: map
    });
    google.maps.event.addListener(marker, 'click', function() {
        window.location.href = "120-charles-street";
    });
    
               var marker = new google.maps.Marker({
        position: {
            lat: 52.623810,
            lng: -1.218343
        },
        map: map
    });
    google.maps.event.addListener(marker, 'click', function() {
        window.location.href = "14-kirloe-avenue";
    });
    
              var marker = new google.maps.Marker({
        position: {
            lat: 52.634016,
            lng: -1.138960
        },
        map: map
    });
    google.maps.event.addListener(marker, 'click', function() {
        window.location.href = "21-careys-close";
    });
    
             var marker = new google.maps.Marker({
        position: {
            lat: 52.579252,
            lng: -1.034293
        },
        map: map
    });
    google.maps.event.addListener(marker, 'click', function() {
        window.location.href = "21-heron-street";
    });
    
             var marker = new google.maps.Marker({
        position: {
            lat: 52.635246,
            lng: -1.147677
        },
        map: map
    });
    google.maps.event.addListener(marker, 'click', function() {
        window.location.href = "22-rivers-street";
    });
    
            var marker = new google.maps.Marker({
        position: {
            lat: 52.624101,
            lng: -1.156651
        },
        map: map
    });
    google.maps.event.addListener(marker, 'click', function() {
        window.location.href = "257-fosse-road-south";
    });
    
          var marker = new google.maps.Marker({
        position: {
            lat: 52.628067,
            lng: -1.151255
        },
        map: map
    });
    google.maps.event.addListener(marker, 'click', function() {
        window.location.href = "27-harrow-road";
    });
    
         var marker = new google.maps.Marker({
        position: {
            lat: 52.597844,
            lng: -1.160903
        },
        map: map
    });
    google.maps.event.addListener(marker, 'click', function() {
        window.location.href = "28-highgrove-crescent";
    });
    
        var marker = new google.maps.Marker({
        position: {
            lat: 52.631537,
            lng: -1.051682
        },
        map: map
    });
    google.maps.event.addListener(marker, 'click', function() {
        window.location.href = "29-thurnby-lodge";
    });
    
      var marker = new google.maps.Marker({
        position: {
            lat: 52.926038,
            lng: -1.281461
        },
        map: map
    });
    google.maps.event.addListener(marker, 'click', function() {
        window.location.href = "3-wellington-street";
    });
    
          var marker = new google.maps.Marker({
        position: {
            lat: 52.63333,
            lng: -1.13333
        },
        map: map
    });
    google.maps.event.addListener(marker, 'click', function() {
        window.location.href = "32-tarbert-walk";
    });
    
         var marker = new google.maps.Marker({
        position: {
            lat: 52.627468,
            lng: -1.15081
        },
        map: map
    });
    google.maps.event.addListener(marker, 'click', function() {
        window.location.href = "36-barclays-street";
    });
    
         var marker = new google.maps.Marker({
        position: {
            lat: 52.626617,
            lng: -1.128972
        },
        map: map
    });
    google.maps.event.addListener(marker, 'click', function() {
        window.location.href = "37-lower-hastings-street";
    });
    
         var marker = new google.maps.Marker({
        position: {
            lat: 52.595603,
            lng: -1.120102
        },
        map: map
    });
    google.maps.event.addListener(marker, 'click', function() {
        window.location.href = "41-bradgate-drive";
    });
    
        var marker = new google.maps.Marker({
        position: {
            lat: 52.626792,
            lng: -1.193755
        },
        map: map
    });
    google.maps.event.addListener(marker, 'click', function() {
        window.location.href = "44-gunthorpe";
    });
    
        var marker = new google.maps.Marker({
        position: {
            lat: 52.623546,
            lng: -1.151184
        },
        map: map
    });
    google.maps.event.addListener(marker, 'click', function() {
        window.location.href = "64-eastleigh-road";
    });
    
        var marker = new google.maps.Marker({
        position: {
            lat: 52.634052,
            lng: -1.142254
        },
        map: map
    });
    google.maps.event.addListener(marker, 'click', function() {
        window.location.href = "57-bath-lane";
    });
    
        var marker = new google.maps.Marker({
        position: {
            lat: 52.634109,
            lng: -1.142311
        },
        map: map
    });
    google.maps.event.addListener(marker, 'click', function() {
        window.location.href = "95-bath-lane";
    });

}
