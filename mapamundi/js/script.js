var playbbutton = document.getElementById("play_btn");
var playpausa = document.getElementById("pause_btn");
window.onload = function(){
  var play = document.getElementById("plays_btn");

play.addEventListener("click", modifyText, false); 

}
/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 *
 * For more information visit:
 * https://www.amcharts.com/
 *
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

/**
 * Define SVG path for target icon
 */
var targetSVG =
  "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

// Create map instance
var chart = am4core.create("chartdiv", am4maps.MapChart);
chart.geodata = am4geodata_worldLow;
chart.projection = new am4maps.projections.Miller();

// Create map polygon series
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
polygonSeries.exclude = ["AQ"];
polygonSeries.useGeodata = true;
// Configure series
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.size = 100;

polygonTemplate.tooltipText = " [font-size: 100px] {name} {radio} [/]";
polygonTemplate.fill = am4core.color("#C00000");
// create capital markers
var imageSeries = chart.series.push(new am4maps.MapImageSeries());
imageSeries.id = "markers";

// define template
var imageSeriesTemplate = imageSeries.mapImages.template;

var circle = imageSeriesTemplate.createChild(am4core.Circle);
circle.radius = 12;
circle.fill = am4core.color("#000000");
circle.stroke = am4core.color("#FFFFFF");
circle.strokeWidth = 2;
circle.nonScaling = true;

imageSeriesTemplate.propertyFields.latitude = "latitude";
imageSeriesTemplate.propertyFields.longitude = "longitude";

imageSeriesTemplate.tooltipText = "[font-size: 100px] {title}";
imageSeriesTemplate.fill = am4core.color("#C00000");

// set zoom events
imageSeries.events.on("datavalidated", updateImageVisibility);
chart.events.on("zoomlevelchanged", updateImageVisibility);
//circle.path = targetSVG;
var dado = 1;
var resultado = true;
//Siempre vuelve TRUE
var online = function() {
  if (navigator.onLine === true) {
    /* x = new Audio(data.radio2);
      if (dado == 1) {
        playPause(x);
        dado++;
      } else {
        dado = 1;
        playStop(x);
      }*/
    resultado;
  } else {
    resultado == false;
  }
  return resultado;
};

circle.events.on("hit", function(event) {
  var data = event.target.dataItem.dataContext;

  if (dado == 1) {
   x = new Audio(data.radio);
    /* if (x.networkState == x.NETWORK_NO_SOURCE) {
      x2 = new Audio(data.radio2);
      playPause(x2);
      dado++;
    } else {
      dado = 1;
      playStop(x2);
    }*/
   // var audio = document.getElementById("myAudio");
    //updateCurrentRadioText(data.title)
    var audio = document.getElementById('audio');
    audio.setAttribute("src", data.radio);
    updateCurrentRadioText(data.title);
    // html5 function - toggle play/pause btn and audio
    
   
    if (audio.paused == false) {
      audio.pause();
      $("#play_btn").show();
      $("#pause_btn").hide();
  } else {
      audio.play();
      $("#play_btn").hide();
      $("#pause_btn").show();
  }
    //playPause(x);
    //dado++;
  } else {

  
   // dado = 1;
   //playStop(x);
   //audio.pause();
    //playStop(x2);
  }
});

function updateImageVisibility(ev) {
  var chart = ev.target.baseSprite;
  var series = chart.map.getKey("markers");

  series.mapImages.each(function(image) {
    if (image.dataItem.dataContext.minZoomLevel) {
      if (image.dataItem.dataContext.minZoomLevel >= chart.zoomLevel) {
        image.hide();
      } else {
        image.show();
      }
    }
  });
}
function updateCurrentRadioText(title) {
  var text = document.getElementById("titulotest")
  text.innerHTML = "Estàs escoltant la ràdio de " + title;
}
imageSeries.data = [
  {
    minZoomLevel: 2,
    id: 1,
    latitude: 41.390205,
    longitude: 2.154007,
    title: "Barcelona",
    radio: "img/ràdios del món/Catalunya ràdio.mp3",
    radio2: "http://touhouradio.com:8000/.mp3"
  },
  {
    minZoomLevel: 4,
    id: 2,
    latitude: 52.5243683,
    longitude: 13.4105301,
    title: "Berlín",
    radio: "img/ràdios del món/ràdio ALEMANYA.mp3",
    radio2: "http://touhouradio.com:8000/.mp3"
  },
  {
    minZoomLevel: 4,
    id: 3,
    latitude: -8.837,
    longitude: 13.234,
    title: "Luanda",
    radio: "img/ràdios del món/ràdio ANGOLA (ÀFRICA).mp3",
    radio2: "http://touhouradio.com:8000/.mp3"
  },
  {
    minZoomLevel: 1,
    id: 4,
    latitude: 24.688,
    longitude: 46.722,
    title: "Riad",
    radio: "img/ràdios del món/ràdio ARÀBIA SAUDI.mp3",
    radio2: "http://touhouradio.com:8000/.mp3"
  },
  {
    minZoomLevel: 2,
    id: 5,
    latitude: -34.604,
    longitude: -58.382,
    title: "Buenos Aires",
    radio: "img/ràdios del món/ràdio ARGENTINA.mp3",
    radio2: "http://touhouradio.com:8000/.mp3"
  },
  {
    minZoomLevel: 4,
    id: 6,
    latitude: -35.281,
    longitude: 149.13,
    title: "Canberra",
    radio: "img/ràdios del món/ràdio AUSTRALIA.mp3",
    radio2: "http://touhouradio.com:8000/.mp3"
  },
  {
    minZoomLevel: 2,
    id: 7,
    latitude: 39.904,
    longitude: 116.407,
    title: "Pekín",
    radio: "img/ràdios del món/ràdio BEIJING (XINA).mp3",
    radio2: "http://touhouradio.com:8000/.mp3"
  },
  {
    minZoomLevel: 1,
    id: 8,
    latitude: -15.827,
    longitude: -47.922,
    title: "Brasilia",
    radio: "img/ràdios del món/ràdio BRAZIL.mp3",
    radio2: "http://touhouradio.com:8000/.mp3"
  },
  {
    minZoomLevel: 0,
    id: 9,
    latitude: 45.411,
    longitude: -75.698,
    title: "Ottawa",
    radio: "img/ràdios del món/ràdio CANADÀ.mp3",
    radio2: "http://touhouradio.com:8000/.mp3"
  },
  {
    id: 10,
    latitude: 30.044,
    longitude: 31.236,
    title: "El Cairo",
    radio: "img/ràdios del món/ràdio EGIPTE.mp3",
    radio2: "http://touhouradio.com:8000/.mp3"
  },
  {
    id: 11,
    latitude: 40.417,
    longitude: -3.704,
    title: "Madrid",
    radio: "img/ràdios del món/ràdio ESPANYA.mp3",
    radio2: "http://touhouradio.com:8000/.mp3"
  },
  {
    id: 12,
    latitude: 28.614,
    longitude: 77.209,
    title: "Nueva Delhi",
    radio: "img/ràdios del món/ràdio INDIA.mp3",
    radio2: "http://touhouradio.com:8000/.mp3"
  },
  {
    id: 13,
    latitude: -6.215,
    longitude: 106.845,
    title: "Yakarta",
    radio: "img/ràdios del món/ràdio INDONESIA.mp3",
    radio2: "http://touhouradio.com:8000/.mp3"
  },
  {
    id: 14,
    latitude: 41.892,
    longitude: 12.511,
    title: "Roma",
    radio: "img/ràdios del món/ràdio ITÀLIA.mp3",
    radio2: "http://touhouradio.com:8000/.mp3"
  },
  {
    id: 15,
    latitude: 35.68,
    longitude: 139.769,
    title: "Tokio",
    radio: "img/ràdios del món/ràdio JAPÓ.mp3",
    radio2: "http://touhouradio.com:8000/.mp3"
  },
  {
    id: 16,
    latitude: 51.18,
    longitude: 71.446,
    title: "Astaná",
    radio: "img/ràdios del món/ràdio KAZAKHSTAN.mp3",
    radio2: "http://touhouradio.com:8000/.mp3"
  },
  {
    id: 17,
    latitude: 51.513,
    longitude: -0.092,
    title: "Londres",
    radio: "img/ràdios del món/ràdio LONDRES.mp3",
    radio2: "http://touhouradio.com:8000/.mp3"
  },
  {
    id: 18,
    latitude: 19.433,
    longitude: -99.133,
    title: "Ciudad de México",
    radio: "img/ràdios del món/ràdio MÈXIC.mp3",
    radio2: "http://touhouradio.com:8000/.mp3"
  },
  {
    id: 19,
    latitude: 59.914,
    longitude: 10.752,
    title: "Oslo",
    radio: "img/ràdios del món/ràdio NORUEGA.mp3",
    radio2: "http://touhouradio.com:8000/.mp3"
  },
  {
    id: 20,
    latitude: -41.287,
    longitude: 174.776,
    title: "Wellington",
    radio: "img/ràdios del món/ràdio NOVA ZELANDA.mp3",
    radio2: "http://touhouradio.com:8000/.mp3"
  },
  {
    id: 21,
    latitude: 38.722,
    longitude: -9.139,
    title: "Lisboa",
    radio: "img/ràdios del món/ràdio PORTUGAL.mp3",
    radio2: "http://touhouradio.com:8000/.mp3"
  },
  {
    id: 22,
    latitude: 55.756,
    longitude: 37.617,
    title: "Moscú",
    radio: "img/ràdios del món/ràdio RUSSIA.mp3",
    radio2: "http://touhouradio.com:8000/.mp3"
  },
  {
    id: 23,
    latitude: 39.92,
    longitude: 32.854,
    title: "Ankara",
    radio: "img/ràdios del món/ràdio TURQUIA.mp3",
    radio2: "http://touhouradio.com:8000/.mp3"
  }
];
// Add zoom control
//chart.zoomControl = new am4maps.ZoomControl();

// Add and configure small map
chart.smallMap = new am4maps.SmallMap();
chart.smallMap.series.push(polygonSeries);
function playPause(audio) {
  audio.play();
}

function playStop(audio) {
  audio.pause();
}



function testradio(audio){
  if(!audio.pause()){
    audio.play();
  }else{
    audio.pause();
  }

}

/*var play = document.getElementById("plays_btn");

play.addEventListener("click", modifyText, false); 
function modifyText(){
  if (audio.paused == false) {
      audio.pause();
      playbbutton.style.display = 'block';
      playpausa.getElementById("#pause_btn").hide();
  } else {
      audio.play();
      playbbutton.hide();
      playpausa.getElementById("#pause_btn").show();
  }
};
*/

audio.addEventListener("timeupdate", function() {
  var currentTime = audio.currentTime,
      duration = audio.duration,
      currentTimeMs = audio.currentTime * 1000;
  $('.progressbar_range').stop(true, true).animate({'width': (currentTime + .25) / duration * 100 + '%'}, 250, 'linear');
});


// count function for timeleft

audio.addEventListener("timeupdate", function() {
  var timeleft = document.getElementById('timeleft'),
      duration = parseInt( audio.duration ),
      currentTime = parseInt( audio.currentTime ),
      timeLeft = duration - currentTime,
      s, m;
  
  s = timeLeft % 60;
  m = Math.floor( timeLeft / 60 ) % 60;
  
  s = s < 10 ? "0"+s : s;
  m = m < 10 ? "0"+m : m;
  timeleft.innerHTML ="-"+m+":"+s 
  //$('#timeleft').text();
  
});
function modifyText(){
  if (audio.paused == false) {
      audio.pause();
      document.getElementById("play_btn").style.display = 'block';
      playpausa.style.display = "none";
  } else {
      audio.play();
      playbbutton.style.display = "none";
      playpausa.style.display = 'block';
  }
};