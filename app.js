const map = L.map('map').setView([20.5937, 78.9629], 5);

const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(map);