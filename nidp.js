// ==UserScript==
// @name         TAU NIDP Login
// @namespace    https://nidp.tau.ac.il/nidp/saml2/*
// @version      1.0
// @description  Auto-fill and submit login form for TAU NIDP
// @author       BarMT
// @match        https://nidp.tau.ac.il/nidp/saml2/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const USERNAME = "username";
    const ID = "123456789";
    const PASSWORD = "password";

    document.getElementById("Ecom_User_ID").value = USERNAME;
    document.getElementById("Ecom_User_Pid").value = ID;
    document.getElementById("Ecom_Password").value = PASSWORD;
    document.getElementById("loginButton").click();
})();
