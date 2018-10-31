
function lahetaClick() {
    console.log("Click");

    var data = JSON.stringify({
        "label":  $("#label").val(),
        "content": $("#content").val(),
        "id": 5,
        "ttimestamp": "2018-11-22",
        "ggroup": "Ryhmähau"
    });
    lahetys(data);
}
function lahetys(data) {

 /*   var url = "http://localhost:8080/messages";
    var json = JSON.stringify(oFormElement);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.onload = function () {
        var users = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status == "201") {
            console.table(users);
        } else {
            console.error(users);
        }
    }
    xhr.send(json);*/
    var xhr = new XMLHttpRequest();
  //  xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });

    xhr.open("POST", "http://localhost:8080/messages");
    xhr.setRequestHeader("Content-Type", "application/json");
    //xhr.setRequestHeader("cache-control", "no-cache");

    xhr.send(data);
}