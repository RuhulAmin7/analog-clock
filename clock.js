const hourHand = document.querySelectorAll(".hand")[0];
const minuteHand = document.querySelectorAll(".hand")[1];
const secondHand = document.querySelectorAll(".hand")[2];

setInterval(clock, 1000);
function clock() {
  const date = new Date();

  //   const second = date.getSeconds();
  //   const minute = date.getMinutes();
  //   const hour = date.getHours();

  //   const secondRatio = (second / 60) * 360;
  //   const minuteRatio = ((second + minute) / 60) * 360;
  //   const hourdRatio = ((second + hour) / 12) * 360;

  //   secondHand.style.transform = `translate(-50%) rotate(${secondRatio}deg)`;
  //   minuteHand.style.transform = `translate(-50%) rotate(${minuteRatio}deg)`;
  //   hourHand.style.transform = `translate(-50%) rotate(${hourdRatio}deg)`;

  const second = date.getSeconds() / 60;
  const minute = (second + date.getMinutes()) / 60;
  const hour = (minute + date.getHours()) / 12;

  secondHand.style.transform = `translate(-50%) rotate(${second * 360}deg)`;
  minuteHand.style.transform = `translate(-50%) rotate(${minute * 360}deg)`;
  hourHand.style.transform = `translate(-50%) rotate(${hour * 360}deg)`;
}

clock();
