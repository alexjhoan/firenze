// -------------------------------navbar------------------------------

function link(linkTo) {
 event.preventDefault()
 $(`.navbar-collapse.collapse.show`).removeClass("show");
 let container = $(`#${linkTo}`).offset().top;
 let heightNavBar = $(`#navbar`).height();
 let to = container - heightNavBar
 window.scrollTo(0, to);
}

// ------------------------------Carousel-----------------------------

const galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 20,
  slidesPerView: 7,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
const galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: galleryThumbs
  }
});

 var ubication3 = new Swiper('.swiper-ubication2', {
  autoHeight: true,
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
// ------------------------------Form-----------------------------

function dataSubmited(data) {
  const requestOptions = {
    method: 'POST',
    body: data,
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
    },
  };
  fetch("https://www.infocasas.com.uy/proyectos/torre-firenze?&formulario=1&json=1", requestOptions)
  .then((json) => {
    setTimeout(()=>{
      if (json.status === 200) {
        $('#formSuccess').fadeIn();
      } else {
        $('#formError').fadeIn();
      }
      $('#formSending').hide();
    }, 2000)
  })
  .catch(error => {
    console.log('error', error);
    setTimeout(() => {
      $('#formSending').hide();
      $('#formError').fadeIn();
    }, 2000)
  });
}

function submited() {
 'use strict'
  const form = document.querySelector('#contactForm')
  const data = JSON.stringify({
    nombre: form.name.value,
    apellido: "",
    email: form.email.value,
    telefono: form.phone.value,
    tel: form.phone.value,
    source: 2,
    utm_source: "web_firenze",
    extra: form.consult.value,
    InfoLeads: 1,
    IDflow_execution: 4315
  })
  if (!form.checkValidity()) {
    event.preventDefault()
    event.stopPropagation()
  }else{
    dataSubmited(data)
    setTimeout(()=>{
      $(form).fadeOut();
      $('#formSending').fadeIn();
    },300)
  }
  form.classList.add('was-validated')
}

// ------------------------------img-edf-units----------------------------

function click(id) {
  $(".activeLevel").removeClass("activeLevel");
  $(".activeText").removeClass("activeText");
  setTimeout(() => {
    $(`#${id}`).addClass("activeLevel");
    $(`.${id}`).addClass("activeText");
    $("#changeImg").attr("src",`assets/images/plantas/${id}.png`)
    $("#changeImgUrl").attr("href",`assets/images/plantas/${id}.png`)
  },10)
}

$(document).ready(function() {
  $("#changeImgUrl").fancybox({
    overlay : {
      closeClick : true,
    }
  });
})


// ------------------------------animated-css----------------------------

function project() {
  let container = $("#project");
  let heightTop = container.position().top;
  let scroll = $(window).scrollTop();
  let heightWindow = $(window).height() / 1.7;
  if (scroll > (heightTop - heightWindow)) {
    $("#project .aniLe").addClass("animate__fadeInLeft")
    $("#project .aniRi").addClass("animate__fadeInRight")
  }
}

function presale() {
  let container = $("#presale");
  let heightTop = container.position().top;
  let scroll = $(window).scrollTop();
  let heightWindow = $(window).height() / 1.7;
  if (scroll > (heightTop - heightWindow)) {
    $("#presale .aniUp").addClass("animate__fadeInUp")
  }
}

function ubication() {
  let container = $("#ubication");
  let heightTop = container.position().top;
  let scroll = $(window).scrollTop();
  let heightWindow = $(window).height() / 1.7;
  if (scroll > (heightTop - heightWindow)) {
    $("#ubication .aniLe").addClass("animate__fadeInLeft")
  }
}

function ubication2() {
  let container = $("#ubication2");
  let heightTop = container.position().top;
  let scroll = $(window).scrollTop();
  let heightWindow = $(window).height() / 1.7;
  if (scroll > (heightTop - heightWindow)) {
    $("#ubication2 .aniRi").addClass("animate__fadeInRight")
  }
}

function units() {
  let container = $("#units");
  let heightTop = container.position().top;
  let scroll = $(window).scrollTop();
  let heightWindow = $(window).height() / 1.7;
  if (scroll > (heightTop - heightWindow)) {
    $("#units .aniLe").addClass("animate__fadeInLeft")
    $("#units .aniRi").addClass("animate__fadeInRight")
    $("#units .aniUp").addClass("animate__fadeInUp")
    $("#units .aniDo").addClass("animate__fadeInDown")
  }
}

function unitsCarousel() {
  let container = $("#unitsCarousel");
  let heightTop = container.position().top;
  let scroll = $(window).scrollTop();
  let heightWindow = $(window).height() / 1.7;
   if (scroll > (heightTop - heightWindow)) {
    $("#unitsCarousel .aniLe").addClass("animate__fadeInLeft")
    $("#unitsCarousel .aniRi").addClass("animate__fadeInRight")
  }
}

function amenities() {
  let container = $("#amenities");
  let heightTop = container.position().top;
  let scroll = $(window).scrollTop();
  let heightWindow = $(window).height() / 1.7;
  if (scroll > (heightTop - heightWindow)) {
    $("#amenities .aniUp").addClass("animate__fadeInUp")
    $("#amenities .aniDo").addClass("animate__fadeInDown")
  }
}

function amenities2() {
  let container = $("#amenities .level5");
  let heightTop = container.offset().top;
  let scroll = $(window).scrollTop();
  let heightWindow = $(window).height() / 1.7;
  if (scroll > (heightTop - heightWindow)) {
    $("#amenities .level5.aniLe").addClass("animate__fadeInLeft")
    $("#amenities .level5.aniRi").addClass("animate__fadeInRight")
  }
}

function amenities3() {
  let container = $(".level8");
  let heightTop = container.offset().top;
  let scroll = $(window).scrollTop();
  let heightWindow = $(window).height() / 1.7;
  if (scroll > (heightTop - heightWindow)) {
    $(".level8.aniLe").addClass("animate__fadeInLeft")
    $(".level8.aniRi").addClass("animate__fadeInRight")
  }
}

function us() {
  let container = $("#us");
  let heightTop = container.position().top;
  let scroll = $(window).scrollTop();
  let heightWindow = $(window).height() / 1.7;
  if (scroll > (heightTop - heightWindow)) {
    $("#us .aniUp").addClass("animate__fadeInUp")
  }
}

function projectUs() {
  let container = $("#projectUs");
  let heightTop = container.position().top;
  let scroll = $(window).scrollTop();
  let heightWindow = $(window).height() / 1.7;
  if (scroll > (heightTop - heightWindow)) {
    $("#projectUs .aniIn").addClass("animate__fadeIn")
    $("#projectUs .aniUp").addClass("animate__fadeInUp")
    $("#projectUs .aniDo").addClass("animate__fadeInDown")
  }
}

function contact() {
  let container = $("#contact");
  let heightTop = container.position().top;
  let scroll = $(window).scrollTop();
  let heightWindow = $(window).height() / 1.7;
  if (scroll > (heightTop - heightWindow)) {
    $("#contact .aniLe").addClass("animate__fadeInLeft")
    $("#contact .aniRi").addClass("animate__fadeInRight")
  }
}

// ------------------------------controls-scroll----------------------------


$(window).on("scroll", function () {
  project()
  presale()
  ubication()
  ubication2()
  units()
  unitsCarousel()
  amenities()
  amenities2()
  amenities3()
  us()
  projectUs()
  contact()
});


var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['Vendido', 'No Vendido'],
        datasets: [{
            label: ['40%','60%'],
            backgroundColor: ['#569894','#cecece'],
            borderColor: '#cecece',
            borderWidth: 0,
            data: [40,60],
        }]
    },

    // Configuration options go here
    options: {
      cutoutPercentage: 65,
      tooltips: false,
        legend: {
            display: false,
        }
    }
});

