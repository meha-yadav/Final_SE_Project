document.getElementById('registrationForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = {
        companyName: document.getElementById('companyName').value,
        sector: document.getElementById('sector').value,
        companySize: document.getElementById('companySize').value,
        corporateID: document.getElementById('corporateID').value,
        address: document.getElementById('address').value,
        estYear: document.getElementById('estYear').value
    };

    const response = await fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    });

    const result = await response.json();
    document.getElementById('message').innerText = result.message;
});
