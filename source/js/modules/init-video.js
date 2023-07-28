function initVideo() {
  const video = document.querySelector('.gym__video-wrapper');

  if (!video) {
    return;
  }

  createVideo(video);
}

function createVideo(video) {
  const link = video.querySelector('.gym__video-link');
  const button = video.querySelector('.gym__video-button');

  if (!link || !button) {
    return;
  }

  const id = createUrl(link);

  video.addEventListener('click', () => {
    const iframe = createIframe(id);

    link.remove();
    button.remove();
    video.appendChild(iframe);
  });

  link.removeAttribute('href');
  video.classList.add('gym__video-wrapper--is-enabled');
}

function createUrl(link) {
  const regexp = /https:\/\/www\.youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/i;
  const url = link.getAttribute('href');
  const match = url.match(regexp);

  return match[1];
}

function generateUrl(id) {
  let query = '?rel=0&showinfo=0&autoplay=1';

  return 'https://www.youtube.com/embed/' + id + query;
}

function createIframe(id) {
  const iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', generateUrl(id));
  iframe.classList.add('gym__video');

  return iframe;
}

export {initVideo};
