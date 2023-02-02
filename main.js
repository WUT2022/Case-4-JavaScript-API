// document.body.innerHTML = "testing"
// UNlVhtIyqAzN6ipcOKa5AzL6yIbIQ2BBMXgDKvcb



// async function getNASA() {
 //   const response = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=UNlVhtIyqAzN6ipcOKa5AzL6yIbIQ2BBMXgDKvcb')
 fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=UNlVhtIyqAzN6ipcOKa5AzL6yIbIQ2BBMXgDKvcb')  
.then(response => response.json())
.then(data => {
    pictures = data.photos
    console.log(data.photos[2].img_src)
    document.body.innerHTML += `<img src="${data.photos[2].img_src}" alt="Girl in a jacket" width="500" height="600">` 

})

//     const pic1 = nasa.photos[5].img_src
//     console.log(pic1)
//     // document.getElementById('test').innerHTML += `${pic1}`
//     document.body.innerHTML += `${pic1}`

// }

function makeImg(img) {
    return `<img src="${img}" alt="Girl in a jacket" width="500" height="600"> `
}

//const result = makeImg(get[0])

//makeImg(pic1)
makeImg()
//getNASA()