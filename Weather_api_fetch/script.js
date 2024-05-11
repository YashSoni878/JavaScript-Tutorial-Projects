const input = document.getElementById("city-input");
const btn = document.getElementById("search-btn");
const cityName = document.getElementById("city-name");
const cityTime = document.getElementById("city-time");
const cityTemp = document.getElementById("city-temp");

async function getData(cityName){
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=2687ca03729541b3855160735241105&q=${cityName}&aqi=yes`);
    return await response.json();
}

btn.addEventListener('click', async () => {
    const value = input.value;
    const data = await getData(value);
    cityName.innerText = `${data.location.name}, ${data.location.country}`;
    cityTime.innerText = data.location.localtime;
    cityTemp.innerText = data.current.temp_c;
});
