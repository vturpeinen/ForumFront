
function keraaKayttajaNimi() {
    console.log("Click");
    var url = "http://localhost:8080/users/" + $("#username").val();
    console.log(url);
    $.getJSON(url, function (data) {
        console.dir(data[0]);
        var username = $("#username").val();
        localStorage.setItem("id", data[0].id)
        localStorage.setItem("username", username)

    });
}

//Document GetElemeny




