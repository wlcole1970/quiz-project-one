// 2 dimensional array of questions and answers

var questions = [
	[ 'How many states are in the United States?', 50 ],
	[ 'How many continents are there?', 7 ],
	[ 'How many legs does an insect have?', 6 ]
];

//variables to be used

var correctAnswers = 0;
var question;
var answer;
var response;
var correct = [];
var wrong = [];
var html;

//funtion to print to webpage
function print(message) {
	var outputDiv = document.getElementById('output');
	outputDiv.innerHTML = message;
}
function buildList(arr) {
	var listHtml = '<ol>';
	for (var i = 0; i < arr.length; i++) {
		listHtml += '<li>' + arr[i] + '</li>';
	}
	listHtml += '</ol>';
	return listHtml;
}

//loops through array to ask questions

for (var i = 0; i < questions.length; i += 1) {
	question = questions[i][0];
	answer = questions[i][1];

	// converts answer string to a number
	response = parseInt(prompt(question));

	if (response === answer) {
		correctAnswers += 1;
		correct.push(question);
	} else {
		wrong.push(question);
	}
}
html = 'You got ' + correctAnswers + ' questions(s) correct.';
html += '<h2>You answer the following question(s) correctly!: </h2>';
html += buildList(correct);
html += '<h2>Sadly, you answered the following question(s) incorrrectly :-( : </h2>';
html += buildList(wrong);

print(html);
