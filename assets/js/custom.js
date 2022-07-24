const slider = document.querySelector(".slider input");
const img = document.querySelector(".images .img-2");
const img2 = document.querySelector(".images .img-4");
const dragLine = document.querySelector(".slider .drag-line");
slider.oninput = () => {
  let sliderVal = slider.value;
  dragLine.style.left = sliderVal + "%";
  img.style.width = sliderVal + "%";
  img2.style.width = sliderVal + "%";
};
