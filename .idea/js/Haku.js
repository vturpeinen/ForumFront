
var baseurl="http://localhost:8080/messages";
// var loppuurl = "http://localhost:8080/messages";

function start() {
    $.getJSON(baseurl + viesti).done(function (data) {
        console.log(data);
        messages = document.getElementById("messages");
            function getMessages() {
                viesti = document.getElementById("label").value;
                for (var j = 0; j < messages.length; ++j) {
                    elem.appendChild(messages[j]);
                }
                lista.appendChild(elem);
                var newLiElem = document.createElement("li");
                var tempstring=localStorage.getItem("label");

                var liText = document.createTextNode(tempstring);
                newLiElem.appendChild(liText);
                document.getElementById("lista").appendChild(newLiElem);


            }})}

        // function makeTable(taulu) {
        //     var raw = $("<tr>").appendTo($('#table'));
        //     console.dir("testi");
        //     $("<td>").text(label).appendTo(raw);
        //     var aika3 = lahtoAika();
        //     $("<td>").text(aika3).appendTo(raw);
        //     $("<td>").text(tuloasema).appendTo(raw);
        //     var aika4 = tuloAika(train);
        //     $("<td>").text(aika4).appendTo(raw);
        //     var maika = matkustusAika();
        //     $("<td>").text(maika).appendTo(raw);
        // }
        //})}}

