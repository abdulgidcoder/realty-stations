import jQuery from "jquery";
import "bootstrap";
// core version + navigation, pagination modules:
import Swiper from "swiper";
import { Navigation, Pagination , Autoplay} from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@/assets/scss/app.scss";

(function ($) {
  setTimeout(() => {
    document.getElementById("app-loader").style.display = "none";
  }, 800);
})(jQuery);

// init Swiper:
const slideshow = new Swiper(".slideshow .swiper", {
  slidesPerView: 1,
  autoplay: {
    delay: 2500,
  },
  loop: true,
  navigation: {
    nextEl: ".slideshow .swiper-button-next",
    prevEl: ".slideshow .swiper-button-prev",
  },
  modules: [Navigation, Autoplay],
});
const projects = new Swiper(".featured-projects .swiper", {
  slidesPerView: 1,
  spaceBetween: 25,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: ".featured-projects .swiper-button-next",
    prevEl: ".featured-projects .swiper-button-prev",
  },
  modules: [Navigation],
});

const partners = new Swiper(".partners-section .swiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
    1400: {
      slidesPerView: 6,
    },
  },
  navigation: {
    nextEl: ".partners-section .swiper-button-next",
    prevEl: ".partners-section .swiper-button-prev",
  },
  pagination: {
    el: ".partners-section .swiper-pagination",
    clickable: true,
  },
  modules: [Navigation, Pagination],
});

const slideshowProject = new Swiper(".slideshow-project .swiper", {
  slidesPerView: 1,
  autoplay: {
    delay: 2500,
  },
  navigation: {
    nextEl: ".slideshow-project .swiper-button-next",
    prevEl: ".slideshow-project .swiper-button-prev",
  },
  pagination: {
    el: ".slideshow-project .swiper-pagination",
    clickable: true,
  },
  modules: [Navigation, Pagination, Autoplay],
});

// Function to load Google Maps API script dynamically
function loadGoogleMapsAPI(callback) {
  if (document.querySelector(`script[src*="maps.googleapis.com"]`)) return; // Prevent multiple loads
  const mapContainer = document.querySelector(".google-map");
  if (!mapContainer) return;
  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=${
    import.meta.env.VITE_GOOGLE_MAPS_API_KEY
  }&callback=${callback}`;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
}

// Function to initialize the map
const  initMap = ()=>{
  const mapContainer = document.querySelector(".google-map");
  if (!mapContainer) return;

  // Get coordinates from data attributes
  const lat = parseFloat(mapContainer.getAttribute("data-map-lat"));
  const lng = parseFloat(mapContainer.getAttribute("data-map-lng"));
  const location = { lat, lng }; 
  const map = new google.maps.Map(mapContainer, {
    zoom: 18,
    center: location,
  });
 
  const customIcon = {
    url: "assets/images/favicon.png",  
    scaledSize: new google.maps.Size(50, 50),
  };

  new google.maps.Marker({
    position: location,
    map: map,
    icon: customIcon,
  });
}

loadGoogleMapsAPI("initMap");
window.initMap = initMap;

 loadGoogleMapsAPI("initMap");

 