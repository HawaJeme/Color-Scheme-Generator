// fetch("https://www.thecolorapi.com/")
const colorPicker = document.getElementById("color-picker")
const getColorBtn = document.getElementById("get-color-btn")
const colors = document.getElementById("colors")
const footer = document.getElementById("footer")
const selectBox = document.getElementById("select-box")

function getSchemeDivs(colorsHex){
    let schemeDivs
    for(let i =0; i<5; i++){
        if(colorsHex){
            schemeDivs = `
            <div style="background-color:${colorsHex};" class="schemeDivs"></div>`
        }
    }
    if(schemeDivs !== undefined){
        colors.innerHTML += schemeDivs
    }
    
}
getSchemeDivs()
getColorBtn.addEventListener('click', ()=> {
    colors.innerHTML = ""
    const selectBoxVal = selectBox.value
    const seedColor = colorPicker.value.replace(/\W/g, "")

    fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${selectBoxVal}&count=5`)
    .then(Response => Response.json())
    .then(data => {
        footer.innerHTML = ""
        const colorSchemeArr = data.colors
            colorSchemeArr.map(color => {
                const colorsHex = color.hex.value
                footer.innerHTML += `
                <div>${colorsHex}</div>`
                // footer.addEventListener('click', ()=>{
                //     let copyClipBoard
                //     copyClipBoard += navigator.clipboard.writeText(colorsHex)
                //     console.log(copyClipBoard)
                // })
                getSchemeDivs(colorsHex)
            })
    })
})
