
const key = "UNlVhtIyqAzN6ipcOKa5AzL6yIbIQ2BBMXgDKvcb"

let inputText = document.getElementById('input-text');

let card = document.querySelector('.launchSpace')

let url = ""
 
let startButton = document.querySelector('.start')

const button = document.querySelector('button');

const content = document.getElementById("content");

const ajaxSpinner = document.querySelector('#ajaxSpinner');



function makeImg(img) {
    return `<img src="${img.links[0].href}" alt="bild från rymden" width="500" height="600">`
}





    
  startButton.addEventListener('click' ,  (e) => {
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
       // items = data.collection.item

       // console.log(data.collection)
        let items = data.collection.items
        console.log(items)
        let filteredItems = items.filter(item => item.data[0].description.includes('description'));
     //   let newItems = items.filter()
     items.forEach(item => {

     
          
          

          console.log("if är sant true")
          const img = document.createElement("img");
          // let img = new Image(200, 300)
           img.src = item.links[0].href
        
           // description.src = item.data[0].description
           if (descriptionText === true) {

           card.appendChild(img)
           card.innerHTML += `<p>${item.data[0].description}</p>`
        } else {
          console.log("if är false falskt")
          const img = document.createElement("img");
          // let img = new Image(200, 300)
           img.src = item.links[0].href
        
           card.appendChild(img)
        }
          //   const img = document.createElement("img");
          //  // let img = new Image(200, 300)
          //   img.src = item.links[0].href
         
          //   // description.src = item.data[0].description
        

          //   card.appendChild(img)
          //   card.innerHTML += `<p>${item.data[0].description}</p>`
          //   // document.querySelector('.card').innerHTML += img
            console.log(item.data[0].description)
        // } else {
        //     console.log("fakk")
        // }
        });
        console.log(filteredItems)
      

    }).catch(error => {
        console.log("error något är fel", error)
        // code to run if there are any problems
        card.innerHTML += `<h1>Nothing found!</h1>`
       }) 
       .finally(() => {
        ajaxSpinner.classList = "hidden";
       });
    }, 1500);
  });


   // item.forEach((element) => console.log(element));
       
            //   item.map(makeImg) = toHTML
        //     card.innerHTML = toHTML
            
          //  imgs = item.map(makeImg)
          
           // console.log(imgs)
          //  card.innerHTML = `<img src="${imgs}" alt="Girl in a jacket" width="500" height="600">`
            // console.log(data.collection)
          

         //   let result = Array.isArray(item)
          //  if (result === true) {
     
                // imgs.forEach(item => {
                //     console.log(item)
                //      imgs = new Image()
                //     imgs.src = item.links[0].href
                //     card.appendChild(imgs)
                //    // document.body.innerHTML = imgs
                // })

// fetch(`https://images-api.nasa.gov/search?q=${moon}`)
//     .then(response => response.json())
//     .then(data => {
//        // items = data.collection.item

//        // console.log(data.collection)
//         let item = data.collection.items
//         console.log(item)
//         item.forEach(item => {
//           //  console.log(item)
//             let img = new Image()
//             img.src = item.links[0].href
//             card.appendChild(img)
//         });

//     });

//kontrollera links är en array innan man försöker visa dat