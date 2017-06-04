function sendData(url, data, callback) {
    var http = new XMLHttpRequest();
    http.open("POST", url, true);

    //Send the proper header information along with the request
    http.setRequestHeader("Content-type", "application/json");

    http.onreadystatechange = function() { //Call a function when the state changes.
        if (http.readyState == 4 && http.status == 200) {
            callback(http.responseText);
        }
    }

    http.send(data);
}

function saveuser() {
    var url = "/users";
    var data = JSON.stringify({ name: "TestUser", email: "test@user.com" });
    sendData(url, data, function(response) { alert(response); })
}