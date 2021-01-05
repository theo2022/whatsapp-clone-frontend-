var parent = document.getElementById("contacts");
parent = document.querySelector("#contacts ul")
var chatlist = '{"chat":[' +
  '{"Name":"arun", "image":"camaro.jpg" },' +
  '{"Name":"Arul" ,"image":"camaro.jpg"},' +
  '{"Name":"ashok","image":"201.jpg" },' +
  '{"Name":"vinoth" ,"image":"car1.jpg"},' +
  '{"Name":"ram","image":"camaro.jpg" },' +
  '{"Name":"prem","image":"camaro.jpg" },' +
  '{"Name":"harish", "image":"camaro.jpg"},' +
  '{"Name":"giri" ,"image":"camaro.jpg"},' +
  '{"Name":"kishore","image":"camaro.jpg" },' +
  '{"Name":"praveen","image":"camaro.jpg" },' +
  '{"Name":"abdul" ,"image":"camaro.jpg"},' +
  '{"Name":"akash" ,"image":"camaro.jpg"},' +
  '{"Name":"karthik","image":"camaro.jpg" },' +
  '{"Name":"visakan" ,"image":"camaro.jpg"},' +
  '{"Name":"vasudevan","image":"camaro.jpg" },' +
  '{"Name":"surya","image":"camaro.jpg" },' +
  '{"Name":"yogesh" ,"image":"camaro.jpg"},' +
  '{"Name":"ani" ,"image":"camaro.jpg"},' +
  '{"Name":"gaint" ,"image":"camaro.jpg"},' +
  '{"Name":"vengi" ,"image":"camaro.jpg"},' +
  '{"Name":"bala" ,"image":"camaro.jpg"}]}';

var obj = JSON.parse(chatlist);

//console.log(parent);

for (i = 0; i < obj.chat.length - 1; i++) {
  var temp = obj.chat[i];
  let img = document.createElement("img");
  let P = document.createElement('p');
  
  let li = document.createElement('li');
  P.innerHTML = temp.Name;
  img.src=temp.image;
  
  li.appendChild(img)
  li.appendChild(P)
  
  console.log(li)
  parent.append(li);


}






