const apiKey = 'YOUR_API_KEY';

const hospitals = [
    { name: "Dhaka Medical College", city: "Dhaka", capacity: 2000, contact: "1234567890", icuBeds: 100 },
    { name: "Bangabandhu Sheikh Mujib Medical University", city: "Dhaka", capacity: 1500, contact: "0987654321", icuBeds: 80 },
    { name: "Square Hospital", city: "Dhaka", capacity: 1200, contact: "2233445566", icuBeds: 70 },
    { name: "Apollo Hospital Dhaka", city: "Dhaka", capacity: 1000, contact: "3344556677", icuBeds: 60 },
    { name: "United Hospital", city: "Dhaka", capacity: 800, contact: "4455667788", icuBeds: 50 },
    { name: "Holy Family Red Crescent Medical College Hospital", city: "Dhaka", capacity: 750, contact: "5566778899", icuBeds: 40 },
    { name: "Ibrahim Cardiac Hospital & Research Institute", city: "Dhaka", capacity: 600, contact: "6677889900", icuBeds: 30 },
    { name: "National Heart Foundation Hospital & Research Institute", city: "Dhaka", capacity: 700, contact: "7788990011", icuBeds: 35 },
    { name: "Chittagong Medical College Hospital", city: "Chittagong", capacity: 1800, contact: "8899001122", icuBeds: 90 },
    { name: "Evercare Hospital Chittagong", city: "Chittagong", capacity: 1400, contact: "9900112233", icuBeds: 75 },
    { name: "Royal Hospital Chittagong", city: "Chittagong", capacity: 1100, contact: "0011223344", icuBeds: 50 },
    { name: "CSCR (Pvt.) Ltd Hospital", city: "Chittagong", capacity: 900, contact: "1122334455", icuBeds: 40 },
    { name: "Parkview Hospital", city: "Chittagong", capacity: 850, contact: "2233445566", icuBeds: 35 },
    { name: "Max Hospital and Diagnostic", city: "Chittagong", capacity: 800, contact: "3344556677", icuBeds: 30 },
    { name: "Sylhet MAG Osmani Medical College", city: "Sylhet", capacity: 1000, contact: "4455667788", icuBeds: 50 },
    { name: "North East Medical College & Hospital", city: "Sylhet", capacity: 700, contact: "5566778899", icuBeds: 35 },
    { name: "Jalalabad Ragib-Rabeya Medical College Hospital", city: "Sylhet", capacity: 600, contact: "6677889900", icuBeds: 30 },
    { name: "Ibn Sina Hospital Sylhet", city: "Sylhet", capacity: 500, contact: "7788990011", icuBeds: 25 },
    { name: "Khulna Medical College Hospital", city: "Khulna", capacity: 1200, contact: "8899001122", icuBeds: 70 },
    { name: "Gazi Medical College Hospital", city: "Khulna", capacity: 900, contact: "9900112233", icuBeds: 45 },
    { name: "Ad-din Akij Medical College Hospital", city: "Khulna", capacity: 800, contact: "0011223344", icuBeds: 40 },
    { name: "Islami Bank Hospital Khulna", city: "Khulna", capacity: 700, contact: "1122334455", icuBeds: 35 },
    { name: "Rajshahi Medical College Hospital", city: "Rajshahi", capacity: 1300, contact: "2233445566", icuBeds: 60 },
    { name: "Islami Bank Medical College Hospital", city: "Rajshahi", capacity: 800, contact: "3344556677", icuBeds: 40 },
    { name: "Barisal Sher-e-Bangla Medical College", city: "Barisal", capacity: 1100, contact: "4455667788", icuBeds: 50 },
    { name: "Rangpur Medical College Hospital", city: "Rangpur", capacity: 900, contact: "5566778899", icuBeds: 30 },
    { name: "Prime Medical College Hospital", city: "Rangpur", capacity: 700, contact: "6677889900", icuBeds: 25 },
    { name: "Mymensingh Medical College Hospital", city: "Mymensingh", capacity: 800, contact: "7788990011", icuBeds: 20 },
    { name: "Community Based Medical College Hospital", city: "Mymensingh", capacity: 600, contact: "8899001122", icuBeds: 15 },
    { name: "Combined Military Hospital (CMH) Dhaka", city: "Dhaka", capacity: 1500, contact: "9900112233", icuBeds: 80 },
    { name: "Birdem General Hospital", city: "Dhaka", capacity: 1400, contact: "0011223344", icuBeds: 70 },
    { name: "Kurmitola General Hospital", city: "Dhaka", capacity: 1300, contact: "1122334455", icuBeds: 60 },
    { name: "National Institute of Cardiovascular Diseases", city: "Dhaka", capacity: 1200, contact: "2233445566", icuBeds: 60 },
    { name: "National Institute of Neurosciences & Hospital", city: "Dhaka", capacity: 1000, contact: "3344556677", icuBeds: 50 },
    { name: "Ahsania Mission Cancer & General Hospital", city: "Dhaka", capacity: 900, contact: "4455667788", icuBeds: 45 },
    { name: "Dhaka Shishu Hospital", city: "Dhaka", capacity: 800, contact: "5566778899", icuBeds: 40 },
    { name: "Mugda Medical College Hospital", city: "Dhaka", capacity: 700, contact: "6677889900", icuBeds: 30 }
];

window.onload = function() {
    displayHospitals(hospitals);
};

function displayHospitals(hospitals) {
    const hospitalList = document.getElementById('hospital-list');
    hospitalList.innerHTML = '';
    hospitals.forEach(hospital => {
        const hospitalBlock = document.createElement('div');
        hospitalBlock.className = 'hospital-block';
        const backgroundImageUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${encodeURIComponent(hospital.name + ', ' + hospital.city)}&zoom=15&size=400x300&key=${apiKey}`;
        hospitalBlock.style.backgroundImage = `url(${backgroundImageUrl})`;
        hospitalBlock.innerHTML = `
            <a href="hospital_detail.html?name=${encodeURIComponent(hospital.name)}&city=${encodeURIComponent(hospital.city)}&capacity=${hospital.capacity}&contact=${hospital.contact}&icuBeds=${hospital.icuBeds}">
                <div class="hospital-info">
                    <h3>${hospital.name}</h3>
                    <p>Capacity: ${hospital.capacity}</p>
                    <p>Contact: ${hospital.contact}</p>
                </div>
            </a>
        `;
        hospitalList.appendChild(hospitalBlock);
    });
}

function filterHospitals() {
    const city = document.getElementById('city').value.toLowerCase();
    const filteredHospitals = city === 'all' ? hospitals : hospitals.filter(hospital => hospital.city.toLowerCase() === city);
    displayHospitals(filteredHospitals);
}

function searchHospital() {
    const searchText = document.getElementById('hospital').value.toLowerCase();
    const filteredHospitals = hospitals.filter(hospital => hospital.name.toLowerCase().includes(searchText));
    if (filteredHospitals.length > 0) {
        displayHospitals(filteredHospitals);
    } else {
        document.getElementById('hospital-list').innerHTML = '<p>Sorry, no results matched</p>';
    }
}