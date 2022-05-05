function change() {
  if (document.getElementById('sent').innerHTML == 'New sentence!'){
    document.getElementById('sent').innerHTML = 'Back to old sentence!';
  }
  else{document.getElementById('sent').innerHTML = 'New sentence!';}
}

window.onload = function(){
document.getElementById("count").innerHTML = '0'
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
  document.getElementById('converter1_ans').innerHTML = 'Result: ' + (Math.round(((c*9/5) + 32)*100)/100)
}

function convert2() {
  c = document.getElementById('converter2').value;
  document.getElementById('converter2_ans').innerHTML = 'Result: ' + (Math.round(100*((c - 32)*5/9))/100);
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
