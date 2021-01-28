const KEY = 'PfiUDKrZ2OcdQLZqVdBfb656Hb0aWLu6zDXedMZ8';
const URL = 'https://api.nasa.gov/planetary/earth/assets?';
var imgUrl;


let textfield = document.getElementById("text");

textfield.addEventListener("keydown", (e) => {
    if (e.keyCode===13) {
        
        let string = document.getElementById("text").value;

        let values = string.split(',');

        let longitude = values [1];
        let latitude = values[0];

        fetch(`${URL}lon=${longitude}&lat=${latitude}&date=2018-01-01&dim=0.05&api_key=${KEY}`)
        .then(response=> {
            if(response.ok){
                response.json()
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Cannot get your image :(',
                    footer:'Try latitude,longitude',
                    showConfirmButton: false,
                    showCloseButton: true                  
                })
            }
            
        })
        .then(data => {
            document.getElementById("img").innerHTML = `<img src="${data.url}" class="img-fluid"></img>`;
        })  
    }
})