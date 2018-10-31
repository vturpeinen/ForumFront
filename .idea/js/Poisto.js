function poistaClick() {
    console.log("Click");
    var data = JSON.stringify({
        "id": $("#id").val(),
    });
    poisto(data);
}
function poisto(data) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
        }
    });
    xhr.open("DELETE", "http://localhost:8080" + "/id");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
}