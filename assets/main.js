function permalinks() {
  const headings = document.querySelectorAll("h2, h3, h4, h5, h6");
  for (const heading of headings) {
    if (!heading.id) continue;
    const link = document.createElement("a");
    link.setAttribute("href", "#" + heading.id);
    link.className = "linchor";
    link.textContent = heading.textContent;
    heading.textContent = "";
    heading.appendChild(link);
  }
}

function sharebuttons() {
  if (!("canShare" in navigator)) return;

  const shareData = {
    title: document.title,
    text: document.title,
    url: location.href,
  };

  if (!navigator.canShare(shareData)) return;

  const btn = document.createElement("a");
  btn.href = "";
  btn.className = "share";
  btn.textContent = "Share";

  btn.addEventListener("click", async (e) => {
    e.preventDefault();
    navigator.share(shareData);
  });

  const share = document.querySelector("aside.share");
  if (share) {
    share.innerHTML = "";
    share.appendChild(btn);
  }
}

function scrollToHash() {
  if (location.hash) {
    const id = location.hash.slice(1);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView();
  }
}

function setupSearch() {
  const form = document.getElementById("ducksearch");
  if (!form) return;

  const input = form.q;
  if (input) input.value = "";

  form.addEventListener("submit", () => {
    if (input.value) {
      input.value += " site:learnlearn.in";
    } else {
      input.value = "about site:learnlearn.in";
    }
    return true;
  });
}

function setupTheme() {
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;

  const themes = ["auto", "dark", "light"];
  const labels = { auto: "\uD83D\uDDA5\uFE0F", dark: "\uD83C\uDF19", light: "\u2600\uFE0F" };
  const meta = document.querySelector('meta[name="theme-color"]');

  function getPreferred() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function applyTheme(theme) {
    const html = document.documentElement;
    if (theme === "auto") {
      html.removeAttribute("data-theme");
      localStorage.removeItem("theme");
      const effective = getPreferred();
      btn.textContent = labels.auto;
      btn.title = "Auto (" + effective + ")";
      if (meta) meta.content = effective === "dark" ? "#0f172a" : "#ffffff";
    } else {
      html.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
      btn.textContent = labels[theme];
      btn.title = theme.charAt(0).toUpperCase() + theme.slice(1);
      if (meta) meta.content = theme === "dark" ? "#0f172a" : "#ffffff";
    }
  }

  const saved = localStorage.getItem("theme") || "auto";
  applyTheme(saved);

  btn.addEventListener("click", () => {
    const current = localStorage.getItem("theme") || "auto";
    const idx = themes.indexOf(current);
    const next = themes[(idx + 1) % themes.length];
    applyTheme(next);
  });

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    if (!localStorage.getItem("theme") || localStorage.getItem("theme") === "auto") {
      applyTheme("auto");
    }
  });
}

function whenDOMReady() {
  scrollToHash();
  permalinks();
  sharebuttons();
  setupSearch();
  setupTheme();
}

window.addEventListener("DOMContentLoaded", whenDOMReady);

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    for (const registration of registrations) {
      registration.unregister();
    }
  });
}
