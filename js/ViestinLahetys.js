
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
    var xhr = new XMLHttpRequest();
  //  xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });
    xhr.open("POST", "http://localhost:8080/messages");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
}