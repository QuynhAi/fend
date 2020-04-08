/* Global Variables */
// 'api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={your api key}'
let baseUrl = 'https://www.api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '26660429b6fea85fec7bc8d0b05f6555';

document.getElementById('generate').addEventListener('click', performAction);

function performAction(){
    const zipcode =  document.getElementById('zip').value;
    const feeling =  document.getElementById('feelings').value;
    getDate(zipcode)
    .then(function(data){
        postData('/weather', {temp: data.main.temp, content: data.weather[0].description});
    }).then(updateUI())
}


const getDate = async(zipcode)=>{ 
    const url = baseUrl + zipcode + ",us&appid=" + apiKey;
    const res = await fetch(url);
    try{
        const data = await res.json();
    }catch(error){
        console.log(error);
    }
}


const postData = async(url='', data={})=>{
    const res = await fetch(url,{
        method: 'POST',
        credentials: 'same-origin',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
    });
    console.log('Reach middle of client post data');
    //2.
    try{
        const newData = await res.json();
        console.log('In client post data',newData);

        return newData;
    }catch(error){
        console.log(`error ${error}`);
    }
}

const updateUI = async () => {
    let d = new Date();
    let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
    const request = await fetch('/all');
    try{
      const allData = await request.json();
      console.log('In update UI',allData);
      document.getElementById('date').innerHTML = newDate;
      document.getElementById('temp').innerHTML = allData.temp;
      document.getElementById('content').innerHTML = allData.content; 
    }catch(error){
      console.log("error", error);
    }
  }