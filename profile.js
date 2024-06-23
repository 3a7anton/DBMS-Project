document.addEventListener("DOMContentLoaded", () => {
    const profileData = JSON.parse(localStorage.getItem("profileData"));
    if (profileData) {
        document.getElementById("profile-name").textContent = profileData.name;
        document.getElementById("profile-dob").textContent = profileData.dob;
        document.getElementById("profile-gender").textContent = profileData.gender;
        document.getElementById("profile-email").textContent = profileData.email;
        document.getElementById("profile-nationality").textContent = profileData.nationality;
        document.getElementById("profile-address").textContent = profileData.address;
        document.getElementById("profile-contact").textContent = profileData.contact;
        document.getElementById("profile-conditions").textContent = profileData.conditions;
        document.getElementById("profile-surgeries").textContent = profileData.surgeries;
        document.getElementById("profile-familyHistory").textContent = profileData.familyHistory;
        document.getElementById("profile-occupation").textContent = profileData.occupation;
        document.getElementById("profile-insurance").textContent = profileData.insurance;
        document.getElementById("profile-emergencyContact").textContent = profileData.emergencyContact;
        document.getElementById("profile-emergencyContactRelation").textContent = profileData.emergencyContactRelation;
        document.getElementById("profile-height").textContent = profileData.height;
        document.getElementById("profile-weight").textContent = profileData.weight;
    }
});
