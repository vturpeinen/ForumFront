
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            var kayttaja = JSON.parse(xhr.responseText);

            console.dir(kayttaja);

            for (var i = 0; i < kayttaja.length; i++) {

                var kayttajaLista = kayttaja[i];
                var listanHakuK = document.getElementById("listaK");
                var listanLuontiK = document.createElement("liK");


                //var ttimestamp = new Date(messages.ttimestamp[0]);

                var kayttajaTiedosto = document.createTextNode(
                    kayttaja[i].label + " " + kayttaja[i].content);
                listanLuontiK.appendChild(kayttajaTiedosto);
                listanHakuK.appendChild(listanLuontiK);
            }
        } else {
            console.dir("Epäonnistui");
        }
    }
};
xhr.open('GET', 'http://localhost:8080/users');
xhr.send(null);
