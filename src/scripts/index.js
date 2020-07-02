// The following line makes sure your styles are included in the project. Don't remove this.
// import '../styles/main.scss';
// Import any additional modules you want to include below \/


// \/ All of your javascript should go here \/

const deadline = new Date('Juli 17, 2020 00:00:00').getTime();

let time = setInterval(() => {
    const daysEl = document.querySelector('.days span');
    const hoursEl = document.querySelector('.hours span');
    const minutesEl = document.querySelector('.minutes span');
    const secondsEl = document.querySelector('.seconds span');

    let now = new Date().getTime();
    let distance = deadline - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;

}, 1000);