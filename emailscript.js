document.getElementById('emailForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const recipientEmail = document.getElementById('recipientEmail').value;
    const qrCodeContainer = document.getElementById('qrcode');
    const qrCodeImageUrl = qrCodeContainer.querySelector('img').src;

    const formData = {
        name: localStorage.getItem('name'),
        email: localStorage.getItem('email'),
        phone: localStorage.getItem('phone'),
        address: localStorage.getItem('address'),
        recipientEmail: recipientEmail,
        qrCodeImageUrl: qrCodeImageUrl
    };

    fetch('/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        const statusDiv = document.getElementById('emailStatus');
        statusDiv.innerHTML = data.message;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
