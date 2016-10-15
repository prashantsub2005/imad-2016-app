//counter code
var button = document.getElementById("counter");

button.onClick = function () {
    
    
    //Make a request to counter endpoint 
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    httpRequest.onreadystatechange = function(){
        if (request.readyState === XMLHttpRequest.DONE) {
            //take some action
        if (request.status === 200) {
            var counter = request.responseText;
            var span = document.getElementById("count");
            span.innerHTML = counter.toString();
        }
            
        }
        //Not done yet
    };
    //Make the request
    request.open("GET", "http://prashantsub2005.imad.hasura-app.io/counter", true);
    request.send("null")
};