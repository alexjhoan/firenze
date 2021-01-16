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

// ------------------------------Form-----------------------------

function dataSubmited(data) {
  const requestOptions = {
    method: 'POST',
    body: data,
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
    },
  };

  const form = document.querySelector('#contactForm')

  fetch("https://prod.infocasas.com.uy/apps/iris/register.php", requestOptions)
  .then((response) => response.json())
  // .then((json) => {
  //   if (json.status === "ok") {
  //     $('#formSuccess').fadeIn();
  //   } else {
  //     $('#formError').fadeIn();
  //   }
  //   $('#formSignUp').hide();
  // })
  .catch(error => {
    console.log('error', error);
    $('#formSignUp').hide();
    $('#formError').fadeIn();
  });
}

function submited() {
 'use strict'
  const form = document.querySelector('#contactForm')
  if (!form.checkValidity()) {
    event.preventDefault()
    event.stopPropagation()
    console.log('error')

  }else{
    //dataSubmited(data)
    console.log('enviado')
  }
  form.classList.add('was-validated')
}

// ------------------------------img-edf-units----------------------------

function click(id) {
  console.log(id);
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
  let heightElem = container.height();
  if (scroll > (heightTop - (heightElem / 2.5))) {
    $("#project .aniLe").addClass("animate__fadeInLeft")
    $("#project .aniRi").addClass("animate__fadeInRight")
  }
}

function presale() {
  let container = $("#presale");
  let heightTop = container.position().top;
  let scroll = $(window).scrollTop();
  let heightElem = container.height();
  if (scroll > (heightTop - heightElem)) {
    $("#presale .aniUp").addClass("animate__fadeInUp")
  }
}

function ubication() {
  let container = $("#ubication");
  let heightTop = container.position().top;
  let scroll = $(window).scrollTop();
  let heightElem = container.height();
  if (scroll > (heightTop - heightElem)) {
    $("#ubication .aniLe").addClass("animate__fadeInLeft")
  }
}

function ubication2() {
  let container = $("#ubication2");
  let heightTop = container.position().top;
  let scroll = $(window).scrollTop();
  let heightElem = container.height();
  if (scroll > (heightTop - (heightElem / 1.5))) {
    $("#ubication2 .aniRi").addClass("animate__fadeInRight")
  }
}

function units() {
  let container = $("#units");
  let heightTop = container.position().top;
  let scroll = $(window).scrollTop();
  let heightElem = container.height();
  if (scroll > (heightTop - (heightElem / 2.5))) {
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
  let heightElem = container.height();
  if (scroll > (heightTop - (heightElem / 1.5))) {
    $("#unitsCarousel .aniLe").addClass("animate__fadeInLeft")
    $("#unitsCarousel .aniRi").addClass("animate__fadeInRight")
  }
}

function amenities() {
  let container = $("#amenities");
  let heightTop = container.position().top;
  let scroll = $(window).scrollTop();
  let heightElem = container.height();
  if (scroll > (heightTop - (heightElem / 2.5))) {
    $("#amenities .aniLe").addClass("animate__fadeInLeft")
    $("#amenities .aniRi").addClass("animate__fadeInRight")
    $("#amenities .aniUp").addClass("animate__fadeInUp")
    $("#amenities .aniDo").addClass("animate__fadeInDown")
  }
}

function us() {
  let container = $("#us");
  let heightTop = container.position().top;
  let scroll = $(window).scrollTop();
  let heightElem = container.height();
  if (scroll > (heightTop - (heightElem / 2.5))) {
    $("#us .aniUp").addClass("animate__fadeInUp")
  }
}

function projectUs() {
  let container = $("#projectUs");
  let heightTop = container.position().top;
  let scroll = $(window).scrollTop();
  let heightElem = container.height();
  if (scroll > (heightTop - (heightElem / 1.5))) {
    $("#projectUs .aniIn").addClass("animate__fadeIn")
    $("#projectUs .aniUp").addClass("animate__fadeInUp")
    $("#projectUs .aniDo").addClass("animate__fadeInDown")
  }
}

function contact() {
  let container = $("#contact");
  let heightTop = container.position().top;
  let scroll = $(window).scrollTop();
  let heightElem = container.height();
  if (scroll > (heightTop - (heightElem / 1.5))) {
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
  us()
  projectUs()
  contact()
});

