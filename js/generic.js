document.addEventListener("DOMContentLoaded", function () {

    // using localStorage object
    // if (document.querySelector('#userName')) {

    //     const STORAGE_KEY = 'my-script-has-run';

    //     if (!localStorage.getItem(STORAGE_KEY)) {
    //         let name = "";

    //         while (!name || name.trim() === "") {
    //             name = prompt("Hi! Please input your name: ");
    //         };

    //         this.getElementById("userName").innerHTML += " for " + name;

    //         localStorage.setItem(STORAGE_KEY, 'true');
    //     };
    // };


    // prompt on just the products page.
    if (document.querySelector('#userName')) {
        const NAME = checkCookie();

        function setCookie(cname, cvalue, exdays) {
            const D = new Date();
            D.setTime(D.getTime() + (exdays * 24 * 60 * 60 * 1000)); //why are we concatenating the exdays? and what are the *'s for?
            let expires = "expires=" + D.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        };

        function getCookie(cname) {
            let name = cname + "=";
            let decodedCookie = decodeURIComponent(document.cookie);
            let ca = decodedCookie.split(';'); //this makes it into a proper array from a string with values separated by ;'s
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') { //what?
                    c = c.substring(1);
                }

                if (c.indexOf(name) == 0) { //what?
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        };

        function checkCookie() {
            let username = getCookie("username");
            if (username != "") {
                document.getElementById("userName").innerHTML += " for " + username;
            } else {
                username = prompt("Please enter your name:", "");
                if (username != "" && username != null) {
                    setCookie("username", username, 365);
                    document.getElementById("userName").innerHTML += " for " + username;
                }
            }
        };
    };


    //Changing the color themes.
    const COLOR_THEME = document.getElementById("colorTheme");
    const BUTTON_GREEN = document.getElementById("greenButton");
    const BUTTON_ORANGE = document.getElementById("orangeButton");
    const STYLE_GREEN = "css/analogous.css";
    const STYLE_ORANGE = "css/complimentary.css";

    BUTTON_GREEN.addEventListener("click", () => {
        COLOR_THEME.setAttribute("href", STYLE_GREEN);
    });

    BUTTON_ORANGE.addEventListener("click", () => {
        COLOR_THEME.setAttribute("href", STYLE_ORANGE);
    });


    /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
    const HAMBURGER = document.querySelector(".icon");

    HAMBURGER.addEventListener("click", () => {
        var x = document.querySelector(".navBar");
        if (x.className === "navBar navColor") {
            x.className += " responsive";
        } else {
            x.className = "navBar navColor";
        };
    });
    
});