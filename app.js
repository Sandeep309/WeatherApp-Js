const mylocation = document.querySelector(".mylocation");
const temp = document.querySelector(".temprature");
const celcius = document.querySelector(".celcius");
const climate = document.querySelector(".climate");
const tempIcon = document.querySelector(".tempIcon");

const apiKey = "632c8f68bce80284a9943e8a28aa9cc8";
window.addEventListener("load", () => {
  const searchInput = document.querySelector(".searchInput");
  celcius.style.display = "none";
  searchInput.value = "";
  let long;
  let lat;
  let id;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      // console.log("long", long, "lat", lat);

      const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`;

      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          mylocation.textContent = data.name;
          temp.textContent = Math.round(data.main.feels_like - 273);
          celcius.style.display = "block";
          climate.textContent = data.weather[0].main;
          id = data.weather[0].id;

          if (id < 250) {
            tempIcon.src = "./icons/storm.svg";
          }
          if (id < 350) {
            tempIcon.src = "./icons/drizzle.svg";
          }
          if (id < 650) {
            tempIcon.src = "./icons/snow.svg";
          }
          if (id < 550) {
            tempIcon.src = "./icons/rain.svg";
          }
          if (id < 800) {
            tempIcon.src = "./icons/atmosphere.svg";
          }
          if (id === 800) {
            tempIcon.src = "./icons/sun.svg";
          }
          if (id > 800) {
            tempIcon.src = "./icons/clouds.svg";
          }

          // console.log(data);
        })
        .catch(() => {
          alert("Please search for a valid city 😩");
        });
    });
  }
});

// By Search
const searchBtn = document.querySelector(".searchBtn");
searchBtn.addEventListener("click", () => {
  const searchValue = document.querySelector(".searchInput").value;
  // console.log(searchValue);

  const searchApi = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${apiKey}`;
  fetch(searchApi)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      mylocation.textContent = data.name;
      temp.textContent = Math.round(data.main.feels_like - 273);
      climate.textContent = data.weather[0].main;
      id = data.weather[0].id;

      if (id < 250) {
        tempIcon.src = "./icons/storm.svg";
      }
      if (id < 350) {
        tempIcon.src = "./icons/drizzle.svg";
      }
      if (id < 650) {
        tempIcon.src = "./icons/snow.svg";
      }
      if (id < 550) {
        tempIcon.src = "./icons/rain.svg";
      }
      if (id < 800) {
        tempIcon.src = "./icons/atmosphere.svg";
      }
      if (id === 800) {
        tempIcon.src = "./icons/sun.svg";
      }
      if (id > 800) {
        tempIcon.src = "./icons/clouds.svg";
      }

      // console.log(data);
    })
    .catch(() => {
      alert("Please search for a valid city 😩");
    });
});
