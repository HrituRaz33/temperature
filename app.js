const API_KEY =`58cf9dd1b803485bf3014d264e77d1bc`;

const sraechTemparature= () =>{
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    
    fetch(url)
    .then(res => res.json())
    .then(data=>displayTemparature(data));
}

const setInnerText =(id , text) =>{
    document.getElementById(id).innerText =text;
}

const displayTemparature =(temperature)=>{
    setInnerText('city', temperature.name);
    setInnerText('temperature', temperature.main.temp);
    setInnerText('temperature-condition', temperature.weather[0].main);
    //set weather icon
    const url = `https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png` ;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src' , url);
}