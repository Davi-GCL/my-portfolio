/*!
=========================================================
* JohnDoe Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function () {
  $(".navbar .nav-link").on('click', function (event) {

    if (this.hash !== "") {

      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 700, function () {
        window.location.hash = hash;
      });
    }
  });
});

// protfolio filters
$(window).on("load", function () {
  var t = $(".portfolio-container");
  t.isotope({
    filter: ".general",
    animationOptions: {
      duration: 750,
      easing: "linear",
      queue: !1
    }
  }), $(".filters a").click(function () {
    $(".filters .active").removeClass("active"), $(this).addClass("active");
    var i = $(this).attr("data-filter");
    return t.isotope({
      filter: i,
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: !1
      }
    }), !1
  });
});


// google maps
function initMap() {
  // Styles a map in night mode.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 40.674, lng: -73.945 },
    zoom: 12,
    scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
    styles: [
      { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
      { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
      { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{ color: '#263c3f' }]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#6b9a76' }]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{ color: '#38414e' }]
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#212a37' }]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#9ca5b3' }]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{ color: '#746855' }]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#1f2835' }]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#f3d19c' }]
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{ color: '#2f3948' }]
      },
      {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ color: '#17263c' }]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#515c6d' }]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{ color: '#17263c' }]
      }
    ]
  });
}

// years of experience counter 
$(document).ready(function () {
  const startDate = new Date(2022, 10, 20);
  const currentDate = new Date();

  let timeDiff = currentDate - startDate;
  let yearsAmount = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365.25));

  $('#experiencedYearsCount').text(yearsAmount);
});

// portfolio galery
const portfolio = document.querySelector(".portfolio-container");

const projects = [
  {
    title: 'Blog Readus',
    desc: 'Rede social voltada para publicações relacionada a tecnologia',
    tag: 'web',
    img: 'angular_blog.jpg'
  },
  {
    title: 'Plataforma WomenTech',
    desc: 'Aplicação web desenvolvida utilizando Bootstrap5, NodeJs, Express',
    tag: 'web',
    img: 'womentech.jpg'
  },
  {
    title: 'Site de uma Consultoria de RH',
    desc: 'Site desenvolvido utilizando Bootstrap',
    tag: 'web',
    img: 'ch.jpg'
  },
  {
    title: 'Calculadora JS',
    desc: 'Projeto web realizado para praticar os meus conhecimentos em JavaScript, HTML e CSS',
    tag: 'web',
    img: 'calculadora.jpg'
  },
  {
    title: 'Todo List',
    desc: 'Projeto web realizado para praticar os meus conhecimentos em JavaScript, HTML e CSS',
    tag: 'web',
    img: 'todo_list.jpg'
  },
  {
    title: 'Site da Startup FB1T',
    desc: 'Projeto web desenvolvido em equipe no curso de Desenvolvimento de Sistemas',
    tag: 'web',
    img: 'FB1T.jpg'
  },
  {
    title: 'Site da Incubadora _FbTech',
    desc: 'Projeto web desenvolvido em equipe no curso de Desenvolvimento de Sistemas',
    tag: 'web',
    img: 'fbtech.jpg'
  },
  {
    title: 'Mecanismo de busca Python e Flask',
    desc: 'Projeto web desenvolvido em equipe no curso de Desenvolvimento de Sistemas',
    tag: 'web',
    img: 'busca_flask.jpg'
  },
  {
    title: 'Show do Milhão',
    desc: 'Jogo desenvolvido em equipe, utilizando a linguagem C',
    tag: 'app',
    img: 'show.jpg'
  },
];

projects.forEach((project) => {
  let { title, desc, tag, img } = project;

  portfolio.innerHTML += `<div class="col-md-6 col-lg-4 general ${tag}">
                        <div class="portfolio-item">
                            <img src="assets/imgs/projects/${img}" class="img-fluid" alt="Imagem do projeto ${title}">
                            <div class="content-holder">
                                <a class="img-popup" href="assets/imgs/projects/${img}"></a>
                                <div class="text-holder">
                                    <h6 class="title">${title}</h6>
                                    <p class="subtitle">${desc} </p>
                                </div>
                            </div>   
                        </div>             
                    </div>`
    ;
})

