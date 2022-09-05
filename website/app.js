/* Global Variables */
const serverUrl = 'http://localhost:4000/'
const apiKey = '9dc56af329d5c4631f44fb60439ca893&units=imperial';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

//erorr messagey
//const errorMessage = (error) => console.error('their is error in : ' , error);
const errorMessage = document.getElementById("errorMessage");


// first should get all ElementById to make it easier for me to use
const generateButton = document.getElementById("generate");
const openWeatherdate = document.getElementById('date');
const openWeatherTemp = document.getElementById('temp');
const openWeatherFeelings = document.getElementById('feelings');

// Second should get data from openweathermap api
const getOpenWeatherData = generateButton.addEventListener('click' , async ()=>{
                         const openWeatherZioCode = document.getElementById('zip').value;
                         const baseURL = `https://api.openweathermap.org/data/2.5/weather?zip=${openWeatherZioCode}&appid=${apiKey}`;
                         const apiRes = await fetch(baseURL).then(res => res.json());
                         console.log(apiRes);
                         const getOpenWeatherTemp = await apiRes.main.temp;
                         console.log(getOpenWeatherTemp);

// Third should Post data from openweathermap api to server 
                          await fetch('/add' , {
                            method:'POST',
                            credentials:'same-origin',
                            headers:
                            {
                                'Content-Type':'application/json'
                            },
                            body:JSON.stringify
                            ({
                                newDate:newDate,
                                temp:temp,
                                feelings:feelings

                            })
                          })

// Forth should display data from server to app
const displayData = await fetch('/all').then(res => res.json());
                    openWeatherdate.innerHTML=displayData.date;
                    openWeatherTemp.innerHTML=displayData.temp;
                    openWeatherFeelings.innerHTML=displayData.feelings;
})

