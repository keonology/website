document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll('.faq-question');

    questions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Handle question submission
    const questionForm = document.getElementById('questionForm');
    const questionInput = document.getElementById('questionInput');
    const responseDiv = document.getElementById('response');

    questionForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission
        const userQuestion = questionInput.value;
        questionInput.value = ''; // Clear input field
        responseDiv.textContent = `Thank you for your question: "${userQuestion}"! We will get back to you shortly.`;
    });
});
