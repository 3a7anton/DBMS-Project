let diagnosisData = [];

document.getElementById('fileInput').addEventListener('change', function() {
    const fileName = this.files[0]?.name;
    document.querySelector('.file-label').textContent = fileName || 'Upload Diagnosis Report';
});

document.getElementById('testSelect').addEventListener('change', function() {
    const selectedTest = this.value;
    const testParametersDiv = document.getElementById('testParameters');
    testParametersDiv.innerHTML = '';

    switch (selectedTest) {
        case 'hemoglobine':
            testParametersDiv.innerHTML = `
                <label for="hemoglobineLevel">Hemoglobine Level (g/dL):</label>
                <input type="number" id="hemoglobineLevel" placeholder="Enter hemoglobine level">
            `;
            break;
        case 'bloodSugar':
            testParametersDiv.innerHTML = `
                <label for="fastingBloodSugar">Fasting Blood Sugar (mg/dL):</label>
                <input type="number" id="fastingBloodSugar" placeholder="Enter fasting blood sugar level">
                <label for="postprandialBloodSugar">Postprandial Blood Sugar (mg/dL):</label>
                <input type="number" id="postprandialBloodSugar" placeholder="Enter postprandial blood sugar level">
            `;
            break;
        case 'cholesterol':
            testParametersDiv.innerHTML = `
                <label for="totalCholesterol">Total Cholesterol (mg/dL):</label>
                <input type="number" id="totalCholesterol" placeholder="Enter total cholesterol level">
                <label for="hdlCholesterol">HDL Cholesterol (mg/dL):</label>
                <input type="number" id="hdlCholesterol" placeholder="Enter HDL cholesterol level">
                <label for="ldlCholesterol">LDL Cholesterol (mg/dL):</label>
                <input type="number" id="ldlCholesterol" placeholder="Enter LDL cholesterol level">
            `;
            break;
        case 'bloodPressure':
            testParametersDiv.innerHTML = `
                <label for="systolicPressure">Systolic Pressure (mm Hg):</label>
                <input type="number" id="systolicPressure" placeholder="Enter systolic pressure">
                <label for="diastolicPressure">Diastolic Pressure (mm Hg):</label>
                <input type="number" id="diastolicPressure" placeholder="Enter diastolic pressure">
            `;
            break;
        case 'urineTest':
            testParametersDiv.innerHTML = `
                <label for="urinePh">Urine pH:</label>
                <input type="number" id="urinePh" step="0.1" placeholder="Enter urine pH level">
                <label for="urineGlucose">Urine Glucose (mg/dL):</label>
                <input type="number" id="urineGlucose" placeholder="Enter urine glucose level">
            `;
            break;
        default:
            testParametersDiv.innerHTML = 'Test related parameter according to dropdown';
    }
});

document.getElementById('saveDataButton').addEventListener('click', function() {
    const testSelect = document.getElementById('testSelect').value;
    const date = document.getElementById('datePicker').value;
    const diagnosisCenter = document.getElementById('diagnosisCenter').value;
    const fileInput = document.getElementById('fileInput').files[0]?.name;

    if (!testSelect || !date || !diagnosisCenter) {
        alert('Please fill out all fields.');
        return;
    }

    let parameters = {};

    switch (testSelect) {
        case 'hemoglobine':
            parameters.hemoglobineLevel = document.getElementById('hemoglobineLevel').value;
            break;
        case 'bloodSugar':
            parameters.fastingBloodSugar = document.getElementById('fastingBloodSugar').value;
            parameters.postprandialBloodSugar = document.getElementById('postprandialBloodSugar').value;
            break;
        case 'cholesterol':
            parameters.totalCholesterol = document.getElementById('totalCholesterol').value;
            parameters.hdlCholesterol = document.getElementById('hdlCholesterol').value;
            parameters.ldlCholesterol = document.getElementById('ldlCholesterol').value;
            break;
        case 'bloodPressure':
            parameters.systolicPressure = document.getElementById('systolicPressure').value;
            parameters.diastolicPressure = document.getElementById('diastolicPressure').value;
            break;
        case 'urineTest':
            parameters.urinePh = document.getElementById('urinePh').value;
            parameters.urineGlucose = document.getElementById('urineGlucose').value;
            break;
        default:
            parameters = {};
    }

    const data = {
        testSelect,
        date,
        diagnosisCenter,
        fileInput,
        parameters
    };

    diagnosisData.push(data);
    localStorage.setItem('diagnosisData', JSON.stringify(diagnosisData));
    alert('Data saved successfully!');
    location.reload();
});

document.getElementById('showGraphButton').addEventListener('click', function() {
    window.location.href = 'DiagnosisGraph.html';
});
