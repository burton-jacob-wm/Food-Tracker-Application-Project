$( document ).ready(function() {

});

function submitForm() {
    // Find a <table> element with id="results":
    var table = document.getElementById("results");

    // Find a form with id="foodtracker":
    var form = document.getElementById("foodtracker");


    // Call Input Variables
    var foodname = document.getElementsByName("foodname")[0].value;
    var purchaseDate = document.getElementsByName("purchase")[0].value;
    var expiration = document.getElementsByName("expiration")[0].value;
    var description = document.getElementsByName("description")[0].value;
    var clearButton = "<button type='button' onclick='clearRow(this)'>Remove</button>";

    // Creates an empty row:
    var row = table.insertRow(1);

    //Adds new cells starting with 0 for the first cell:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    // Add the text into the cells:
    cell1.innerHTML = foodname;
    cell2.innerHTML = purchaseDate;
    cell3.innerHTML = expiration;
    cell4.innerHTML = description;
    cell5.innerHTML = clearButton;
    cell5.style.width = "100px";
    cell5.style.border = "dotted 2px #555";
    cell5.style.backgroundColor = "rgba(198, 198, 198, 0.50)";

    var expirationDate = Date.parse(expiration);
    var today = new Date();
    var unixToday = Date.parse(today);

    //Checks for Expiration Marker:
    if (unixToday > expirationDate) {
        row.style.backgroundColor = "#f33a3a";
        cell3.innerHTML = expiration + " (Today)";
    }
    else if (unixToday > expirationDate - 86400000  ) {
        row.style.backgroundColor = "#ff4d00";
        cell3.innerHTML = expiration + " (Tomorrow)";
    }
    else if (unixToday > expirationDate - 172800000) {
        row.style.backgroundColor = "#ff8100";
        cell3.innerHTML = expiration + " (Two Days)";
    }
    else if (unixToday > expirationDate - 259200000) {
        row.style.backgroundColor = "#ffc100";
        cell3.innerHTML = expiration + " (Three Days)";
    }
    else {

    }

    var savedData = [];

    $("#results").find('tbody tr').each(function(index,item){

        var savedFoodName = $(item).find('td').eq(0).text();
        var savedPurchase = $(item).find('td').eq(1).text();
        var savedExpiration = $(item).find('td').eq(2).text();
        var savedDescription = $(item).find('td').eq(3).text();
        savedData.push(new savedInfo(savedFoodName,savedPurchase,savedExpiration,savedDescription))
    });

    // Clear User Input in form:
    document.getElementById("foodtracker").reset();
}

function clearRow(r) {
    var findRow = r.parentNode.parentNode.rowIndex;
    document.getElementById("results").deleteRow(findRow);
}

