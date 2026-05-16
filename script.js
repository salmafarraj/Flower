document.addEventListener('click', function() {
    const audio = document.getElementById('background-audio');
    audio.play();
}, { once: true });

// sidebar code
const bar = document.getElementById("bar");
const sidebar = document.getElementById("sidebar");

bar.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

document.querySelectorAll(".sidebar a").forEach(link => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("active");
  });
});

function myFunction(x) {
  x.classList.toggle("change");
}