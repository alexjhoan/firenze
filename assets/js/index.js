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
  },10)
}
