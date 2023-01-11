const iconShare = document.querySelector('#icon-share')
const containerMedia = document.querySelector('.container-media')

function showIconMedia() {
  containerMedia.classList.toggle('active')
}

iconShare.addEventListener('click', showIconMedia)