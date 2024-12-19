

var correct_answers = [
	1,
	2,
	0,
	1,
	2,
]

var eco_choices = [
	[
		'Est menacée de disparition', 'Progresse de 100 000 hectares par an', 'N’absorbe plus de CO<sub>2</sub>'
	],
	[
		'Pour combattre le racisme', 'Par le couple Mitterrand-Merkel', 'Lors de la Conférence de Rio en 1992'
	],
	[
		'La plus importante diversité de faune et de flore', 'Tous les animaux sans-abri', 'Tous les insectes du monde entier'
	],
	[
		'À cause des hommes', 'Bien avant que les hommes apparaissent', 'Depuis le bug de l’an 2000'
	],
	[
		'Une théorie économique appliquée à la lettre', 'Un réservoir de biodiversité', 'Un ensemble formé par une communauté d’êtres vivants en interrelation  avec son environnement'
	],
]

var eco_questions = [
	'Au XXI<sup>e</sup> siècle, la forêt française&#8239;:',
	'Le terme de biodiversité a été adopté&#8239;:',
	'Les forêts accueillent&#8239;:',
	'Des millions d’espèces ont disparu&#8239;:',
	'Un écosystème est&#8239;:',
]


function showQuestion(question_number) {
	$('.m2-question').empty();
	$('.m2-question-title').html(eco_questions[question_number]);
	var choices = eco_choices[question_number];
	for(let i=0;i < choices.length ; i++) {

		// $('#eco-ans-box').append('<div>' + choices[i] + '</div>');

		if([i] == correct_answers[question_number]) {
			$('.m2-question').append('<div class="correct"><p>' + choices[i] + '</p></div>');
		} else {
			$('.m2-question').append('<div class="uncorrect"><p>' + choices[i] + '</p></div>');
		}
	}

	$('.m2-question-title').html(eco_questions[question_number]);
}


// quiz
$(document).ready(function(){

	let question_count = localStorage.getItem('current_question') || 0;
	showQuestion(question_count);
	var id;
	

	$(document).on('click', '.m2-question .correct', function(){
		$('.m2-question .correct').addClass("twinkle animated");
		$('.m2-question .correct').prepend('<img id="happy-img" src="assets/images/happy.png" />');
		$('.m2-question .correct, .m2-question .uncorrect').addClass("disable_click");

		// window.setTimeout(function(){$('.m2-det-q-wrapper').addClass('animate_from_top');},3001);
		// window.setTimeout(function(){$('.m2-det-q-wrapper').removeClass('animate_from_top');},4001);

		question_count++;
		if(question_count == 5) {
			// 
			setTimeout(function(){ 
				$('.m2-quiz1 .m2-iden-quiz1').addClass('ds-none');
				$('#m2-iden-quiz1').empty();
				$('.m2-question').empty();
				$('.m2-question-title').empty();
				$('.m2-question').css('text-align','center');
				$('.m2-question').prepend('<img class="m2-bravo" src="assets/images/bravo.png" />');
			}, 3001);
		} else {
			setTimeout(function(){ 
				showQuestion(question_count); 
				var next_identicator = $('div.identicator-active');
				next_identicator.next().addClass("identicator-active");
				next_identicator.removeClass('identicator-active');
			}, 3000);
		}
	});

	$(document).on('click', '.uncorrect', function(){
		$(this).addClass("twinkle2 animated");
		$(this).prepend('<img id="happy-img" src="assets/images/sad.png" />');
		$('.correct, .uncorrect').addClass("disable_click");

		setTimeout(function(){
			$('.uncorrect').removeClass("twinkle2 animated");
			$("#happy-img").remove();
			$('.correct, .uncorrect').removeClass("disable_click");
		}, 2000);
		
		if(question_count == 5) {
			// 
		} else {
			// setTimeout(function() { showQuestion(question_count); }, 4000);
		} 
	});

	$(document).on('click', '.m2-set-one', function(){
		id = $(this).data('id');
		showQuestion(id);
		$(this).addClass('identicator-active');
		$('div.m2-set-one').not(this).removeClass('identicator-active');
		// $('.m2-det-q-wrapper').addClass('animate_from_top');
		// window.setTimeout(function(){$('.m2-det-q-wrapper').removeClass('animate_from_top');},1000);
	});
});


// Set 
var correct_answers2 = [
	2,
	1,
	2,
	0,
	1,
]

var eco_choices2 = [
	[
		'La messe des morts', 'Ce qu’un arbre rejette dans l’atmosphère', 'La matière organique morte'
	],
	[
		'Au vent', 'À la photosynthèse et la respiration des arbres', 'À la décomposition de la biomasse'
	],
	[
		'Les feuilles des arbres', 'Les puits de carbone', 'Les aulnes et les légumineuses'
	],
	[
		'2000 millions de tonnes de carbone', '400 millions de tonnes de carbone', 'D’immenses quantités de pétrole'
	],
	[
		'À une récente découverte médicale selon laquelle les arbres ont beaucoup de gènes en commun avec les hommes', 'À l’équilibre entre l’exploitation des forêts et la chasse', 'À un très ancien mythe sur l’apparition des forêts'
	],
]

var eco_questions2 = [
	'La nécromasse est&#8239;:',
	'Le carbone tourne continuellement dans la biosphère grâce&#8239;:',
	'L’azote de l’air est capté par&#8239;:',
	'Les forêts françaises stockent&#8239;:',
	'Le terme “sylvocynégénétique” se rapporte&#8239;:',
]

function showQuestion2(question_number2) {
	$('.m2-question2').empty();
	$('.m2-question-title2').html(eco_questions[question_number2]);
	var choices2 = eco_choices2[question_number2];
	for(let l=0;l < choices2.length ; l++) {

		// $('#eco-ans-box').append('<div>' + choices2[i] + '</div>');

		if([l] == correct_answers2[question_number2]) {
			$('.m2-question2').append('<div class="correct"><p>' + choices2[l] + '</p></div>');
		} else {
			$('.m2-question2').append('<div class="uncorrect"><p>' + choices2[l] + '</p></div>');
		}
	}

	$('.m2-question-title2').html(eco_questions2[question_number2]);
}

// quiz2
$(document).ready(function(){

	let question_count2 = localStorage.getItem('current_question') || 0;
	showQuestion2(question_count2);
	var id;
	

	$(document).on('click', '.m2-det-q-wrapper2 .correct', function(){
		$('.m2-det-q-wrapper2 .correct').addClass("twinkle animated");
		$('.m2-det-q-wrapper2 .correct').prepend('<img id="happy-img" src="assets/images/happy.png" />');
		$('.m2-det-q-wrapper2 .correct, .m2-det-q-wrapper2 .uncorrect').addClass("disable_click");

		question_count2++;
		if(question_count2 == 5) {
			// 
			setTimeout(function(){ 
				$('.m2-quiz2 .m2-iden-quiz2').addClass('ds-none');
				$('.m2-question-title2').empty();
				$('.m2-question2').empty();
				$('.m2-question2').css('text-align','center');
				$('.m2-question2').prepend('<img class="m2-bravo" src="assets/images/bravo.png" />');
			}, 3001);
		} else {
			setTimeout(function(){ 
				showQuestion2(question_count2); 
				var next_identicator2 = $('div.identicator-active2');
				next_identicator2.next().addClass("identicator-active2");
				next_identicator2.removeClass('identicator-active2');
			}, 3000);
		}
	});

	$(document).on('click', '.m2-question2 .uncorrect', function(){
		$(this).addClass("twinkle2 animated");
		$(this).prepend('<img id="happy-img" src="assets/images/sad.png" />');
		$('.correct, .uncorrect').addClass("disable_click");
		setTimeout(function(){
			$('.uncorrect').removeClass("twinkle2 animated");
			$("#happy-img").remove();
			$('.correct, .uncorrect').removeClass("disable_click");
		}, 2000);
		
		if(question_count2 == 5) {
			// 
		} else {
			// setTimeout(function() { showQuestion2(question_count2); }, 4000);
		} 
	});

	$(document).on('click', '.m2-set-two', function(){
		id = $(this).data('id');
		showQuestion2(id);
		$(this).addClass('identicator-active2');
		$('div.m2-set-two').not(this).removeClass('identicator-active2');
	});
});


$(document).ready(function(){
	$(document).on('click', '.valk', function(){
		$('.m2text-click').toggle();
		$('.m2-text-toggle').toggle();
	});
});

