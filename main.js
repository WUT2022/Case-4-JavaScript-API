// document.body.innerHTML = "testing"
// UNlVhtIyqAzN6ipcOKa5AzL6yIbIQ2BBMXgDKvcb
const key = "UNlVhtIyqAzN6ipcOKa5AzL6yIbIQ2BBMXgDKvcb"


// async function getNASA() {
let inputText = document.getElementById('input-text');

let card = document.querySelector('.launchSpace')
let url = "https://images-api.nasa.gov/search?q=star"
let moon = "moon";
let startButton = document.querySelector('.start')


function makeImg(img) {
    return `<img src="${img}" alt="Girl in a jacket" width="500" height="600">`
}

startButton.addEventListener('click', (e) => {
    e.preventDefault()
    console.log("hej")
    fetch(`https://images-api.nasa.gov/search?q=${moon}`)
        .then(response => response.json())
        .then(data => {
            // item = data.collection.items
          let item = data.collection.items[0].links[0].href

//item.forEach((element) => console.log(element));



          
         
            console.log(item.length)
            card.innerHTML += `<img src="${item}" alt="Girl in a jacket" width="500" height="600">`
       
       
        });

    })
    
    
       
       
       
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

//kontrollera links är en array innan man försöker visa dator

// fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data.collection)
//         let items = data.collection.items
//         items.forEach(item => {
//             console.log(item)
//             let img = new Image()
//             img.src = item.links[0].href
//             card.appendChild(img)
//         });
//     })

//card.innerHTML = `<img src="${pictures}" alt="Girl in a jacket" width="500" height="600">`
// document.body.innerHTML += `<img src="${pictures}" alt="Girl in a jacket" width="500" height="600">`





//getNASA()