var map = L.map('map').setView([24.918007960920157, 67.09721971005116], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);
var marker = L.marker([24.918007960920157, 67.09721971005116]).addTo(map);