'use strict'
var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
});

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

let menu = document.getElementById('menu')

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        menu.style.height = '70px'
        menu.style.background = "rgba(0,0,0,0.75)"
        menu.classList.remove('navMobile')
        menuLinks.classList.remove("mobMenu");
    } else {
        menu.style.height = '100px'
        menu.style.background = "rgba(0,0,0,0.5)"
    }
}

let menuBtn = document.getElementById("menu-bars"),
    menuLinks = document.getElementById('menu-links')
menuBtn.addEventListener('click', ()=> {
    if (!menu.classList.contains('navMobile')) {
        menu.classList.add('navMobile')
        menuLinks.classList.add("mobMenu");
    } else {
        menu.classList.remove('navMobile')
        menuLinks.classList.remove("mobMenu");
    }
})


let mediaMaxWidth450 = window.matchMedia('(max-width: 430px)'),
    mediaMaxWidth920 = window.matchMedia('(max-width: 920px)');
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
        menu.classList.remove('navMobile')
        menuLinks.classList.remove("mobMenu");
    }
}
function menuResponse(e) {
    if (e.matches) {

    } else {
        menu.classList.remove('navMobile')
        menuLinks.classList.remove("mobMenu");
    }
}
mediaMaxWidth450.addListener(mediaResponse)
mediaMaxWidth920.addListener(menuResponse)


if (window.matchMedia("(max-width: 430px)").matches) {
    for (let i = 0; i < 5; i++) {
        worksItems[i].style.display = 'none';
    }
} else {
    for (let i = 0; i < 5; i++) {
        worksItems[i].style.display = 'flex';
    }
}

