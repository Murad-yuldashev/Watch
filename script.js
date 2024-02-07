let secondHand = document.querySelector('.second-hand'),
    minHand = document.querySelector('.hour-hand'),
    hourHand = document.querySelector('.min-hand');

let calcDegree = () => {

    let second = new Date().getSeconds();
    let min = new Date().getMinutes();
    let hour = new Date().getHours()

    let secondsDegree = (second / 60 * 360) + 90;
    let minDegree = (min / 60 * 360) + 90;
    let hourDegree = (hour / 12 * 360) + 90;

    
    secondHand.style.transform = `rotate(${secondsDegree}deg)`
    minHand.style.transform = `rotate(${minDegree}deg)`
    hourHand.style.transform = `rotate(${hourDegree}deg)`

    console.log(hourDegree);
}

setInterval(calcDegree, 1000)