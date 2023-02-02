// document.body.innerHTML = "testing"
// UNlVhtIyqAzN6ipcOKa5AzL6yIbIQ2BBMXgDKvcb
async function getNASA() {
    const response = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=UNlVhtIyqAzN6ipcOKa5AzL6yIbIQ2BBMXgDKvcb')
    const nasa = await response.json()
    console.log(nasa)
    document.getElementById('test').innerHTML += nasa.photos


}

getNASA()