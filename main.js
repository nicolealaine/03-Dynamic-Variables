document.addEventListener("DOMContentLoaded", function (event) {
  const numSlider = document.querySelector(".num-slider");
  const bars = document.querySelectorAll(".bar");
  const sliderValueDisplay = document.querySelector(".slider-value");
  const bgColorPicker = document.querySelector(".background-color-picker");
  const bodyElement = document.querySelector("body");
  const circleColorPicker = document.querySelector(".circle-color-picker");
  const circleElement = document.querySelector(".circle");
  const barColorPicker = document.querySelector(".bar-color-picker");
  const angleLabel = document.querySelector(".angle-label-wrapper");
  const numDegreesDisplay = document.querySelector(".num-degrees");

  function changeNumWedges(num) {
    num = parseInt(num);
    var degDifference;
    sliderValueDisplay.innerHTML = num;
    bars.forEach((element) => {
      element.style.transform = " translateY(-50%) rotate(0)";
    });

    switch (num) {
      case 2:
        degDifference = 180;
        break;
      case 3:
        degDifference = 120;
        break;
      case 4:
        degDifference = 90;
        break;
      case 5:
        degDifference = 72;
        break;
      case 6:
        degDifference = 60;
        break;
      case 7:
        degDifference = 51.4;
        break;
      case 8:
        degDifference = 45;
        break;
      case 9:
        degDifference = 40;
        break;
      case 10:
        degDifference = 36;
        break;
      case 11:
        degDifference = 32.7;
        break;
      case 12:
        degDifference = 30;
        break;
      default:
        break;
    }
    angleLabel.style.transform = `rotate(${
      degDifference / 2 - 90
    }deg) translateX(8rem)`;
    numDegreesDisplay.innerHTML = degDifference;
    var deg = degDifference;
    for (i = 0; i < num; i++) {
      bars[i].style.transform = `translateY(-50%) rotate(${degDifference}deg)`;
      bars[i].style.transformOrigin = `bottom`;
      degDifference += deg;
    }
  }

  function changeBackgroundColor(color) {
    bodyElement.style.backgroundColor = color;
  }
  function changeCircleColor(color) {
    circleElement.style.backgroundColor = color;
  }
  function changeBarColor(color) {
    bars.forEach((element) => {
      element.style.backgroundColor = color;
    });
  }

  numSlider.oninput = function () {
    changeNumWedges(this.value);
  };

  bgColorPicker.oninput = function () {
    changeBackgroundColor(this.value);
  };

  barColorPicker.oninput = function () {
    changeBarColor(this.value);
  };

  circleColorPicker.oninput = function () {
    changeCircleColor(this.value);
  };
});
