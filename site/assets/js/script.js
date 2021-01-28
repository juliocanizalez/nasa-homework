const KEY = 'PfiUDKrZ2OcdQLZqVdBfb656Hb0aWLu6zDXedMZ8';
const URL = 'https://api.nasa.gov/planetary/earth/assets?';
var imgUrl;


let textfield = document.getElementById("text");

textfield.addEventListener("keydown", (e) => {
    if (e.keyCode===13) {
        
        let string = document.getElementById("text").value;
        console.log(string)

        let values = string.split(',');
        
        let longitude = values [0];
        let latitude = values[1];

        fetch(`${URL}lon=${longitude}&lat=${latitude}&date=2018-01-01&dim=0.05&api_key=${KEY}`)
        .then(response=> response.json())
        .then(data => {
            document.getElementById("img").innerHTML = `<img src="${data.url}" class="img-fluid"></img>`;
        })

        
    }
})