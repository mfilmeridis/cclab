const apiKey = "cqZoCRLqouggN5JiVkcZ02GmEfolYfclWgfPfHst";
const apodUrl = "https://api.nasa.gov/planetary/apod";

function contentLoaded(){
  const apodElement = document.getElementById("apod");

  fetch(`${apodUrl}?api_key=${apiKey}`)
  .then(res=>res.json())
  .then(data=>{
      let media ="";
      if(data.media_type ==="image"){
        media =`<img src="${data.url}">`
      }else {
        media = `<iframe src="${dat.hdurl}" width="560" height="auto"`
      }

      apodElement.innerHTML = (`
          <div class="card-image">
            ${media}   
          </div>
          
      `)

      console.log(data);
  });
}

window.addEventListener("DOMContentLoaded", contentLoaded)

function setup() {
  noCanvas();
  let userInput = select('#userinput');
  userInput.changed(goWiki);
  goWiki();

  function goWiki(){
    let term = userInput.value();
    let searchUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=';
    let url = searchUrl + term;
    console.log(url); 
    loadJSON(url, gotSearch, 'jsonp');
  }

  function gotSearch(data) {
    let len = data[1].length;
    let index = floor(random(len));
    let title = data[1][index];
    createP(title);
    
    title = title.replace(/\s+/g, '_');
    console.log('Quering:' + title);

    let contentURL = 'https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&titles=';
    let url = contentURL + title;
    loadJSON(url, gotContent, 'jsonp');
  }

  function gotContent(data){
    let page = data.query.pages;
    let pageId = Object.keys(data.query.pages)[0];
    // console.log(data);
    let content = page[pageId].revisions[0]['*'];
    console.log(content);
    
    let wordRegex = /\b\w{5,}\b/g;
    let randomWord = content.match(wordRegex);
    let word = random(randomWord);
    createP(word);
  }
}