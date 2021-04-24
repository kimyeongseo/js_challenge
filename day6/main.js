let countryForm = document.getElementById('country');

if (!localStorage.getItem('country')) {
    populateStorage();
} else {
    saveCountry();
}

function populateStorage() {
    localStorage.setItem('country', document.getElementById('country').value);

    saveCountry();
}

function saveCountry() {
    let currentCountry = localStorage.getItem('country');

    document.getElementById('country').value = currentCountry;
}

countryForm.onchange = populateStorage;