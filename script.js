const callHistory = []

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

// call button functionalities
document.getElementById('call-button-1').addEventListener('click', function () {
    const coinCount = parseInt(getInnerText('coin-count'))

    if (coinCount < 20) {
        alert("You don't have enough coin!")
        return
    }

    alert('Calling National Emergency Number 999...')

    const newCoin = coinCount - 20
    document.getElementById('coin-count').innerText = newCoin

    const data = {
        name: "National Emergency Number",
        number: 999,
        time: new Date().toLocaleTimeString()
    }
    callHistory.push(data)

    const callContainer = document.getElementById('call-container')
    callContainer.innerText = ''

    for (const data of callHistory) {
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="flex justify-between items-center bg-[#FAFAFA] p-4 mt-2 rounded-lg">
            <div>
                <h3 class=" text-lg font-bold">${data.name}</h3>
                <p class=" text-[#5c5c5c]">${data.number}</p>
            </div>
            <div>
                <p class="text-[#5c5c5c] text-lg">${data.time}</p>
            </div>
        </div>
        `
        callContainer.appendChild(div)
    }
})
document.getElementById('call-button-2').addEventListener('click', function () {
    const coinCount = parseInt(getInnerText('coin-count'))

    if (coinCount < 20) {
        alert("You don't have enough coin!")
        return
    }

    alert('Calling Police Helpline Number 999...')

    const newCoin = coinCount - 20
    document.getElementById('coin-count').innerText = newCoin

    const data = {
        name: "Police Helpline Number",
        number: 999,
        time: new Date().toLocaleTimeString()
    }
    callHistory.push(data)

    const callContainer = document.getElementById('call-container')
    callContainer.innerText = ''

    for (const data of callHistory) {
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="flex justify-between items-center bg-[#FAFAFA] p-4 mt-2 rounded-lg">
            <div>
                <h3 class=" text-lg font-bold">${data.name}</h3>
                <p class=" text-[#5c5c5c]">${data.number}</p>
            </div>
            <div>
                <p class="text-[#5c5c5c] text-lg">${data.time}</p>
            </div>
        </div>
        `
        callContainer.appendChild(div)
    }
})
document.getElementById('call-button-3').addEventListener('click', function () {
    const coinCount = parseInt(getInnerText('coin-count'))

    if (coinCount < 20) {
        alert("You don't have enough coin!")
        return
    }

    alert('Calling Fire Service Number 999...')

    const newCoin = coinCount - 20
    document.getElementById('coin-count').innerText = newCoin

    const data = {
        name: "Fire Service Number",
        number: 999,
        time: new Date().toLocaleTimeString()
    }
    callHistory.push(data)

    const callContainer = document.getElementById('call-container')
    callContainer.innerText = ''

    for (const data of callHistory) {
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="flex justify-between items-center bg-[#FAFAFA] p-4 mt-2 rounded-lg">
            <div>
                <h3 class=" text-lg font-bold">${data.name}</h3>
                <p class=" text-[#5c5c5c]">${data.number}</p>
            </div>
            <div>
                <p class="text-[#5c5c5c] text-lg">${data.time}</p>
            </div>
        </div>
        `
        callContainer.appendChild(div)
    }
})
document.getElementById('call-button-4').addEventListener('click', function () {
    const coinCount = parseInt(getInnerText('coin-count'))

    if (coinCount < 20) {
        alert("You don't have enough coin!")
        return
    }

    alert('Calling Ambulance Service 1994-999999...')

    const newCoin = coinCount - 20
    document.getElementById('coin-count').innerText = newCoin

    const data = {
        name: "Ambulance Service ",
        number: '1994-999999',
        time: new Date().toLocaleTimeString()
    }
    callHistory.push(data)

    const callContainer = document.getElementById('call-container')
    callContainer.innerText = ''

    for (const data of callHistory) {
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="flex justify-between items-center bg-[#FAFAFA] p-4 mt-2 rounded-lg">
            <div>
                <h3 class=" text-lg font-bold">${data.name}</h3>
                <p class=" text-[#5c5c5c]">${data.number}</p>
            </div>
            <div>
                <p class="text-[#5c5c5c] text-lg">${data.time}</p>
            </div>
        </div>
        `
        callContainer.appendChild(div)
    }
})
document.getElementById('call-button-5').addEventListener('click', function () {
    const coinCount = parseInt(getInnerText('coin-count'))

    if (coinCount < 20) {
        alert("You don't have enough coin!")
        return
    }

    alert('Calling Women & Child Helpline 109...')

    const newCoin = coinCount - 20
    document.getElementById('coin-count').innerText = newCoin

    const data = {
        name: "Women & Child Helpline",
        number: 109,
        time: new Date().toLocaleTimeString()
    }
    callHistory.push(data)

    const callContainer = document.getElementById('call-container')
    callContainer.innerText = ''

    for (const data of callHistory) {
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="flex justify-between items-center bg-[#FAFAFA] p-4 mt-2 rounded-lg">
            <div>
                <h3 class=" text-lg font-bold">${data.name}</h3>
                <p class=" text-[#5c5c5c]">${data.number}</p>
            </div>
            <div>
                <p class="text-[#5c5c5c] text-lg">${data.time}</p>
            </div>
        </div>
        `
        callContainer.appendChild(div)
    }
})
document.getElementById('call-button-6').addEventListener('click', function () {
    const coinCount = parseInt(getInnerText('coin-count'))

    if (coinCount < 20) {
        alert("You don't have enough coin!")
        return
    }

    alert('Calling Anti-Corruption Helpline 106...')

    const newCoin = coinCount - 20
    document.getElementById('coin-count').innerText = newCoin

    const data = {
        name: "Anti-Corruption Helpline",
        number: 106,
        time: new Date().toLocaleTimeString()
    }
    callHistory.push(data)

    const callContainer = document.getElementById('call-container')
    callContainer.innerText = ''

    for (const data of callHistory) {
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="flex justify-between items-center bg-[#FAFAFA] p-4 mt-2 rounded-lg">
            <div>
                <h3 class=" text-lg font-bold">${data.name}</h3>
                <p class=" text-[#5c5c5c]">${data.number}</p>
            </div>
            <div>
                <p class="text-[#5c5c5c] text-lg">${data.time}</p>
            </div>
        </div>
        `
        callContainer.appendChild(div)
    }
})

// clear button
document.getElementById('clear-button').addEventListener('click', function () {
    document.getElementById('call-container').innerHTML = ''
    callHistory.length = 0
})