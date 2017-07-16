var sortButton = document.getElementById('sortButton');
var clearButton = document.getElementById('clearButton');
//var vowelButton = document.getElementById('vowelButton');

sortButton.onclick = sortWords;
clearButton.onclick = clearWords;
//vowelButton.onclick = isVowel(document.getElementById('sortThis'));

function sortWords() {

	var words = document.getElementById('sortThis').value;

	if (words != "") {

		words = words.toLowerCase();

		words = words.split(" ");

		words = words.sort();

		words = showSort(words);
		
		document.getElementById('sorted').innerHTML = words;

		sortButton.style.display = 'none';
		clearButton.style.display = 'block';
	} 
}

function showSort(words) {

	var wordArrayLength = words.length;
	var outputString = "<ol>";
	
	for (i = 0; i < wordArrayLength; i++) {

		outputString += "<li>"+words[i]+"</li>";
		//isVowel(words[i]);
	}

	outputString += "</ol>";

	return outputString;
} 

function clearWords() {
	document.getElementById('sortThis').value = "";
	document.getElementById('sorted').innerHTML = "";
	clearButton.style.display = 'none';
	sortButton.style.display = 'block';
}

function isVowel(word) {
	var vowels = ["a","e","i","o","u"];
	wordLength = word.length;
	
	for (i=0; i < wordLength; i++) {
		if ($.inArray(word[i], vowels) != -1) {
			word[i] = "<span>"+word[i]+"</span>";
			alert(word[i]);
		}
	}
	return word;
}