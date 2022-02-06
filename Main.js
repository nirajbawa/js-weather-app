let loc = document.getElementById("city")
let image = document.getElementById("img")
let temp = document.getElementById("tem")
let whename = document.getElementById("whename")
let query = document.getElementById("search")
let inte = document.getElementById("inte")


function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var strTime = hours;
  return strTime;
}


window.addEventListener("load", () => {

  let long;
  let lat;

  let form = formatAMPM(new Date);
  console.log(form);


  if (navigator.geolocation) {


    navigator.geolocation.getCurrentPosition((position) => {

      long = position.coords.longitude;
      lat = position.coords.latitude;
      const proxy = "https://cors-anywhere.herokuapp.com/";

      const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=130ace1fc10ddbbf672b273155bb2337`


      fetch(api).then((Response) => {
        return Response.json()
      })

        .then(data => {

          const { name } = data;
          const { feels_like } = data.main;
          const { id, main } = data.weather[0];

          loc.textContent = name;
          whename.textContent = main;
          temp.textContent = Math.round(feels_like - 273)
          console.log(id)

          if (form >= 5 && form <= 16) {
            if (id <= 800) {
              image.src = "../image/sun.svg"
            }
            if (id == 801) {
              image.src = "../image/clouds.svg"
            }
            if (id == 802) {
              image.src = "../image/Onlyclouds.svg"
            }
            if (id >= 803) {
              image.src = "../image/Blackclouds.svg"
            }
            if (id >= 300 && id <= 321) {
              image.src = "../image/Rainclouda.svg"
            }
            if (id >= 200 && id <= 232) {
              image.src = "../image/thunderstorm.svg"
            }
            if (id >= 500 && id <= 504) {
              image.src = "../image/snowy.svg"
            }
            if (id >= 600 && id <= 622) {
              image.src = "../image/snowflake.svg"
            }
            if (id >= 701 && id <= 622) {
              image.src = "../image/mist.svg"
            }
          }
          else if (form > 18 && form < 5) {
            if (id <= 800) {
              image.src = "../image/moon.svg"
            }
            if (id == 801) {
              image.src = "../image/haze.svg"
            }
            if (id == 802) {
              image.src = "../image/Onlyclouds.svg"
            }
            if (id >= 803) {
              image.src = "../image/Blackclouds.svg"
            }
            if (id >= 300 && id <= 321) {
              image.src = "../image/Rainclouda.svg"
            }
            if (id >= 200 && id <= 232) {
              image.src = "../image/thunderstorm.svg"
            }
            if (id >= 500 && id <= 504) {
              image.src = "../image/snowy.svg"
            }
            if (id >= 600 && id <= 622) {
              image.src = "../image/snowflake.svg"
            }
            if (id >= 701 && id <= 622) {
              image.src = "../image/mist.svg"
            }
          }



        })

    }

    )
  }

})