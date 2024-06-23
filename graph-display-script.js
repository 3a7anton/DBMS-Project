// graph-display-script.js

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const test = urlParams.get('test');
    const graphTitle = document.getElementById('graphTitle');
    const graphContent = document.getElementById('graphContent');

    if (test) {
        graphTitle.textContent = `${test.charAt(0).toUpperCase() + test.slice(1)} Graph`;
        // Fetch and display the graph data for the selected test
        // Example: fetch data and render graph using a library like Chart.js
        // For now, we will just display a placeholder text
        graphContent.textContent = `Graph for ${test}`;
    } else {
        graphTitle.textContent = 'No test selected';
        graphContent.textContent = 'Please go back and select a test.';
    }
});
