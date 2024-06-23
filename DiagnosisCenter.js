document.addEventListener('DOMContentLoaded', () => {
    const centers = [
        { name: 'Apollo Diagnostics', city: 'Dhaka', services: 'Blood Test, MRI, CT Scan', contact: '1234567890' },
        { name: 'Popular Diagnostics', city: 'Chittagong', services: 'X-Ray, Blood Test', contact: '0987654321' },
        { name: 'Square Diagnostics', city: 'Sylhet', services: 'Ultrasound, Blood Test', contact: '1122334455' },
        { name: 'United Diagnostics', city: 'Khulna', services: 'CT Scan, Blood Test', contact: '2233445566' },
        { name: 'Lab Aid Diagnostics', city: 'Rajshahi', services: 'MRI, Ultrasound', contact: '3344556677' },
        { name: 'Diagnostic World', city: 'Barisal', services: 'X-Ray, Blood Test', contact: '4455667788' },
        { name: 'Health Check Diagnostics', city: 'Rangpur', services: 'CT Scan, MRI', contact: '5566778899' },
        { name: 'Care Diagnostics', city: 'Mymensingh', services: 'Blood Test, Ultrasound', contact: '6677889900' },
        { name: 'Elite Diagnostics', city: 'Dhaka', services: 'X-Ray, CT Scan', contact: '7788990011' },
        { name: 'Prime Diagnostics', city: 'Chittagong', services: 'MRI, Blood Test', contact: '8899001122' },
        { name: 'Excel Diagnostics', city: 'Sylhet', services: 'Ultrasound, X-Ray', contact: '9900112233' },
        { name: 'Modern Diagnostics', city: 'Khulna', services: 'Blood Test, CT Scan', contact: '1001122344' },
        { name: 'Total Care Diagnostics', city: 'Rajshahi', services: 'MRI, Ultrasound', contact: '1112233455' },
        { name: 'Super Diagnostics', city: 'Barisal', services: 'X-Ray, Blood Test', contact: '1223344566' },
        { name: 'Pro Health Diagnostics', city: 'Rangpur', services: 'CT Scan, MRI', contact: '1334455677' },
        { name: 'Advanced Diagnostics', city: 'Mymensingh', services: 'Blood Test, Ultrasound', contact: '1445566788' },
        { name: 'MediScan Diagnostics', city: 'Dhaka', services: 'X-Ray, CT Scan', contact: '1556677899' },
        { name: 'Wellness Diagnostics', city: 'Chittagong', services: 'MRI, Blood Test', contact: '1667788900' },
        { name: 'Vital Diagnostics', city: 'Sylhet', services: 'Ultrasound, X-Ray', contact: '1778899011' },
        { name: 'Trust Diagnostics', city: 'Khulna', services: 'Blood Test, CT Scan', contact: '1889900122' },
        { name: 'Excel Health Diagnostics', city: 'Rajshahi', services: 'MRI, Ultrasound', contact: '1990011233' },
        { name: 'Diagnostic Hub', city: 'Barisal', services: 'X-Ray, Blood Test', contact: '2001122344' },
        { name: 'Prime Health Diagnostics', city: 'Rangpur', services: 'CT Scan, MRI', contact: '2112233455' },
        { name: 'Care Point Diagnostics', city: 'Mymensingh', services: 'Blood Test, Ultrasound', contact: '2223344566' },
        { name: 'First Choice Diagnostics', city: 'Dhaka', services: 'X-Ray, CT Scan', contact: '2334455677' },
        { name: 'Star Diagnostics', city: 'Chittagong', services: 'MRI, Blood Test', contact: '2445566788' },
        { name: 'Pathway Diagnostics', city: 'Sylhet', services: 'Ultrasound, X-Ray', contact: '2556677899' },
        { name: 'Bright Diagnostics', city: 'Khulna', services: 'Blood Test, CT Scan', contact: '2667788900' },
        { name: 'Global Diagnostics', city: 'Rajshahi', services: 'MRI, Ultrasound', contact: '2778899011' },
        { name: 'Future Diagnostics', city: 'Barisal', services: 'X-Ray, Blood Test', contact: '2889900122' },
        { name: 'Vision Diagnostics', city: 'Rangpur', services: 'CT Scan, MRI', contact: '2990011233' },
        { name: 'Complete Diagnostics', city: 'Mymensingh', services: 'Blood Test, Ultrasound', contact: '3001122344' }
    ];

    function displayCenters(filteredCenters) {
        const centerList = document.getElementById('center-list');
        centerList.innerHTML = '';
        filteredCenters.forEach(center => {
            const centerDiv = document.createElement('div');
            centerDiv.className = 'center';
            centerDiv.innerHTML = `
                <h3>${center.name}</h3>
                <p>City: ${center.city}</p>
                <a href="center-details.html?name=${encodeURIComponent(center.name)}&city=${encodeURIComponent(center.city)}&services=${encodeURIComponent(center.services)}&contact=${encodeURIComponent(center.contact)}">View Details</a>
            `;
            centerList.appendChild(centerDiv);
        });
    }

    function filterCenters() {
        const city = document.getElementById('city').value;
        const filteredCenters = city === 'all' ? centers : centers.filter(center => center.city === city);
        displayCenters(filteredCenters);
    }

    function searchCenter() {
        const searchQuery = document.getElementById('center').value.toLowerCase();
        const filteredCenters = centers.filter(center => center.name.toLowerCase().includes(searchQuery));
        displayCenters(filteredCenters);
    }

    // Initial display of all centers
    displayCenters(centers);

    // Expose functions to global scope
    window.filterCenters = filterCenters;
    window.searchCenter = searchCenter;
});
