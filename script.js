const hamburgerMenu = document.querySelector('#hamburger')
const brandLink = document.querySelector('#brandLinkLine')
const audienceLink = document.querySelector('#audienceLinkLine')

document.querySelector('.hamburger-icon').addEventListener('click', show)
document.querySelector('#brandLearnMore').addEventListener('mouseover', changeOpacity)
document.querySelector('#audienceLearnMore').addEventListener('mouseover', changeOpacity2)
document.querySelector('#brandLearnMore').addEventListener('mouseout', changeOpacityBack)
document.querySelector('#audienceLearnMore').addEventListener('mouseout', changeOpacityBack2)


function show () {
    hamburgerMenu.classList.toggle('hidden-mobile-1')
}

function changeOpacity() {
    brandLink.style.opacity=1
}

function changeOpacity2() {
    audienceLink.style.opacity=1
}

function changeOpacityBack() {
    brandLink.style.opacity=.25
}

function changeOpacityBack2() {
    audienceLink.style.opacity=.25
}