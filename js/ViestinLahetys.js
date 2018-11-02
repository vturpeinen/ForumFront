var userId = localStorage.getItem("id", id)

function lahetaClick() {
    console.log("Click");
    var data = JSON.stringify({
        "content": $("#content").val(),
        "label":  $("#label").val(),
        "id": 5,
        "ttimestamp": "2018-11-22",
        "ggroup": "Ryhmähau",
        // "userId": userId
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