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

