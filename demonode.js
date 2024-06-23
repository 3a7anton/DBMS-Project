const nextBtns = document.querySelectorAll('.next-btn');
const backBtns = document.querySelectorAll('.back-btn');
const formSteps = document.querySelectorAll('.form-step');
const form = document.getElementById('demographicForm');
const steps = document.querySelectorAll('.step');

let formStepNum = 0;

nextBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        formSteps[formStepNum].classList.remove('form-step-active');
        steps[formStepNum].classList.remove('step-active');
        formStepNum++;
        formSteps[formStepNum].classList.add('form-step-active');
        steps[formStepNum].classList.add('step-active');
    });
});

backBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        formSteps[formStepNum].classList.remove('form-step-active');
        steps[formStepNum].classList.remove('step-active');
        formStepNum--;
        formSteps[formStepNum].classList.add('form-step-active');
        steps[formStepNum].classList.add('step-active');
    });
});

steps.forEach((step, index) => {
    step.addEventListener('click', () => {
        formSteps[formStepNum].classList.remove('form-step-active');
        steps[formStepNum].classList.remove('step-active');
        formStepNum = index;
        formSteps[formStepNum].classList.add('form-step-active');
        steps[formStepNum].classList.add('step-active');
    });
});

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const patientData = {};

    formData.forEach((value, key) => {
        patientData[key] = value;
    });

    console.log('Patient Data:', patientData);

    alert('Form submitted successfully!');
});
