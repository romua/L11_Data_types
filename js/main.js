function forEach(arr, callback){
	for(var i=0; i<arr.length; i++){
		callback(arr[i]);
	}
}
function transform(el){return el*el}

function getTransformedArray(arr, callback){
	var arrOfTransformedItems = [];
	forEach(arr, function(ellement){
		arrOfTransformedItems.push(callback(ellement));
	});
	return arrOfTransformedItems;
}

var presidents = [{ name: 'George', surname: 'Kush' }, { name: 'Barako', surname: 'Obaame' }];

function pluckByAttribute(arrObj, label) {
	var result = [];
	getTransformedArray(arrObj, function(el){
		result.push(el[label]);
	});
	console.log(result);
	return result;

}

function cypherPhrase(obj, string){
	var inputMessage = [];
	var outputMessage = [];
	inputMessage = string.split('');
	console.log("input message:"+string);
	var i =0;
	getTransformedArray(inputMessage, function(el){
		outputMessage.push(obj[el] || inputMessage[i]);
		i++;	
	});
	console.log(outputMessage);
	return outputMessage.join('');

}

function decypherPhrase(obj, string){
	var newObj = {};
	for (var prop in obj) {
		newObj[obj[prop]]=prop;
	}
	console.log(obj);
	console.log(newObj);
	var inputMessage = [];
	var outputMessage = [];
	inputMessage = string.split('');
	console.log(inputMessage);
	var i =0;
	getTransformedArray(inputMessage, function(el){
		outputMessage.push(newObj[el] || inputMessage[i]);
		i++;	
	});

	return outputMessage.join('');
}


function getTopNRichestNames(number, arr){
	var dollars = {B: 1e9, M: 1e6, K: 1e3};
	var resultArrObj = [];
	var i = 0;
	var someArr = pluckByAttribute(arr, 'income');
	var arrOfNames = pluckByAttribute(arr, 'name' );
	console.log(someArr);
	getTransformedArray(someArr, function(el){
		var incomeChar = someArr[i].slice(someArr[i].length-1);
		console.log(incomeChar);
		var incomeNum = someArr[i].slice(0, someArr[i].length-1);
		console.log(incomeNum);
		console.log(incomeNum*dollars[incomeChar]);
		resultArrObj.push({ name: arrOfNames[i], income: incomeNum*dollars[incomeChar]});
		i++;	
	});
	resultArrObj.sort(function (a, b) {
		return b.income - a.income;
	});
	console.log(resultArrObj.slice(0, number));
}

var charactersMap = {a: 'o', c: 'd', t: 'g'};
var people = [
	{name: 'Bara', income: '1B'},
	{name: 'Dara', income: '500B'},
	{name: 'Kara', income: '1M'},
	{name: 'Zara', income: '2K'}
];

