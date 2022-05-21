function change() {
  if (document.getElementById('sent').innerHTML == 'New sentence!'){
    document.getElementById('sent').innerHTML = 'Back to old sentence!';
  }
  else{document.getElementById('sent').innerHTML = 'New sentence!';}
}

window.onload = function(){
document.getElementById("count").innerHTML = '0'
for (let i = 0; i < 5; i++){
  id = "el" + (i + 1);
  document.getElementById(id).value = ("Element" + (i + 1));
  document.getElementById(id).placeholder = ("Element" + (i + 1));
  document.getElementById('converter1_ans').innerHTML = 'Result: '
  document.getElementById('converter2_ans').innerHTML = 'Result: ';
}

}

var i = 0;
function count(op){
  if (op == '+'){
    i++;
  }
  else {
    i--;
  }
  document.getElementById('count').innerHTML = i;
}

function convert1() {
  c = document.getElementById('converter1').value;
  ans = (Math.round(((c*9/5) + 32)*100)/100);
  if (isNaN(ans)) {
    document.getElementById('converter1_ans').innerHTML = 'invalid';
  }
  else{
  document.getElementById('converter1_ans').innerHTML = 'Result: ' + ans + " F°";
}
}

function convert2() {
  c = document.getElementById('converter2').value;
  ans = (Math.round(100*((c - 32)*5/9))/100);
  if (isNaN(ans)){
    document.getElementById('converter2_ans').innerHTML = 'invalid'
  }
  else{
  document.getElementById('converter2_ans').innerHTML = 'Result: ' + ans + " C°";
}
}




function CreateCar() {
  return  car = {
   brand: document.getElementById('brand').value,
   price: document.getElementById('price').value,
   gas: document.getElementById('gas').value,
   deplete: function() {car.gas = 0;},
   fuel: function() {car.gas = 'Full';}
 };

}


function DepleteCar() {
  a = CreateCar();
  console.log(a);
  a.deplete();
  document.getElementById('gas').value = a.gas;
}

function FuelCar() {
  a = CreateCar();
  a.fuel();
  document.getElementById('gas').value = a.gas;
}


ls = ["el1", "el2", "el3", "el4"];
//
function Render() {
  ls2 = [];
  i = 0;
  for (x in ls) {
    ls2.push(document.getElementById(ls[i]).value);
    i++;
  }
  html = ""
  for (x in ls2){
    html += "<li><span>" + ls2[x] + "</span></li>";
  }
  document.getElementById('insert').innerHTML = html;
}
