document.addEventListener('DOMContentLoaded', function() {
    const diagnosisData = JSON.parse(localStorage.getItem('diagnosisData')) || [];

    const testOptionsContainer = document.getElementById('testOptions');
    const graphContainer = document.getElementById('myChart').getContext('2d');
    const messageContainer = document.getElementById('message');
    let currentChart = null;

    const testButtons = document.querySelectorAll('.test-option');

    testButtons.forEach(button => {
        button.addEventListener('click', function() {
            const test = this.getAttribute('data-test');
            const testData = diagnosisData.filter(data => data.testSelect === test);

            if (currentChart) {
                currentChart.destroy();
            }

            if (testData.length === 0) {
                messageContainer.textContent = `You did not have any report of this test.`;
                messageContainer.style.display = 'block';
                return;
            } else {
                messageContainer.style.display = 'none';
            }

            displayGraph(test, testData);
        });
    });

    function displayGraph(testName, testData) {
        const labels = testData.map(data => data.date);
        const dataSet = testData.map(data => {
            switch (testName) {
                case 'hemoglobine':
                    return data.parameters.hemoglobineLevel;
                case 'bloodSugar':
                    return data.parameters.fastingBloodSugar; // Assuming we show fasting blood sugar
                case 'cholesterol':
                    return data.parameters.totalCholesterol;
                case 'bloodPressure':
                    return data.parameters.systolicPressure; // Assuming we show systolic pressure
                case 'urineTest':
                    return data.parameters.urinePh; // Assuming we show urine pH
                default:
                    return null;
            }
        });

        currentChart = new Chart(graphContainer, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: testName,
                    data: dataSet,
                    backgroundColor: 'rgba(0, 123, 105, 0.2)',
                    borderColor: '#00796b',
                    borderWidth: 2
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
});
