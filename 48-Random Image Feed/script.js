const container = document.querySelector('.container')
const unsplashurl ='https://source.unsplash.com/random/'
const rows = 5

for(let i = 0; i < rows * 3; i++) {
    const img = document.createElement('img')
    img.src = `${unsplashurl}${getRandomSize()}`
    container.appendChild(img)
}

function getRandomSize() {
    return `${getRadomNr()}*${getRadomNr()}`
}

function getRadomNr() {
    return Math.floor(Math.random() * 10) +300
}