function playVideo(videoId, thumbDiv) {
  const videos = document.querySelectorAll('video');
  videos.forEach(v => {
    v.pause();
    v.currentTime = 0;
    v.style.display = 'none';
    v.parentNode.querySelector('.thumbnail').style.display = 'block';
  });

  const video = document.getElementById(videoId);
  video.style.display = 'block';
  thumbDiv.style.display = 'none';
  video.play();
}
