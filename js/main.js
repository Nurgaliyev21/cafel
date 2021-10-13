'use strict'
function goMap() {
    let mapPosition = {lat: 43.24198572367169,  lng: 76.91007353001741},  // Центр карты но не цель
        opt = {
            zoom: 16,
            center: mapPosition,
            disableDefaultUI: true,
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.SMALL
            }
        };
    let mainOffice = new google.maps.Map(document.getElementById('map'), opt);
    let mainOfficeMarker = new google.maps.Marker({
        position: mapPosition,
        map: mainOffice,
        title: "Байзакова, 263, 1 этаж, 5 офис",
    });
    window.addEventListener('resize', ()=> {
        if (window.innerWidth < 858) {
            mainOfficeMarker.setPosition(new google.maps.LatLng(43.24198572367169, 76.91007353001741));
        } else {
            mainOfficeMarker.setPosition(new google.maps.LatLng(43.241966206414055, 76.9139198230771));
        }
    })
}


let mediaMaxWidth450 = window.matchMedia('(max-width: 430px)');
let worksItems = document.getElementById('cell').getElementsByClassName("item");
function mediaResponse(e) {
    if (e.matches) {
        for (let i = 0; i < 5; i++) {
            worksItems[i].style.display = 'none';
        }
    } else {
        for (let i = 0; i < 5; i++) {
            worksItems[i].style.display = 'flex';
        }
    }
}
mediaMaxWidth450.addListener(mediaResponse)


if (window.matchMedia("(max-width: 430px)").matches) {
    for (let i = 0; i < 5; i++) {
        worksItems[i].style.display = 'none';
    }
} else {
    for (let i = 0; i < 5; i++) {
        worksItems[i].style.display = 'flex';
    }
}