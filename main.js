
const key = "UNlVhtIyqAzN6ipcOKa5AzL6yIbIQ2BBMXgDKvcb"

let inputText = document.getElementById('input-text');

let card = document.querySelector('.launchSpace')

let url = ""

let startButton = document.querySelector('.start')

const button = document.querySelector('button');

const content = document.getElementById("content");

const ajaxSpinner = document.querySelector('#ajaxSpinner');



// function makeImg(img) {
//     return `<img src="${img.links[0].href}" alt="bild från rymden" width="500" height="600">`
// }



startButton.addEventListener('click', (e) => {
  const descriptionText = document.getElementById("descriptionText").checked;
  console.log("click")
  e.preventDefault()

  ajaxSpinner.classList = ""

  startButton.className = "progress"

  setTimeout(() => {
    content.textContent = "Lets go!";
    startButton.className = ""


    fetch(`https://images-api.nasa.gov/search?q=${inputText.value}`)
      .then(response => response.json())
      .then(data => {

        let items = data.collection.items
        console.log(items)

        items.forEach(item => {

          // obj?.d?.[0] använd så den inte krashar

          if (descriptionText) {

            const img = document.createElement("img");
            img.src = item.links?.[0].href
            card.appendChild(img)
            card.innerHTML += `<p>${item.data[0].description}</p>`
          } else {
            console.log("if är false falskt")
            const img = document.createElement("img");
            // let img = new Image(200, 300)
            img.src = item.links[0].href

            card.appendChild(img)
          }

         console.log(item.data[0].description)

        });



      }).catch(error => {
        console.log("error något är fel", error)
    
        card.innerHTML += `<h1>Nothing found!</h1>`
      })
      .finally(() => {
        ajaxSpinner.classList = "hidden";
      });
  }, 1500);
});


