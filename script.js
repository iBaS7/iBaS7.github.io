// Language toggle (English is the default).
(function () {
  var root = document.documentElement;
  var titles = {
    en: "Dr. Ali İbrahim Balın, CPPM | Supply Chain & Procurement",
    tr: "Dr. Ali İbrahim Balın, CPPM | Tedarik Zinciri ve Satın Alma"
  };

  function apply(lang) {
    root.lang = lang;
    root.classList.toggle("tr", lang === "tr");
    document.title = titles[lang];
  }

  // Storage can be unavailable (for example in some private modes).
  function load() {
    try { return localStorage.getItem("lang"); } catch (e) { return null; }
  }
  function save(lang) {
    try { localStorage.setItem("lang", lang); } catch (e) { /* ignore */ }
  }

  // Runs before the page is painted, so a saved choice does not flash English.
  apply(load() === "tr" ? "tr" : "en");

  document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById("lang-toggle");
    button.hidden = false;
    button.addEventListener("click", function () {
      var next = root.lang === "tr" ? "en" : "tr";
      apply(next);
      save(next);
    });
  });
})();
