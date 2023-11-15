var map = L.map("map").setView([ 48.520721, -3.712390], 10);

var Stadia_OSMBright = L.tileLayer(
    "https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png",
    {
        maxZoom: 20,
        attribution:
            '&copy; <a href="https://www.waze.com/fr/live-map/directions/fr/bretagne/plougonven/mairie-de-plougonven?to=place.ChIJPckpTOJxEUgRm4u5qD0yVhQ">Waze</a>, ' +
            '&copy;<a href="https://www.google.com/maps/place/Mairie+de+Plougonven/@48.5206511,-3.7124654,20.81z/data=!4m6!3m5!1s0x481171e24c29c93d:0x1456323da8b98b9b!8m2!3d48.5206973!4d-3.712352!16s%2Fg%2F1tctd_s2?entry=ttu">Maps</a>' +
            ' Plougonven',

    }
);

Stadia_OSMBright.addTo(map);

var marker = L.marker([ 48.520721, -3.712390]).addTo(map);
marker.bindPopup("<b>Plougonven</b>");
marker.on('click', function() {
    marker.openPopup();

});