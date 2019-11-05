const apiKey = "cqZoCRLqouggN5JiVkcZ02GmEfolYfclWgfPfHst";
const apodUrl = "https://api.nasa.gov/planetary/apod";
const date = "date=2009-07-30";



function contentLoaded(){
  const apodElement = document.getElementById("apod");

  fetch(`${apodUrl}?api_key=${apiKey}&${date}`)
  .then(res=>res.json())
  .then(data=>{
      let media ="";
      if(data.media_type ==="image"){
        media =`<img src="${data.url}">`
      }else {
        media = `<iframe src="${dat.hdurl}" width="560" height="315"`
      }

      apodElement.innerHTML = (`
          <div class="card-image">
            ${media}
            <span class="card-title">${data.title}</span>
          </div>
          <div class="card-content">
            <p>${data.explanation}</p>
            <br>
            <p><b>${(new Date(data.date)).toDateString()}</b></p>

            <p>© ${data.copyright}</p>
          </div>
      `)

      console.log(data);
  });

  
}





window.addEventListener("DOMContentLoaded", contentLoaded)