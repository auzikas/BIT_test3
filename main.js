/*1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)*/

function compare(a, b) {
	if (a > b) {
		return a + ' is the biggest number';
	} else if (b > a) {
		return b + ' is the biggest number';
	}
}
var results = compare(10, 20);
console.log(results);

/*2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)*/

for(let i=1; i<= 10; i++) {
    console.log(i);
}

/*3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)*/

for (var i = 0; i<= 10; i++) {
    if ((i % 2) != 0) {
        continue;
    }
    console.log(i);  
}

/*4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)*/

for (var i = 1; i<= 10; i++) {
    var count = 0;
    for (var j = 0; j < Math.floor(Math.random() * 10); j++) {
        count++;
    }
    console.log(count);
}

/*5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)*/

var arr = [];
while(arr.length <= 10){
    var r = Math.floor(Math.random() * 10) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);