"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const loader = document.querySelector(".cont");
    setTimeout(function () {
        loader.style.opacity = "0";
        setTimeout(function () {
            loader.style.display = "none";
        }, 1000);
    }, 1500);
});
