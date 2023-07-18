const videoGym = document.querySelector('.gym__video-wrapper');
const videoGymLink = videoGym.querySelector('.gym__video-link');
const videoGymButton = videoGym.querySelector('.gym__video-button');

function createUrl() {
  const regexp = /https:\/\/www\.youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/i;
  const linkUrl = videoGymLink.getAttribute('href');
  const match = linkUrl.match(regexp);

  return match[1];
}

const videoId = createUrl();

function generateURL() {
  let query = '?rel=0&showinfo=0&autoplay=1';

  return 'https://www.youtube.com/embed/' + videoId + query;
}

const createIframe = () => {
  const iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', generateURL());
  iframe.classList.add('gym__video');

  return iframe;
};

const initVideo = () => {
  videoGym.addEventListener('click', () => {
    const iframeUser = createIframe();

    videoGymLink.remove();
    videoGymButton.remove();
    videoGym.appendChild(iframeUser);
  });

  videoGymLink.removeAttribute('href');
  videoGym.classList.add('gym__video-wrapper--is-enabled');
};

export {initVideo};
