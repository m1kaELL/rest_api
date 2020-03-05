
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
  request.open("GET",requestURL,false);
  /*request.responseType = 'json';*/
  request.send();
  var Data = JSON.parse(request.responseText);
  var userId = true;
  var id = true;
  var title = true;
  var completed = true;
  var tmp=[];
  document.getElementById("btn").onclick = function() {
    /*var todos = request.response;*/
    apiRest(Data);
  }

function apiRest(jsonObj){
    header.innerHTML = '';
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
      console.log(header.length);



    }

}

document.getElementById('userId').onclick= function (){
  if (userId){
    
    userId=false
    for (var left=0;left<Data.length-1;left++){
      for (var right = left+1; right< Data.length;right++){
        if (Data[left].userId <Data[right].userId){
          tmp[0]=Data[left];
          Data[left]=Data[right];
          Data[right]=tmp[0];
        }
      }
    }
  }
  else{
    userId=true 
    console.log(header.length);
    for (var left=0;left<Data.length-1;left++){
      for (var right = left+1; right< Data.length;right++){
        if (Data[left].userId>Data[right].userId){
          tmp[0]=Data[left];
          Data[left]=Data[right];
          Data[right]=tmp[0];
        }
      }
    }
    
  }
  apiRest(Data);
}

document.getElementById('id').onclick= function (){
  if (id){
    
    id=false
    for (var left=0;left<Data.length-1;left++){
      for (var right = left+1; right< Data.length;right++){
        if (Data[left].id <Data[right].id){
          tmp[0]=Data[left];
          Data[left]=Data[right];
          Data[right]=tmp[0];
        }
      }
    }
  }
  else{
    id=true 
    console.log(header.length);
    for (var left=0;left<Data.length-1;left++){
      for (var right = left+1; right< Data.length;right++){
        if (Data[left].id>Data[right].id){
          tmp[0]=Data[left];
          Data[left]=Data[right];
          Data[right]=tmp[0];
        }
      }
    }
    
  }
  apiRest(Data);
}

document.getElementById('title').onclick= function (){
  if (title){
    
    title=false
    for (var left=0;left<Data.length-1;left++){
      for (var right = left+1; right< Data.length;right++){
        if (Data[left].title <Data[right].title){
          tmp[0]=Data[left];
          Data[left]=Data[right];
          Data[right]=tmp[0];
        }
      }
    }
  }
  else{
    title=true 
    console.log(header.length);
    for (var left=0;left<Data.length-1;left++){
      for (var right = left+1; right< Data.length;right++){
        if (Data[left].title>Data[right].title){
          tmp[0]=Data[left];
          Data[left]=Data[right];
          Data[right]=tmp[0];
        }
      }
    }
    
  }
  apiRest(Data);
}

document.getElementById('completed').onclick= function (){
  if (completed){
    
    completed=false
    for (var left=0;left<Data.length-1;left++){
      for (var right = left+1; right< Data.length;right++){
        if (Data[left].completed <Data[right].completed){
          tmp[0]=Data[left];
          Data[left]=Data[right];
          Data[right]=tmp[0];
        }
      }
    }
  }
  else{
    completed=true 
    console.log(header.length);
    for (var left=0;left<Data.length-1;left++){
      for (var right = left+1; right< Data.length;right++){
        if (Data[left].completed>Data[right].completed){
          tmp[0]=Data[left];
          Data[left]=Data[right];
          Data[right]=tmp[0];
        }
      }
    }
    
  }
  apiRest(Data);
}
