function lahetaKaytClick() {
    console.log("Click");
    var data = JSON.stringify({
        "id": 6,
        "name":  $("#name").val(),
        "email": $("#email").val(),
        "username": $("#username").val(),
        "password": $("#password").val()
    });
    Kayttajanlahetys(data);
}
function Kayttajanlahetys(data) {
    var xhr = new XMLHttpRequest();
    //  xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });
    xhr.open("POST", "http://localhost:8080/users");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
}