// fetch("https://www.thecolorapi.com/")
const colorPicker = document.getElementById("color-Picker")
const getColorBtn = document.getElementById("get-color-btn")
const colors = document.getElementById("colors")
const footer = document.getElementById("footer")

getColorBtn.addEventListener('click', ()=> {
    fetch(`https://www.thecolorapi.com/scheme?hex=24B1E0&mode=triad&count=5`)
    .then(Response => Response.json())
    .then(data => {
        const colorSchemeArr = data.colors
            colorSchemeArr.map(color => {
                const colorsHex = color.hex.value
                // console.log(`<div>${colorsHex}</div>`)
                footer.innerHTML += `<div>${colorsHex}</div>`
                })
        })
    // console.log(colorPicker.value)
})