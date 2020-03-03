
function change (){
  alert ("123")
}

function toggleState(){
    table.setAttribute('contenteditable', table.getAttribute("contenteditable") === "true" ? false : true);
}

function addRow(id){
    var tbody = document.getElementById(id).getElementsByTagName("TBODY")[0];
    var row = document.createElement("TR");
    var td1 = document.createElement("TD");
    td1.appendChild(document.createTextNode("column 1"));
    var td2 = document.createElement("TD");
    td2.appendChild (document.createTextNode("column 2"));
    var td3 = document.createElement("TD");
    td3.appendChild (document.createTextNode("column 3"));
    var td4 = document.createElement("TD");
    td4.appendChild (document.createTextNode("column 4"));
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
    tbody.appendChild(row);
  }

function removeRow(id){
    var tbody = document.getElementById(id).getElementsByTagName("TBODY")[0];
    tbody.parentElement.removeChild(tbody);
      /*var tbody = document.getElementById(id).getElementsByTagName("TR");
    tbody.parentElement.removeRow(tbody);*/
}


var header = document.querySelector('tbody');
const requestURL = "https://jsonplaceholder.typicode.com/todos/";
var request = new XMLHttpRequest();
  request.open("GET",requestURL);
  request.responseType = 'json';
  request.send();
  request.onload = function() {
    var todos = request.response;
    apiRest(todos);
  }

function apiRest(jsonObj){
    for (i = 0; i < jsonObj.length; i++){
      var row = document.createElement("TR");
      var userId = document.createElement ("TD");
      var id = document.createElement ("TD");
      var title = document.createElement ("TD");
      var completed = document.createElement ("TD");

      userId.textContent = jsonObj[i]["userId"];
      id.textContent = jsonObj[i]["id"];
      title.textContent = jsonObj[i]["title"];
      completed.textContent = jsonObj[i]["completed"];

      row.appendChild(userId);
      row.appendChild(id);
      row.appendChild(title);
      row.appendChild(completed);

      header.appendChild(row);



    }
 

}

