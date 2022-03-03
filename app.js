const API_KEY =`58cf9dd1b803485bf3014d264e77d1bc`;

const sraechTemparature= () =>{
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    
    fetch(url)
    .then(res => res.json())
    .then(data=>displayTemparature(data));
}

const displayTemparature =(temparature)=>{
    console.log(temparature);
}