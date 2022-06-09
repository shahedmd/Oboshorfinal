function whatsapp(){
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var number = document.getElementById("number").value;
    var menu = document.getElementById("menu").value;
    var items = document.getElementById("items").value;
     
    var url = "https://wa.me/01995767837?text="
    +"*Name :* "+name+"%0a"
    +"*Address :* "+add+"%0a"
    +"*Number :* "+number+"%0a"
    +"*Date :* "+menu+"%0a"
    +"*Message :* "+items;
     
    window.open(url,'_blank').focus();
    }