///Sliding Menu --- STARTS ----
let isOpen = false;

let slideMenu = function() {
        let getSidebar = document.querySelector(".nav-sidebar");
        let getSidebarUL = document.querySelector(".nav-sidebar ul");
        let getSidebarTitle = document.querySelector(".nav-sidebar span");
        let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");



        if (isOpen === false) {
            getSidebarUL.style.visibility = "visible";
            getSidebar.style.width = "272px"
            getSidebarTitle.style.opacity = "0.5"

            let arrayLength = getSidebarLinks.length;
            for (var i = 0; i < arrayLength; i++) {
                getSidebarLinks[i].style.opacity = "1";
            }

            isOpen = true;
        } else if (isOpen === true) {

            getSidebar.style.width = "60px"
            getSidebarTitle.style.opacity = "0"

            let arrayLength = getSidebarLinks.length;
            for (var i = 0; i < arrayLength; i++) {
                getSidebarLinks[i].style.opacity = "0";
            }
            getSidebarUL.style.visibility = "hidden";
            isOpen = false;
        }
    }
    ///Sliding Menu --- ENDS ----
    ///Save() saves address to local storage. --- STARTS ---
function save() {
    var address = [];
    var firstLine, secondLine, province, country, postalCode, phoneNumber;
    firstLine = document.forms[0].elements[0].value;
    secondLine = document.forms[0].elements[1].value;
    province = document.forms[0].elements[2].value;
    country = document.forms[0].elements[3].value;
    postalCode = document.forms[0].elements[4].value;
    phoneNumber = document.forms[0].elements[5].value;

    console.log(firstLine);
    console.log(secondLine);
    console.log(province);
    console.log(country);
    console.log(postalCode);
    console.log(phoneNumber);


    address = [firstLine, secondLine, province, country, postalCode, phoneNumber];
    localStorage.setItem("address", JSON.stringify(address));
    localStorage.setItem("isAddress", "true");
}
///Save() saves address to local storage. --- ENDS ---
///Resturant object --- STARTS ---
function resturants(name, url, type, items) {
    this.name = name;
    this.url = url;
    this.type = type;
    this.items = items;
}
///Resturant object --- ENDS ---
///Items object --- STARTS ---
function item(name, restName, type, url, price) {
    this.name = name;
    this.restName = restName;
    this.type = type;
    this.url = url;
    this.price = price;
}
///Items object --- ENDS ---
///Populating itmes list --- STARTS ---
var count = 0;
var items = [];
items[count] = new item("Hamburger", "Burger Queen", "fast food", "hamBurger.html", 9.99);
count++;
items[count] = new item("Poutine", "EggDonalds", "fast food", "EggDonalds-Poutine.html", 4.99);
count++;
items[count] = new item("MuttonSteak", "Deg", "steak", "Deg-BeefSteak.html", 30.99);
count++;
items[count] = new item("Pizza", "Amigos", "pizza", "AmigosPizza-pizza.html", 24.99);
count++;
items[count] = new item("Sandwich", "bnw", "fast food", "bnw-sandwich.html", 4.99);
count++;
items[count] = new item("Poutine", "burgerQueen", "fast food", "burgerQueen-poutine.html", 7.99);
count++;
items[count] = new item("Hamburger", "Way Future", "fast food", "wayfuture-hamburger.html", 15.99);
count++;
items[count] = new item("Sandwich", "burgerQueen", "fast food", "BQ-sandwich.html", 7.99);



///Populating itmes list --- ENDS ---
///AddItems(nameOfItem) adds the name of the item to the ordered list. --- STARTS --- 
function addItems(params) {
    var yourCurrentOrder = [];
    var toBeAdded;
    if (params === "hamBurger") {
        toBeAdded = new item(
            "Hamburger",
            "EggDonalds",
            "fast food",
            "hamBurger.html",
            9.99
        );
    } else if (params === "Poutine") {
        toBeAdded = new item(
            "Poutine",
            "EggDonalds",
            "fast food",
            "EggDonalds-Poutine.html",
            4.99
        );
    } else if (params === "MuttonSteak") {
        toBeAdded = new item(
            "MuttonSteak",
            "Deg",
            "steak",
            "Deg-BeefSteak.html",
            30.99
        );
    } else if (params === "AmigosPizza") {
        toBeAdded = new item(
            "AmigosPizza",
            "Amigos",
            "Pizza",
            "AmigosPizza-pizza.html",
            24.99
        );
    } else if (params === "bnw-sandwich") {
        toBeAdded = new item(
            "bnw-sandwich",
            "bnw",
            "sandwich",
            "bnw-sandwich.html",
            24.99
        );
    } else if (params === "burqerQueen-poutine") {
        toBeAdded = new item(
            "burqerQueen-poutine",
            "burgerQueen",
            "poutine",
            "burgerQueen-poutine.html",
            7.99
        );
    } else if (params === "wayfuture-Hamburger") {
        toBeAdded = new item(
            "WayFuture-Hamburger",
            "Way Future",
            "Hamburger",
            "wayfuture-hamburger.html",
            7.99
        );
    }
    if (localStorage.item) {
        yourCurrentOrder = JSON.parse(localStorage.item);
    }
    yourCurrentOrder.push(toBeAdded);
    localStorage.setItem("item", JSON.stringify(yourCurrentOrder));
}
///AddItems(nameOfItem) adds the name of the item to the ordered list. --- ENDS --- 

if (localStorage.item) {
    var lengthR = JSON.parse(localStorage.item).length;
    var text = '<p class="toBeSorted"><table>' +
        "<tr>" +
        "<th>Resturants Name</th>" +
        "<th>Item</th>" +
        "<th>Price</th>" +
        "</tr>";

    for (i = 0; i < lengthR; i++) {
        var name = JSON.parse(localStorage.item)[i].name;
        var url = JSON.parse(localStorage.item)[i].url;
        var price = JSON.parse(localStorage.item)[i].price;
        var resto = JSON.parse(localStorage.item)[i].restName;
        text +=
            "<tr>" +
            "<td>" + resto + "</td>" +
            '<td><a href="' + url + '">' + name + '</a></td>' +
            '<td>$ ' + price + '</td>' +
            '</tr>';
    }
    text += '</table></p>';


    if (document.getElementById("ordered")) {
        document.getElementById("ordered").innerHTML = text;
    }

    function removeAll() {
        if (localStorage) {
            localStorage.removeItem('item');
            location.reload();
        }
    }
}


function search() {

    var searchFor = "EMPTY";
    var result = [];
    if (document.getElementById("search").value) {
        searchFor = document.getElementById("search").value;
        for (i = 0; i < items.length; i++) {
            if (items[i].name.toLowerCase() === searchFor.toLowerCase()) {
                result.push(items[i]);

            }
        }
        for (i = 0; i < items.length; i++) {
            if (items[i].restName.toLowerCase() === searchFor.toLowerCase()) {
                result.push(items[i]);
            }
        }
        for (i = 0; i < items.length; i++) {
            if (items[i].type.toLowerCase() === searchFor.toLowerCase()) {
                result.push(items[i]);
            }
        }
        if (!result) {
            document.getElementById("quickSearchResults").innerHTML = "NO RESULTS FOUND";
        } else {
            localStorage.setItem("searchList", JSON.stringify(result));
            var text = '<p class="toBeSorted"><table>' +
                "<tr>" +
                "<th>Resturants Name</th>" +
                "<th>Item</th>" +
                "<th>Price</th>" +
                "</tr>";
            for (i = 0; i < result.length; i++) {
                var name = result[i].name;
                var url = result[i].url;
                var price = result[i].price;
                var resto = result[i].restName;
                text +=
                    "<tr>" +
                    "<td>" + resto + "</td>" +
                    '<td><a href="' + url + '">' + name + '</a></td>' +
                    '<td>$ ' + price + '</td>' +
                    '</tr>';
            }
            text += '</table></p>';
            if (document.getElementById("quickSearchResults")) {
                document.getElementById("quickSearchResults").innerHTML = text;
            }
        }
    }
}

function sort() {
    if (localStorage.searchList) {
        var list = JSON.parse(localStorage.searchList);
        list.sort(function(a, b) { return a.price - b.price });
        if (!list) {
            document.getElementById("quickSearchResults").innerHTML = "NO RESULTS FOUND";
        } else {
            var text = '<p class="toBeSorted"><table>' +
                "<tr>" +
                "<th>Resturants Name</th>" +
                "<th>Item</th>" +
                "<th>Price</th>" +
                "</tr>";
            for (i = 0; i < list.length; i++) {
                var name = list[i].name;
                var url = list[i].url;
                var price = list[i].price;
                var resto = list[i].restName;
                text +=
                    "<tr>" +
                    "<td>" + resto + "</td>" +
                    '<td><a href="' + url + '">' + name + '</a></td>' +
                    '<td>$ ' + price + '</td>' +
                    '</tr>';
            }
            text += '</table></p>';
            if (document.getElementById("quickSearchResults")) {
                document.getElementById("quickSearchResults").innerHTML = text;
            }
        }
    }
}
if (localStorage.colour && localStorage.meal && localStorage.mood && localStorage.weather) {
    var colour = localStorage.colour;
    var mood = localStorage.mood;
    var weather = localStorage.weather;
    var meal = localStorage.meal;
    console.log(colour);
    console.log(mood);
    console.log(weather);
    console.log(meal);
    console.log('Print something');
    var name;
    var url;
    var price;
    var resto;
    var text = '<p class="toBeSorted"><table>' +
        "<tr>" +
        "<th>Resturants Name</th>" +
        "<th>Item</th>" +
        "<th>Price</th>" +
        "</tr>";
    if (colour === "red") {
        console.log('It ia red');
        if (meal === "breakfast") {
            //out put sandwich
            name = items[4].name;
            url = items[4].url;
            price = items[4].price;
            resto = items[4].restName;
        } else if (meal === "lunch") {
            if (mood === "happy") {
                // output pizza
                name = items[3].name;
                url = items[3].url;
                price = items[3].price;
                resto = items[3].restName;
            } else if (mood === "sad") {
                // output pizza
                name = items[3].name;
                url = items[3].url;
                price = items[3].price;
                resto = items[3].restName;
            } else if (mood === "bored") {
                //output hamburger
                name = items[0].name;
                url = items[0].url;
                price = items[0].price;
                resto = items[0].restName;
            }
        } else {
            //output steak
            name = items[2].name;
            url = items[2].url;
            price = items[2].price;
            resto = items[2].restName;
        }
    } else if (colour === "yellow") {
        if (meal === "breakfast") {
            //output poutine
            name = items[1].name;
            url = items[1].url;
            price = items[1].price;
            resto = items[1].restName;
        } else if (meal === "lunch") {
            if (mood === "bored") {
                // output hamburger
                name = items[0].name;
                url = itmes[0].url;
                price = items[0].price;
                resto = items[0].restName;
            } else if (mood === "sad") {
                // output hamburger
                name = items[0].name;
                url = items[0].url;
                price = items[0].price;
                resto = items[0].restName;
            } else {
                //output hamburger
                name = items[0].name;
                url = items[0].url;
                price = items[0].price;
                resto = items[0].restName;
            }
        } else {
            //output steak
            name = items[2].name;
            url = items[2].url;
            price = items[2].price;
            resto = items[2].restName;
        }
    } else {
        if (meal === "lunch") {
            if (mood === "happy") {
                //output pizza
                name = items[3].name;
                url = items[3].url;
                price = items[3].price;
                resto = items[3].restName;
            } else if (mood === "sad") {
                // output pizza
                name = items[3].name;
                url = items[3].url;
                price = items[3].price;
                resto = items[3].restName;
            } else {
                // output hamburger
                name = items[0].name;
                url = items[0].url;
                price = items[0].price;
                resto = items[0].restName;
            }
        } else if (meal === "breakfast") {
            // output sandwich
            name = items[4].name;
            url = items[4].url;
            price = items[4].price;
            resto = items[4].restName;
        } else {
            //output pizza
            name = items[3].name;
            url = items[3].url;
            price = items[3].price;
            resto = items[3].restName;
        }
    }
    text +=
        "<tr>" +
        "<td>" + resto + "</td>" +
        '<td><a href="' + url + '">' + name + '</a></td>' +
        '<td>$ ' + price + '</td>' +
        '</tr>';
    text += '</table></p>';
    if (document.getElementById("a")) {
        document.getElementById("a").innerHTML = text;
    }


}
if ((window.location.href.toString()).includes("preview")) {
    if (localStorage.address) {
        console.log((JSON.parse(localStorage.address)[0]));
        var text = "<h2>Your currnt Address is set for :</h2> <address>" +
            JSON.parse(localStorage.address)[0] +
            "</br>";
        if (JSON.parse(localStorage.address)[1]) {
            text += JSON.parse(localStorage.address)[1] + "</br>";
        }
        text += JSON.parse(localStorage.address)[2] +
            "</br>" +
            JSON.parse(localStorage.address)[3] +
            "</br>" +
            JSON.parse(localStorage.address)[4] +
            "</br>" +
            JSON.parse(localStorage.address)[5];
        if (document.getElementById("address")) {
            document.getElementById("address").innerHTML = text;
        }
    } else {
        window.location.replace('changeAddress.html');
    }
}


function submit() {
    localStorage.removeItem('colour');
    localStorage.removeItem('meal');
    localStorage.removeItem('mood');
    localStorage.removeItem('weather');

    var question1 = document.getElementsByName('favourite colour');
    var question2 = document.getElementsByName('favourite meal');
    var question3 = document.getElementsByName('mood');
    var question4 = document.getElementsByName('weather');
    for (i = 0; i < 3; i++) {
        if (question1[i].checked) {
            var a1 = question1[i].value;
        }
        if (question2[i].checked) {
            var a2 = question2[i].value;
        }
        if (question3[i].checked) {
            var a3 = question3[i].value;
        }
        if (question4[i].checked) {
            var a4 = question4[i].value;
        }
    }
    localStorage.setItem("colour", a1);
    localStorage.setItem("meal", a2);
    localStorage.setItem("mood", a3);
    localStorage.setItem("weather", a4);
}