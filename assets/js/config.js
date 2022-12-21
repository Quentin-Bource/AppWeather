//api.openweathermap.org/data/2.5/forecast?q=London&appid=d6972f200ed637ee7fd868fe68f3bf7e
let stock;
let allTimes = [];

async function catchData()
{
    let tmp = JSON.parse(localStorage.getItem("response"));
    //const response = await fetch(
     //  'https://api.openweathermap.org/data/2.5/forecast?q=London&appid=d6972f200ed637ee7fd868fe68f3bf7e&units=metric',
     //  {
      //     method: 'GET'
      //  }
    // );
    //let stock = await response.json();
    stock = tmp;
    console.log(stock);
    localStorage.setItem('response', JSON.stringify(stock));
    allTimes = stock.list;
    console.log(" " + allTimes[0].dt_txt + " " +  allTimes[0].main.temp + " " + allTimes[0].weather[0].description + " " + stock.city.name);

} 

catchData()


function createTime() {

    let date = new Date (allTimes[0].dt_txt)
    console.log(date.getDate())

    //div complete
   let newDiv = document.createElement('div')
   newDiv.classList.add('weather')
   document.getElementById('main').appendChild(newDiv)

    //h2 Nom de la ville
   let newCity = document.createElement('h2')
   newCity.classList.add('nameCity')
   newCity.appendChild(document.createTextNode(stock.city.name))
   newDiv.appendChild(newCity)

   // temperature actuelle + date
   let newTemp = document.createElement('div')
   newTemp.classList.add('tempToday')
   newTemp.appendChild(document.createTextNode(allTimes[0].dt_txt.split('-')[2].split(' ')[0] + '/' + allTimes[0].dt_txt.split('-')[1]+ " " + allTimes[0].main.temp.toFixed(0) + '°C'))
   newDiv.appendChild(newTemp)

   // les 5 prochain jour tout
   let newDay = document.createElement('div')
   newDay.classList.add('alltemp')
   newDiv.appendChild(newDay)

   // 1 jour
   let newDay1 = document.createElement('div')
   newDay1.classList.add('temp1')
   newDay.appendChild(newDay1)

      //2 jour
      let newDay2 = document.createElement('div')
      newDay2.classList.add('temp2')
      newDay.appendChild(newDay2)
   
       //3jour
      let newDay3 = document.createElement('div')
      newDay3.classList.add('temp3')
      newDay.appendChild(newDay3)
   
      //4jour
      let newDay4 = document.createElement('div')
      newDay4.classList.add('temp4')
      newDay.appendChild(newDay4)
   
      //5jour
      let newDay5 = document.createElement('div')
      newDay5.classList.add('temp5')
      newDay.appendChild(newDay5)

    //Creation des différentes temperature de la semaine am/pm

   for (let elem of allTimes) {
    let newDate = new Date (elem.dt_txt)
    let jourSem = ['Dim' , 'Lun' , 'Mar' , 'Mer' , 'Jeu' , 'Ven' , 'Sam']

    if (newDate.getDate() == (date.getDate()+1) && newDate.getHours() == 6) {

        newDay1.appendChild(document.createTextNode(jourSem[newDate.getDay()] + ' '))
        newDay1.appendChild(document.createTextNode(elem.main.temp.toFixed(0) + " °C "))
    }
    else if (newDate.getDate() == (date.getDate()+1) && newDate.getHours() == 15){

        newDay1.appendChild(document.createTextNode(elem.main.temp.toFixed(0) + " °C "))
    }
     else if (newDate.getDate() == (date.getDate()+2) && newDate.getHours() == 6) {
        newDay2.appendChild(document.createTextNode(jourSem[newDate.getDay()] + ' '))
        newDay2.appendChild(document.createTextNode(elem.main.temp.toFixed(0) + " °C "))
    }
    else if (newDate.getDate() == (date.getDate()+2) && newDate.getHours() == 15){

        newDay2.appendChild(document.createTextNode(elem.main.temp.toFixed(0) + " °C "))
    }

    else if (newDate.getDate() == (date.getDate()+3) && newDate.getHours() == 6) {
        newDay3.appendChild(document.createTextNode(jourSem[newDate.getDay()] + ' '))
        newDay3.appendChild(document.createTextNode(elem.main.temp.toFixed(0) + " °C "))
    }
    else if (newDate.getDate() == (date.getDate()+3) && newDate.getHours() == 15){

        newDay3.appendChild(document.createTextNode(elem.main.temp.toFixed(0) + " °C "))
    }

    else if (newDate.getDate() == (date.getDate()+4) && newDate.getHours() == 6) {
        newDay4.appendChild(document.createTextNode(jourSem[newDate.getDay()] + ' '))
        newDay4.appendChild(document.createTextNode(elem.main.temp.toFixed(0) + " °C "))
    }
    else if (newDate.getDate() == (date.getDate()+4) && newDate.getHours() == 15){

        newDay4.appendChild(document.createTextNode(elem.main.temp.toFixed(0) + " °C "))
    }
    else if (newDate.getDate() == (date.getDate()+5) && newDate.getHours() == 6) {
        newDay5.appendChild(document.createTextNode(jourSem[newDate.getDay()] + ' '))
        newDay5.appendChild(document.createTextNode(elem.main.temp.toFixed(0) + " °C "))
    }
    else if (newDate.getDate() == (date.getDate()+5) && newDate.getHours() == 15){

        newDay5.appendChild(document.createTextNode(elem.main.temp.toFixed(0) + " °C "))

    }
    
   }



}
document.getElementById('check').addEventListener('click',createTime)

function bgCity() {

    if(allTimes[0]) {
        document.getElementsByClassName('weather').style.backgroundColor = 'red'
    }
    console.log(allTimes[0])
}