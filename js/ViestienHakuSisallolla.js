
function haeViestiSisallolla() {
    console.log("Click");
    var url = "http://localhost:8080/hae/" + $("#content").val();
    console.log(url);
    $.getJSON(url, function (data) {
        console.dir(data);
        localStorage.setItem("content", data.content)
    });
}







