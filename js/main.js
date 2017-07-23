function forEach(arr, callback){
	for(var i=0; i<arr.length; i++){
		callback(arr[i]);
	}
}

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
	return result;
}

function cypherPhrase(obj, string){
	var inputMessage = [];
	var outputMessage = [];
	inputMessage = string.split('');
	console.log(inputMessage);
	var i =0;
	getTransformedArray(inputMessage, function(el){
		outputMessage.push(obj[el] || inputMessage[i]);
		i++;	
	});
	
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



var charactersMap = {a: 'o', c: 'd', t: 'g'}
 //cypherPhrase( charactersMap, 'kiggy dog' );
