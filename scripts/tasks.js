// 1) Написать функцию getFieldValues, которая будет принимать на вход массив объектов, 
// а возвращать будет массив значений одного из полей (отсортированных в порядке возрастания):

var usersData = [
	{ 'user' : 'Alex', 'password' : 'MyNameIsAlex' },
	{ 'user' : 'Bob', 'password' : 'MyNAmeIsBob' }
];
console.log(getFieldValues(usersData, 'user')); // --> ['Alex', 'Bob']



function getFieldValues(usersData, Str){
var finalArray=[]; 
for(var i=0;i<usersData.length;i++){
	finalArray[i]=usersData[i][Str]; 
}
var control=1;
while(control!=0){
	control=0;
	for(var i=0;i<finalArray.length-1;i++){
	if (finalArray[i]>finalArray[i+1]){
			var buffer=finalArray[i];
				finalArray[i]=finalArray[i+1];  
				finalArray[i+1]=buffer;
				control++;
		}
	}
}
return finalArray;
}


// 2) Написать функцию, фильтрующую массив с использованием предиката:

var numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];
function isEven(x) {/* Проверка на чётность */}
console.log(filter(numbers, isEven)); // --> [2, 8, 34]


function isEven(x) { 
	if (x%2==0){
			return x;
		}
}

// 3) Даны 2 строки со словами (без знаков препинания), 
// вывести те слова (по одному разу), которые встречаются в обоих строках

var firstLongString = 'Load up on guns and bring your friends it\'s fun to lose and to pretend';
var secondLongString = 'She\'s over bored and self assured oh no I know a dirty word';
console.log(findSimilarWords(firstLongString, secondLongString)); // --> ['and'];


function makeArray(words){ 
    var wordsArray=[];
    var j=0,start=0,current=0;
	for(var i=0;i<words.length;i++){
		if (words[i]==' '){
		    current=i-start;
		    wordsArray[j]=words.substr(start,current);
		     start=i+1;
		    j++;
		}
		if(i==words.length){
		    wordsArray[j]=words.substr(start);
		}
	}
	return wordsArray;
}

function findSimilarWords(firstLongString, secondLongString){
var firstWordsList=makeArray(firstLongString);
var secondWordsList=makeArray(secondLongString);
for(var i=0;i<firstWordsList.length;i++){
	var j=0;
	while(j!=secondWordsList.length){
			if(secondWordsList[j]==firstWordsList[i]){
				return firstWordsList[i] ;break;		
			}
			j++;	
		}
	}

}

// 4) Дан IP-адрес (строка) и маска подсети (десятичное число). Написать функцию, которая будет валидировать
// IP-адрес (4 октета, <= 255), а затем выводить сетевой и широковещательный адреса:

var IpAddress = '10.223.98.2';
var subnetMask = 28;
console.log(generateBroadcastAndNetworsAddresses(IpAddress, subnetMask)); // Broadcast - 10.223.98.15, Network - 10.223.98.0


function generateBroadcastAndNetworsAddresses(Ip, subnetM)
{
    var adress=[];
    var j=0,start=0,current=0;
  for(var i=0;i<Ip.length;i++)
	{
		if (Ip[i]=='.')
		{
		    current=i-start;
		    adress[j]=Number(Ip.substr(start,current));
		     start=i+1;
		    j++;
		}
		if(i==Ip.length-1)
		{
		    adress[j]=Number(Ip.substr(start));
		}
	}
	var mask=Math.pow(2,8) - Math.pow(2,32-subnetM)
	 mask=mask.toString(2);
	 var last=adress[3].toString(2);
     adress[3]=last&mask
     console.log(adress);
     var broad=adress;
     broad[3]=adress[3]+Math.pow(2,32-subnetM)-1;
 	return broad; 
}

// 5) Соединить все массивы в один, не допуская повторения элементов (порядок не важен):
// P. S. 1 == '1' (строковое и числовое представление number'ов считать идентичными)

var totalMessArray = [['a', 1, true], [true, 99, 'aa', undefined], ['1']];

function makeItClean(totalMessArray){
	Array=totalMessArray[0];
	var fl=0;
	for(var i=1;i<totalMessArray.length;i++){
		for(var j=0;j<totalMessArray[i].length;j++){
				fl=0;
				for (var k=0;k<Array.length;k++){
					if(totalMessArray[i][j]==Array[k]){fl=1;}
				}
			if(fl==0){
				Array.push(totalMessArray[i][j]);
			}
		}
	}return Array;
}

console.log(makeItClean(totalMessArray)); // --> ['a', 'aa', 1, undefined, true];
