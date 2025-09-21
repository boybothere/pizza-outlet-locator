const map = L.map('map').setView([20.5937, 78.9629], 5);

const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(map);

function generateList() {
    const ul = document.querySelector('.list');

    storeList.forEach((shop) => {
        const li = document.createElement('li');
        const div = document.createElement('div');
        const a = document.createElement('a');
        const p = document.createElement('p');

        div.classList.add('shop-list');
        a.innerText = shop.properties.name;
        a.href = '#';
        p.innerText = shop.properties.address;
        a.addEventListener('click', () => {
            flyToStore(shop)
        });
        div.appendChild(a);
        div.appendChild(p);
        li.appendChild(div);
        ul.appendChild(li);
    })
}

generateList();

function makePopup(shop) {
    return `
        <div>
            <h4>${shop.properties.name}</h4>
            <p>${shop.properties.address}</p>
            <div class="phone-number">
                <a href="tel:${shop.properties.phone}">${shop.properties.phone}</a>
            </div>
        </div>
    `
}

function onEachFeature(feature, layer) {
    layer.bindPopup(makePopup(feature), { closeButton: false, offset: L.point(0, -8) });
}

const myIcon = L.icon({
    iconUrl: './marker.png',
    iconSize: [15, 25],
})

const shopsLayer = L.geoJSON(storeList, {
    onEachFeature: onEachFeature,
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: myIcon })
    }
})

shopsLayer.addTo(map);

function flyToStore(store) {
    const lat = store.geometry.coordinates[1];
    const lng = store.geometry.coordinates[0];
    map.flyTo([lat, lng], 14, {
        duration: 3
    });

    setTimeout(() => {
        L.popup({ closeButton: false, offset: L.point(0, -8) })
            .setLatLng([lat, lng])
            .setContent(makePopup(store))
            .openOn(map);
    }, 3000);
}


