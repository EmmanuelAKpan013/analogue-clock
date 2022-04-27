const hoursEl = document.getElementById('hour');
const minutesEl = document.getElementById('minute');
const secondsEl = document.getElementById('second');
const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const toggle = document.getElementById('toggle');

toggle.addEventListener('click', () => {
  const html = document.querySelector('html');
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    toggle.innerHTML = 'Dark Mode';
  } else {
    html.classList.add('dark');
    toggle.innerHTML = 'Light Mode';
  }
});

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

setInterval(() => {
  const time = new Date();
  console.log(time);
  const day = time.getDay();
  const month = time.getMonth();
  const date = time.getDate();
  const year = time.getFullYear();
  const hour = time.getHours();
  const hourIn12Hour = hour % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ampm = hour > 12 ? 'PM' : 'AM';
  console.log(day, month);

  dateEl.innerHTML = `${days[day]}, ${date} ${months[month]}`;
  timeEl.innerHTML = `${hourIn12Hour < 10 ? `0${hour}` : hourIn12Hour}: ${
    minutes < 10 ? `0${minutes}` : minutes
  } ${ampm}`;

  console.log(hourIn12Hour);

  hoursEl.style.transform = `translate(-50%, -100%) rotate(${
    hourIn12Hour * 30
  }deg)`;

  minutesEl.style.transform = `translate(-50%, -100%) rotate(${
    minutes * 6
  }deg)`;

  secondsEl.style.transform = `translate(-50%, -100%) rotate(${
    seconds * 6
  }deg)`;
}, 1000);
