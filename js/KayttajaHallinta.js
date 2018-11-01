
function keraaKayttajaNimi() {
    console.log("Click");
    var url = "http://localhost:8080/users/" + $("#username").val();
    console.log(url);
    $.getJSON(url, function (data) {
        console.dir(data[0]);
    });
}
