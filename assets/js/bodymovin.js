// --------------------------Map--------------------------

lottie.loadAnimation({
  container: document.getElementById("imgMap"),
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "assets/json/mano/data.json",
  name: "map"
});

function ubicationMovin() {
  let container = $("#ubication");
  let heightTop = container.position().top;
  let scroll = $(window).scrollTop();
  let heightElem = container.height();
  if ((scroll > (heightTop - (heightElem * 2))) && (scroll < (heightTop + (heightElem)))) {
    lottie.play("map");
  } else {
    lottie.stop("map");
  }
}

lottie.loadAnimation({
  container: document.getElementById("imgMap2"),
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "assets/json/map/data.json",
  name: "map2"
});

function ubication2Movin() {
  let container = $("#ubication2");
  let heightTop = container.position().top;
  let scroll = $(window).scrollTop();
  let heightElem = container.height();
  if ((scroll > (heightTop - heightElem)) && (scroll < (heightTop + heightElem))) {
    lottie.play("map2");
  } else {
    lottie.stop("map2");
  }
}

$(window).on("scroll", function () {
  ubicationMovin()
  ubication2Movin()
});
