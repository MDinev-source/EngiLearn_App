window.onload = () => {
    let scrollColumn = document.getElementById("heightScroll");
    let allVideos = document.getElementsByTagName("video");

    let currentVideo = allVideos[0];

    scrollColumn.style.height = currentVideo.offsetHeight + 'px';
};
