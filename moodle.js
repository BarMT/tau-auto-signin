// ==UserScript==
// @name         Moodle Login Redirect
// @namespace    https://moodle.tau.ac.il/
// @version      1.0
// @description  Automatically click the login button on Moodle at TAU
// @author       BarMT
// @match        https://moodle.tau.ac.il/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';  // Include or omit this line based on your preference

    const loginButton = document.querySelector('.login > a[href="https://moodle.tau.ac.il/login/index.php"]');
    
    if (loginButton) {
        loginButton.click();
    } else {
        console.log("No login button");
    }
})();
