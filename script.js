let progress = document.getElementById('progress_bar');

window.onscroll = function() {
    let total_height = document.body.scrollHeight - window.innerHeight;
    let progress_height = (window.pageYOffset / total_height) * 100;
    progress.style.height = progress_height + "%";
}