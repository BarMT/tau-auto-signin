// ==UserScript==
// @name         TAU IMS Login
// @namespace    https://www.ims.tau.ac.il/Tal/
// @version      1.0
// @description  Auto-fill and submit login form for TAU IMS
// @author       BarMT
// @match        https://www.ims.tau.ac.il/Tal/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const USERNAME = "username";
    const ID = "123456789";
    const PASSWORD = "password";

    const enterButton = document.querySelector('#frmlogin input[title="כניסה"]');

    if (enterButton) {
        document.querySelector('#frmlogin input[name="txtUser"]').value = USERNAME;
        document.querySelector('#frmlogin input[name="txtId"]').value = ID;
        document.querySelector('#frmlogin input[name="txtPass"]').value = PASSWORD;
        enterButton.click();
    }
})();
