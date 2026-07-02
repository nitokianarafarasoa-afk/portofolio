
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");
 
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
 
    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }
});
function typeSegments(el, segments, speed = 45) {
  let segIndex = 0, charIndex = 0;
  el.innerHTML = "";
  let currentSpan = null;

  function step() {
    if (segIndex >= segments.length) return;
    const seg = segments[segIndex];

    if (seg.br) {
      el.appendChild(document.createElement("br"));
      segIndex++;
      charIndex = 0;
      setTimeout(step, speed);
      return;
    }

    if (charIndex === 0 && seg.cls) {
      currentSpan = document.createElement("span");
      currentSpan.className = seg.cls;
      el.appendChild(currentSpan);
    } else if (charIndex === 0) {
      currentSpan = null;
    }

    const container = currentSpan || el;
    container.appendChild(document.createTextNode(seg.text[charIndex]));
    charIndex++;

    setTimeout(step, charIndex < seg.text.length ? speed : speed);
    if (charIndex >= seg.text.length) { segIndex++; charIndex = 0; }
  }
  step();
}

document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("typewriter-hero");
  if (el) {
    typeSegments(el, [
      { text: "Bonjour, je suis" },
      { br: true },
      { text: "RAFARASOA", cls: "hero-name" },
      { br: true },
      { text: "Nitokiana Fabiolla", cls: "hero-name" }
    ], 100);
  }
});
