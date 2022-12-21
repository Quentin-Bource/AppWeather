//api.openweathermap.org/data/2.5/forecast?q=London&appid=d6972f200ed637ee7fd868fe68f3bf7e


async function catchData()
{
    let tmp = JSON.parse(localStorage.getItem("response"));
    //const response = await fetch(
    //   'https://api.openweathermap.org/data/2.5/forecast?q=London&appid=d6972f200ed637ee7fd868fe68f3bf7e',
    //   {
    //       method: 'GET'
    //    }
    // );
    //let stock = await response.json();
    let stock = tmp;
    console.log(stock);
    localStorage.setItem('response', JSON.stringify(stock));
} 

document.getElementById('check').addEventListener('click',catchData)