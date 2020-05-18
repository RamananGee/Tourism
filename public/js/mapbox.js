/* eslint-disable */
export const displayMap = (locations) => {
    mapboxgl.accessToken = 'pk.eyJ1IjoicmFtYW5hbmdlZSIsImEiOiJjazR6bDM3MzIwYmYxM2ZxdXUzc2txZTEyIn0.QIgHbjyBoK9j7VO4cfSYmg';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/ramanangee/ckaawbwlk1wl41inm9qx37g78',
    center: [80.195176, 12.609436],
    zoom: 14,
    scrollZoom:false
});

const bounds = new mapboxgl.LngLatBounds();

locations.forEach(loc => {
    //Add marker
    const el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker({
        element: el,
        anchor: 'bottom'
    })
    .setLngLat(loc.coordinates)
    .addTo(map);


    //Add popup
    new mapboxgl.Popup({
        offset: 30
    })
        .setLngLat(loc.coordinates)
        .setHTML(`<p>Day ${loc.day}: ${loc.description}`)
        .addTo(map);
    bounds.extend(loc.coordinates);
});

map.fitBounds(bounds, {
    padding: {
        top: 900,
        bottom: 300,
        // left: 100,
        // right: 100
    }
});
}
