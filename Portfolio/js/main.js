// ==========================================================================
// MODERN PORTFOLIO - SCRIPT (TRANSITIONS, FILTER)
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Active Page Link Highlighting
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  // 2. Smooth Page Switch Transitions
  const container = document.querySelector('.portfolio-container');
  document.querySelectorAll('a[href$=".html"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetUrl = link.getAttribute('href');
      if (targetUrl && !targetUrl.startsWith('#') && !link.hasAttribute('target')) {
        e.preventDefault();
        if (container) {
          container.style.transition = "transform 0.2s ease-in, opacity 0.2s ease-in";
          container.style.transform = "translateY(-10px)";
          container.style.opacity = "0";
        }
        setTimeout(() => {
          window.location.href = targetUrl;
        }, 200);
      }
    });
  });

  // 3. Project Filters
  const filterBtns = document.querySelectorAll(".filter-btn");
  if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener("click", (e) => {
        filterBtns.forEach(b => b.classList.remove("active"));
        e.target.classList.add("active");
      });
    });
  }
});