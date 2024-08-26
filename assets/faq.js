  
function toggleAnswer(question) {
    var answer = question.querySelector('.answer');

    if (answer.classList.contains('active')) {
        answer.classList.remove('active');
        question.classList.remove('active'); // Voeg deze regel toe
    } else {
        // Verwijder eerst de 'active'-klasse van alle antwoorden en vragen
        var allAnswers = document.querySelectorAll('.answer');
        var allQuestions = document.querySelectorAll('.question');
        allAnswers.forEach(function (otherAnswer) {
            otherAnswer.classList.remove('active');
        });
        allQuestions.forEach(function (otherQuestion) {
            otherQuestion.classList.remove('active');
        });

        // Voeg vervolgens de 'active'-klasse toe aan het huidige antwoord en vraag
        answer.classList.add('active');
        question.classList.add('active'); // Voeg deze regel toe
    }
}

function searchFAQ() {
    var input = document.getElementById('search').value.toLowerCase();
    var categories = document.querySelectorAll('.category');

    categories.forEach(function(category) {
        var questions = category.querySelectorAll('.question');
        
        questions.forEach(function(question) {
            var text = question.textContent.toLowerCase();

            if (text.includes(input)) {
                category.style.display = 'block';
                question.style.display = 'block';
            } else {
                question.style.display = 'none';
            }
        });

        // Laat de categorie zien als er overeenkomende vragen zijn, anders verberg deze
        var visibleQuestions = category.querySelectorAll('.question[style="display: block;"]');
        category.style.display = visibleQuestions.length > 0 ? 'block' : 'none';
    });
}

document.getElementById('search').addEventListener('input', searchFAQ);