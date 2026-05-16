// auto scroll code
window.onload = () => {
  const container = document.getElementById("scrollContainer");
  const list = document.getElementById("scrollList");

  const originalItems = Array.from(list.children);
  originalItems.forEach(item => {
    const clone = item.cloneNode(true);
    list.appendChild(clone);
  });

  const itemWidth = originalItems[0].offsetWidth + 10;
  const resetPoint = itemWidth * originalItems.length;

  function autoScroll() {
    container.scrollLeft += 1;

    if (container.scrollLeft >= resetPoint) {
      container.scrollLeft = 0;
    }

    requestAnimationFrame(autoScroll);
  }

  autoScroll();
};


// side bar code
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

// audio code
document.addEventListener('click', function() {
  const audio = document.getElementById('background-audio');
  audio.play();
}, { once: true });