
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            var vastaus = JSON.parse(xhr.responseText);
            console.dir(vastaus);
            for (var i = 0; i < vastaus.length; i++) {
                var viesti = vastaus[i];
                var listanHaku = document.getElementById("lista");
                var listanLuonti = document.createElement("li");
                var textiTiedosto = document.createTextNode(
                vastaus[i].label + " " + vastaus[i].content);
                listanLuonti.appendChild(textiTiedosto);
                listanHaku.appendChild(listanLuonti);
            }
        } else {
            console.dir("Epäonnistui");
        }
    }
};
xhr.open('GET', 'http://localhost:8080/messages');
xhr.send(null);


// var data = {
//     get: function (username) {
//         var value = localStorage.getItem(username);
//         if (!value){return;}
//         if (value[0] === "{") {
//             value = JSON.parse(value);
//         }
//         return value;
//         }


    //var name = JSON.parse(localStorage.getItem("username"));

console.log(localStorage.username);

$("#kn").html(localStorage.username);
