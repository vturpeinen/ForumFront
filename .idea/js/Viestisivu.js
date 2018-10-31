//
// var baseurl="http://localhost:8080/users";
// var loppuurl = "http://localhost:8080/messages";


var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            var vastaus = JSON.parse(xhr.responseText);
//                var vastaus = JSON.stringify(tulos);
            console.dir(vastaus);

            for (var i = 0; i < vastaus.length; i++) {

                var viesti = vastaus[i];
                var listanHaku = document.getElementById("lista");
                var listanLuonti = document.createElement("li");

                //var ttimestamp = new Date(messages.ttimestamp[0]);

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


//
// function kasitteletulos(tulos) {
//     while(lista.firstChild) {
//         lista.removeChild(Lista.firstChild);
//     }
// }
// var lista = document.getElementById("lista");