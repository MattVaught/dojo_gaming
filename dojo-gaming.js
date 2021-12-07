function plusOne() {
    let element = document.getElementById("count")
    let elementText = element.innerText
    let elementArray = elementText.split(' ')
    console.log(elementArray)
    let count = parseInt(elementArray[0])
    count++
    element.innerText = count.toString();
}

function changeimage() {
    if  (document.getElementById("stonepunk").src == "stonepunk.png")
    {
        document.getElementById("stonepunk").src = "cafe-neko.png";
    }
    else 
    {
        document.getElementById("stonepunk").src = "cafe-neko.png";
    }
}

function changeimage1() {
    if  (document.getElementById("stonepunk").src == "cafe-neko.png")
    {
        document.getElementById("stonepunk").src = "stonepunk.png";
    }
    else 
    {
        document.getElementById("stonepunk").src = "stonepunk.png";
    }
}