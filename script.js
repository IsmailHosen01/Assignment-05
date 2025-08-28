// function to get inner text
function getInnerText(id) {
    const innerText = document.getElementById(id).innerText
    return innerText
}


// heart icon increase
document.getElementById('heart-button-1').addEventListener('click', function () {
    const heartCount = parseInt(getInnerText('heart-count'))
    document.getElementById('heart-count').innerText = heartCount + 1
})
document.getElementById('heart-button-2').addEventListener('click', function () {
    const heartCount = parseInt(getInnerText('heart-count'))
    document.getElementById('heart-count').innerText = heartCount + 1
})
document.getElementById('heart-button-3').addEventListener('click', function () {
    const heartCount = parseInt(getInnerText('heart-count'))
    document.getElementById('heart-count').innerText = heartCount + 1
})
document.getElementById('heart-button-4').addEventListener('click', function () {
    const heartCount = parseInt(getInnerText('heart-count'))
    document.getElementById('heart-count').innerText = heartCount + 1
})
document.getElementById('heart-button-5').addEventListener('click', function () {
    const heartCount = parseInt(getInnerText('heart-count'))
    document.getElementById('heart-count').innerText = heartCount + 1
})
document.getElementById('heart-button-6').addEventListener('click', function () {
    const heartCount = parseInt(getInnerText('heart-count'))
    document.getElementById('heart-count').innerText = heartCount + 1
})