(function (w, d, s, o, f, js, fjs) {
    w["botsonic_widget"] = o;
    w[o] =
      w[o] ||
      function () {
        (w[o].q = w[o].q || []).push(arguments);
      };
    (js = d.createElement(s)), (fjs = d.getElementsByTagName(s)[0]);
    js.id = o;
    js.src = f;
    js.async = 1;
    fjs.parentNode.insertBefore(js, fjs);
})(window, document, "script", "Botsonic", "https://widget.writesonic.com/CDN/botsonic.min.js");

Botsonic("init", {
    serviceBaseUrl: "https://api.botsonic.ai",
    token: "6fe83b4b-115f-4f96-9c24-806dbbdd2c1b",
});

// Voeg inline CSS toe aan de Botsonic-wrapper na de initiatie
window.addEventListener("load", function() {
    var botsonicWrapper = document.getElementById("Botsonic-wrapper");
    if (botsonicWrapper) {
        botsonicWrapper.style.bottom = "65px";
    }
});