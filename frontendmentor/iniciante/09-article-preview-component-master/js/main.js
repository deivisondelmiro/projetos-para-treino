const iconShare = document.querySelector('.profile-share')
const containerMedia = document.querySelector('.container-media')

function showIconMedia() {
  containerMedia.classList.toggle('media-active')
  iconShare.classList.toggle('share-active')
}

iconShare.addEventListener('click', showIconMedia)