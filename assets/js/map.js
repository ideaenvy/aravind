var map;
function initMap(){
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    center: new google.maps.LatLng(12.911755, 77.591481),
    mapTypeId: 'roadmap'
  });

  // Location Srinagar
  var markerSrinagar = new google.maps.Marker({
    position: new google.maps.LatLng(34.083671
      , 74.797282),
    map:map
  });

  markerSrinagar.addListener('click', function(){
    var infoWindow = new google.maps.InfoWindow({
      content: '<div><h2>Srinagar</h2><p>For more details contact Weldon Biotech</p><p>Email:- info@weldonbiotech.com</p> </div>'
    });
    infoWindow.open(map, markerSrinagar);
  });


  //Location Jammu
  var markerJammu= new google.maps.Marker({
    position: new google.maps.LatLng(32.726602
      , 74.857026),
    map:map
  });

  markerJammu.addListener('click', function(){
    var infoWindow = new google.maps.InfoWindow({
      content: '<div><h2>Jammu</h2><p>For more details contact Weldon Biotech</p><p>Email:- info@weldonbiotech.com</p> </div>'
    });
    infoWindow.open(map, markerJammu);
  });

  //Chandigarh
  var markerChandigarh = new google.maps.Marker({
    position: new google.maps.LatLng(30.733315
      , 76.779418),
    map:map
  });

  markerChandigarh.addListener('click', function(){
    var infoWindow = new google.maps.InfoWindow({
      content: '<div><h2>Chandigarh</h2><p>For more details contact Weldon Biotech</p><p>Email:- info@weldonbiotech.com</p> </div>'
    });
    infoWindow.open(map, markerChandigarh);
  });

  //Amritsar
  var markerAmritsar = new google.maps.Marker({
    position: new google.maps.LatLng(31.633979
      , 74.872264),
    map:map
  });

  markerAmritsar.addListener('click', function(){
    var infoWindow = new google.maps.InfoWindow({
      content: '<div><h2>Amritsar</h2><p>For more details contact Weldon Biotech</p><p>Email:- info@weldonbiotech.com</p> </div>'
    });
    infoWindow.open(map, markerAmritsar);
  });

  //Karnol
  var markerKarnol = new google.maps.Marker({
    position: new google.maps.LatLng(15.828126
      , 78.037279),
    map:map
  });

  markerKarnol.addListener('click', function(){
    var infoWindow = new google.maps.InfoWindow({
      content: '<div><h2>Karnol</h2><p>For more details contact Weldon Biotech</p><p>Email:- info@weldonbiotech.com</p> </div>'
    });
    infoWindow.open(map, markerKarnol);
  });

  //Rohtak
  var markerRohtak = new google.maps.Marker({
    position: new google.maps.LatLng(28.895515
      , 76.606611),
    map:map
  });

  markerRohtak.addListener('click', function(){
    var infoWindow = new google.maps.InfoWindow({
      content: '<div><h2>Rohtak</h2><p>For more details contact Weldon Biotech</p><p>Email:- info@weldonbiotech.com</p> </div>'
    });
    infoWindow.open(map, markerRohtak);
  });

   //Dehradun
   var markerDehradun = new google.maps.Marker({
     position: new google.maps.LatLng(30.316495
       , 78.032192),
     map:map
   });
 
   markerDehradun.addListener('click', function(){
     var infoWindow = new google.maps.InfoWindow({
       content: '<div><h2>Dehradun</h2><p>For more details contact Weldon Biotech</p><p>Email:- info@weldonbiotech.com</p> </div>'
     });
     infoWindow.open(map, markerDehradun);
   });


   
   //Roorkee
   var markerRoorkee = new google.maps.Marker({
     position: new google.maps.LatLng(29.854263
       , 77.888),
     map:map
   });
 
   markerRoorkee.addListener('click', function(){
     var infoWindow = new google.maps.InfoWindow({
       content: '<div><h2>Roorkee</h2><p>For more details contact Weldon Biotech</p><p>Email:- info@weldonbiotech.com</p> </div>'
     });
     infoWindow.open(map, markerRoorkee);
   });


    //Meerut
    var markerMeerut = new google.maps.Marker({
      position: new google.maps.LatLng(28.984462
        , 77.706414),
      map:map
    });
  
    markerMeerut.addListener('click', function(){
      var infoWindow = new google.maps.InfoWindow({
        content: '<div><h2>Meerut</h2><p>For more details contact Weldon Biotech</p><p>Email:- info@weldonbiotech.com</p> </div>'
      });
      infoWindow.open(map, markerMeerut);
    });


     //Lucknow
     var markerLucknow = new google.maps.Marker({
       position: new google.maps.LatLng(26.846694
         , 80.946166),
       map:map
     });
   
     markerLucknow.addListener('click', function(){
       var infoWindow = new google.maps.InfoWindow({
         content: '<div><h2>Lucknow</h2><p>For more details contact Weldon Biotech</p><p>Email:- info@weldonbiotech.com</p> </div>'
       });
       infoWindow.open(map, markerLucknow);
     });
 
      //Allahabaad
      var markerAllahabaad = new google.maps.Marker({
        position: new google.maps.LatLng(25.435801
          , 81.846311),
        map:map
      });
    
      markerAllahabaad.addListener('click', function(){
        var infoWindow = new google.maps.InfoWindow({
          content: '<div><h2>Allahabaad</h2><p>For more details contact Weldon Biotech</p><p>Email:- info@weldonbiotech.com</p> </div>'
        });
        infoWindow.open(map, markerAllahabaad);
      });


        //Alighar
        var markerAlighar = new google.maps.Marker({
          position: new google.maps.LatLng(27.897394
            , 78.088013),
          map:map
        });
      
        markerAlighar.addListener('click', function(){
          var infoWindow = new google.maps.InfoWindow({
            content: '<div><h2>Alighar</h2><p>For more details contact Weldon Biotech</p><p>Email:- info@weldonbiotech.com</p> </div>'
          });
          infoWindow.open(map, markerAlighar);
        });


        //Mathura
        var markerMathura = new google.maps.Marker({
          position: new google.maps.LatLng(27.492413
            , 77.673673),
          map:map
        });
      
        markerMathura.addListener('click', function(){
          var infoWindow = new google.maps.InfoWindow({
            content: '<div><h2>Mathura</h2><p>For more details contact Weldon Biotech</p><p>Email:- info@weldonbiotech.com</p> </div>'
          });
          infoWindow.open(map, markerMathura);
        });

        //Moradabad
        var markerMoradabad = new google.maps.Marker({
          position: new google.maps.LatLng(28.838648
            , 78.773329),
          map:map
        });
      
        markerMoradabad.addListener('click', function(){
          var infoWindow = new google.maps.InfoWindow({
            content: '<div><h2>Moradabad</h2><p>For more details contact Weldon Biotech</p><p>Email:- info@weldonbiotech.com</p> </div>'
          });
          infoWindow.open(map, markerMoradabad);
        });

        //Saharanpur
        var markerSaharanpur = new google.maps.Marker({
          position: new google.maps.LatLng(29.967079
            , 77.551017),
          map:map
        });
      
        markerSaharanpur.addListener('click', function(){
          var infoWindow = new google.maps.InfoWindow({
            content: '<div><h2>Saharanpur</h2><p>For more details contact Weldon Biotech</p><p>Email:- info@weldonbiotech.com</p> </div>'
          });
          infoWindow.open(map, markerSaharanpur);
        });

         //Jaipur
         var markerJaipur = new google.maps.Marker({
          position: new google.maps.LatLng(26.912434
            , 75.787271),
          map:map
        });
      
        markerJaipur.addListener('click', function(){
          var infoWindow = new google.maps.InfoWindow({
            content: '<div><h2>Jaipur</h2><p>For more details contact Weldon Biotech</p><p>Email:- info@weldonbiotech.com</p> </div>'
          });
          infoWindow.open(map, markerJaipur);
        });

        
         //Jodhpur
         var markerJodhpur = new google.maps.Marker({
          position: new google.maps.LatLng(26.238947
            , 73.024309),
          map:map
        });
      
        markerJodhpur.addListener('click', function(){
          var infoWindow = new google.maps.InfoWindow({
            content: '<div><h2>Jodhpur</h2><p>For more details contact Weldon Biotech</p><p>Email:- info@weldonbiotech.com</p> </div>'
          });
          infoWindow.open(map, markerJodhpur);
        });

        //Pali
        var markerPali = new google.maps.Marker({
          position: new google.maps.LatLng(25.771089
            , 73.323448),
          map:map
        });
      
        markerPali.addListener('click', function(){
          var infoWindow = new google.maps.InfoWindow({
            content: '<div><h2>Pali</h2><p>For more details contact Weldon Biotech</p><p>Email:- info@weldonbiotech.com</p> </div>'
          });
          infoWindow.open(map, markerPali);
        });

         //Alwar
         var markerAlwar = new google.maps.Marker({
          position: new google.maps.LatLng(27.552991
            , 76.634573),
          map:map
        });
      
        markerAlwar.addListener('click', function(){
          var infoWindow = new google.maps.InfoWindow({
            content: '<div><h2>Alwar</h2><p>For more details contact Weldon Biotech</p><p>Email:- info@weldonbiotech.com</p> </div>'
          });
          infoWindow.open(map, markerAlwar);
        });

        //Delhi
        var markerDelhi = new google.maps.Marker({
          position: new google.maps.LatLng(28.704059
            , 77.10249),
          map:map
        });
      
        markerDelhi.addListener('click', function(){
          var infoWindow = new google.maps.InfoWindow({
            content: '<div><h2>Delhi</h2><p>For more details contact Weldon Biotech</p><p>Email:- info@weldonbiotech.com</p> </div>'
          });
          infoWindow.open(map, markerDelhi);
        });

         //Patna
         var markerPatna = new google.maps.Marker({
          position: new google.maps.LatLng(25.594095
            , 85.137565),
          map:map
        });
      
        markerPatna.addListener('click', function(){
          var infoWindow = new google.maps.InfoWindow({
            content: '<div><h2>Patna</h2><p>For more details contact Weldon Biotech</p><p>Email:- info@weldonbiotech.com</p> </div>'
          });
          infoWindow.open(map, markerPatna);
        });

        //Ranchi
        var markerRanchi = new google.maps.Marker({
          position: new google.maps.LatLng(23.3441
            , 85.309562),
          map:map
        });
      
        markerRanchi.addListener('click', function(){
          var infoWindow = new google.maps.InfoWindow({
            content: '<div><h2>Ranchi</h2><p>For more details contact Weldon Biotech</p><p>Email:- info@weldonbiotech.com</p> </div>'
          });
          infoWindow.open(map, markerRanchi);
        });

        //Ahmedabad
        var markerAhmedabad = new google.maps.Marker({
          position: new google.maps.LatLng(23.022505
            , 72.571362),
          map:map
        });
      
        markerAhmedabad.addListener('click', function(){
          var infoWindow = new google.maps.InfoWindow({
            content: '<div><h2>Ahmedabad</h2><p>For more details contact Weldon Biotech</p><p>Email:- info@weldonbiotech.com</p> </div>'
          });
          infoWindow.open(map, markerAhmedabad);
        });

        //Vadodara
        var markerVadodara = new google.maps.Marker({
          position: new google.maps.LatLng(22.307159
            , 73.181219),
          map:map
        });
      
        markerVadodara.addListener('click', function(){
          var infoWindow = new google.maps.InfoWindow({
            content: '<div><h2>Vadodara</h2><p>For more details contact Weldon Biotech</p><p>Email:- info@weldonbiotech.com</p> </div>'
          });
          infoWindow.open(map, markerVadodara);
        });

         //Rajkot
         var markerRajkot = new google.maps.Marker({
          position: new google.maps.LatLng(22.303894
            , 70.80216),
          map:map
        });
      
        markerRajkot.addListener('click', function(){
          var infoWindow = new google.maps.InfoWindow({
            content: '<div><h2>Rajkot</h2><p>For more details contact Weldon Biotech</p><p>Email:- info@weldonbiotech.com</p> </div>'
          });
          infoWindow.open(map, markerRajkot);
        });

        //Surat
        var markerSurat = new google.maps.Marker({
          position: new google.maps.LatLng(21.17024
            , 72.831061),
          map:map
        });
      
        markerSurat.addListener('click', function(){
          var infoWindow = new google.maps.InfoWindow({
            content: '<div><h2>Surat</h2><p>For more details contact Weldon Biotech</p><p>Email:- info@weldonbiotech.com</p> </div>'
          });
          infoWindow.open(map, markerSurat);
        });

        //Gwalior
        var markerGwalior = new google.maps.Marker({
          position: new google.maps.LatLng(26.218287
            , 78.182831),
          map:map
        });
      
        markerGwalior.addListener('click', function(){
          var infoWindow = new google.maps.InfoWindow({
            content: '<div><h2>Gwalior</h2><p>For more details contact Weldon Biotech</p><p>Email:- info@weldonbiotech.com</p> </div>'
          });
          infoWindow.open(map, markerGwalior);
        });


        //Indore
        var markerIndore = new google.maps.Marker({
          position: new google.maps.LatLng(22.719569
            , 75.857726),
          map:map
        });
      
        markerIndore.addListener('click', function(){
          var infoWindow = new google.maps.InfoWindow({
            content: '<div><h2>Indore</h2><p>For more details contact Weldon Biotech</p><p>Email:- info@weldonbiotech.com</p> </div>'
          });
          infoWindow.open(map, markerIndore);
        });

        //Kolkatta
        var markerKolkatta = new google.maps.Marker({
          position: new google.maps.LatLng(22.572646
            , 88.363895),
          map:map
        });
      
        markerKolkatta.addListener('click', function(){
          var infoWindow = new google.maps.InfoWindow({
            content: '<div><h2>Kolkatta</h2><p>For more details contact Weldon Biotech</p><p>Email:- info@weldonbiotech.com</p> </div>'
          });
          infoWindow.open(map, markerKolkatta);
        });

         //Bhubaneswar
         var markerBhubaneswar = new google.maps.Marker({
          position: new google.maps.LatLng(20.296059
            , 85.82454),
          map:map
        });
      
        markerBhubaneswar.addListener('click', function(){
          var infoWindow = new google.maps.InfoWindow({
            content: '<div><h2>Bhubaneswar</h2><p>For more details contact Weldon Biotech</p><p>Email:- info@weldonbiotech.com</p> </div>'
          });
          infoWindow.open(map, markerBhubaneswar);
        });

         //Bangalore
         var markerBangalore = new google.maps.Marker({
          position: new google.maps.LatLng(12.971599
            , 77.594563),
          map:map
        });
      
        markerBangalore.addListener('click', function(){
          var infoWindow = new google.maps.InfoWindow({
            content: '<div><h2>Bangalore</h2><p>For more details contact Weldon Biotech</p><p>Email:- info@weldonbiotech.com</p> </div>'
          });
          infoWindow.open(map, markerBangalore);
        });

        //Mumbai
        var markerMumbai = new google.maps.Marker({
          position: new google.maps.LatLng(19.075984
            , 72.877656),
          map:map
        });
      
        markerMumbai.addListener('click', function(){
          var infoWindow = new google.maps.InfoWindow({
            content: '<div><h2>Mumbai</h2><p>For more details contact Weldon Biotech</p><p>Email:- info@weldonbiotech.com</p> </div>'
          });
          infoWindow.open(map, markerMumbai);
        });

        //Pune
        var markerPune = new google.maps.Marker({
          position: new google.maps.LatLng(18.52043
            , 73.856744),
          map:map
        });
      
        markerPune.addListener('click', function(){
          var infoWindow = new google.maps.InfoWindow({
            content: '<div><h2>Pune</h2><p>For more details contact Weldon Biotech</p><p>Email:- info@weldonbiotech.com</p> </div>'
          });
          infoWindow.open(map, markerPune);
        });


         //Aurangabad
         var markerAurangabad = new google.maps.Marker({
          position: new google.maps.LatLng(19.876165
            , 75.343314),
          map:map
        });
      
        markerAurangabad.addListener('click', function(){
          var infoWindow = new google.maps.InfoWindow({
            content: '<div><h2>Aurangabad</h2><p>For more details contact Weldon Biotech</p><p>Email:- info@weldonbiotech.com</p> </div>'
          });
          infoWindow.open(map, markerAurangabad);
        });

         //Nagapur
         var markerNagapur = new google.maps.Marker({
          position: new google.maps.LatLng(18.878368
            , 76.440401),
          map:map
        });
      
        markerNagapur.addListener('click', function(){
          var infoWindow = new google.maps.InfoWindow({
            content: '<div><h2>Nagapur</h2><p>For more details contact Weldon Biotech</p><p>Email:- info@weldonbiotech.com</p> </div>'
          });
          infoWindow.open(map, markerNagapur);
        });

         //Kohlapur
         var markerKohlapur = new google.maps.Marker({
          position: new google.maps.LatLng(16.704987
            , 74.243253),
          map:map
        });
      
        markerKohlapur.addListener('click', function(){
          var infoWindow = new google.maps.InfoWindow({
            content: '<div><h2>Kohlapur</h2><p>For more details contact Weldon Biotech</p><p>Email:- info@weldonbiotech.com</p> </div>'
          });
          infoWindow.open(map, markerKohlapur);
        });

        //Chennai
        var markerChennai = new google.maps.Marker({
          position: new google.maps.LatLng(13.08268
            , 80.270718),
          map:map
        });
      
        markerChennai.addListener('click', function(){
          var infoWindow = new google.maps.InfoWindow({
            content: '<div><h2>Chennai</h2><p>For more details contact Weldon Biotech</p><p>Email:- info@weldonbiotech.com</p> </div>'
          });
          infoWindow.open(map, markerChennai);
        });

        //Ernakulam
        var markerErnakulam = new google.maps.Marker({
          position: new google.maps.LatLng(9.981636
            , 76.299884),
          map:map
        });
      
        markerErnakulam.addListener('click', function(){
          var infoWindow = new google.maps.InfoWindow({
            content: '<div><h2>Ernakulam</h2><p>For more details contact Weldon Biotech</p><p>Email:- info@weldonbiotech.com</p> </div>'
          });
          infoWindow.open(map, markerErnakulam);
        });


        //Trivandrum
        var markerTrivandrum = new google.maps.Marker({
          position: new google.maps.LatLng(8.524139
            , 76.936638),
          map:map
        });
      
        markerTrivandrum.addListener('click', function(){
          var infoWindow = new google.maps.InfoWindow({
            content: '<div><h2>Trivandrum</h2><p>For more details contact Weldon Biotech</p><p>Email:- info@weldonbiotech.com</p> </div>'
          });
          infoWindow.open(map, markerTrivandrum);
        });

        //Cochin
        var markerCochin = new google.maps.Marker({
          position: new google.maps.LatLng(9.931233
            , 76.267304),
          map:map
        });
      
        markerCochin.addListener('click', function(){
          var infoWindow = new google.maps.InfoWindow({
            content: '<div><h2>Cochin</h2><p>For more details contact Weldon Biotech</p><p>Email:- info@weldonbiotech.com</p> </div>'
          });
          infoWindow.open(map, markerCochin);
        });

        //Kangra
        var markerKangra = new google.maps.Marker({
          position: new google.maps.LatLng(32.099803
            , 76.269101),
          map:map
        });
      
        markerKangra.addListener('click', function(){
          var infoWindow = new google.maps.InfoWindow({
            content: '<div><h2>Kangra</h2><p>For more details contact Weldon Biotech</p><p>Email:- info@weldonbiotech.com</p> </div>'
          });
          infoWindow.open(map, markerKangra);
        });

          //Goa
          var markerGoa = new google.maps.Marker({
            position: new google.maps.LatLng(15.299326
              , 74.123996),
            map:map
          });
        
          markerGoa.addListener('click', function(){
            var infoWindow = new google.maps.InfoWindow({
              content: '<div><h2>Goa</h2><p>For more details contact Weldon Biotech</p><p>Email:- info@weldonbiotech.com</p> </div>'
            });
            infoWindow.open(map, markerGoa);
          });

           //Guwahati
           var markerGuwahati = new google.maps.Marker({
            position: new google.maps.LatLng(26.144517
              , 91.736237),
            map:map
          });
        
          markerGuwahati.addListener('click', function(){
            var infoWindow = new google.maps.InfoWindow({
              content: '<div><h2>Guwahati</h2><p>For more details contact Weldon Biotech</p><p>Email:- info@weldonbiotech.com</p> </div>'
            });
            infoWindow.open(map, markerGuwahati);
          });

           //Hydrabad
           var markerHydrabad = new google.maps.Marker({
            position: new google.maps.LatLng(17.385044
              , 78.486671),
            map:map
          });
        
          markerHydrabad.addListener('click', function(){
            var infoWindow = new google.maps.InfoWindow({
              content: '<div><h2>Hydrabad</h2><p>For more details contact Weldon Biotech</p><p>Email:- info@weldonbiotech.com</p> </div>'
            });
            infoWindow.open(map, markerHydrabad);
          });

          //Vijayawada
          var markerVijayawada = new google.maps.Marker({
            position: new google.maps.LatLng(16.506174
              , 80.648015),
            map:map
          });
        
          markerVijayawada.addListener('click', function(){
            var infoWindow = new google.maps.InfoWindow({
              content: '<div><h2>Vijayawada</h2><p>For more details contact Weldon Biotech</p><p>Email:- info@weldonbiotech.com</p> </div>'
            });
            infoWindow.open(map, markerVijayawada);
          });

          //Tirupati
          var markerTirupati = new google.maps.Marker({
            position: new google.maps.LatLng(13.628756
              , 79.419179),
            map:map
          });
        
          markerTirupati.addListener('click', function(){
            var infoWindow = new google.maps.InfoWindow({
              content: '<div><h2>Tirupati</h2><p>For more details contact Weldon Biotech</p><p>Email:- info@weldonbiotech.com</p> </div>'
            });
            infoWindow.open(map, markerTirupati);
          });

}