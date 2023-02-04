const result = document.querySelectorAll("p");

const getTime = () => {
  let date = new Date();
  //   console.log(date);
  let hour = date.getHours();
  //   console.log(hour);
  let minute = date.getMinutes();
  //   console.log(minute);
  let sec = date.getSeconds();
  //   console.log(sec);

  const dates = [hour, minute, sec];
  Array.from(result).forEach((item, index) => {
    dates[index] = dates[index] < 10 ? "0" + dates[index] : dates[index];

    item.innerText = dates[index];
  });
};

setInterval(() => {
  getTime();
}, 1000);
