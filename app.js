const deadline = document.querySelector(".deadline");
const deadlineFormat = document.querySelectorAll(".deadline-format h2");

const tempDate =  new Date();
const getYear = tempDate.getFullYear();

const xmasDate = new Date(getYear, 11, 25, 00, 00);
const xmasTime = xmasDate.getTime();

function getRemainingTime() {
  const currentDate = new Date();
  const currentTime = currentDate.getTime();
  const timeDifference = xmasTime - currentTime;
  const oneSec = 1000;
  const oneMin = 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneDay = 24 * 60 * 60 * 1000;
  const days = Math.floor(timeDifference / oneDay);
  const hours = Math.floor((timeDifference % oneDay) / oneHour);
  const mins = Math.floor((timeDifference % oneHour) / oneMin);
  const secs = Math.floor((timeDifference % oneMin) / oneSec);
  const arr = [days, hours, mins, secs];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  deadlineFormat.forEach(function (item, index) {
    item.textContent = format(arr[index]);
  });

  if (timeDifference < 0) {
    clearInterval(countdown);
    deadline.classList.add("cover");
    deadline.innerHTML = `<h3>Hey, Merry Christmas & Happy New Year!!!</h3>`;
  }
}

const countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
