document.getElementById('qrForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    const qrData = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}`;

    const qrCodeContainer = document.getElementById('qrcode');
    qrCodeContainer.innerHTML = ''; 
    new QRCode(qrCodeContainer, {
        text: qrData,
        width: 256,
        height: 256,
        colorDark : "#000000",
        colorLight : "#ffffff",
    });
    qrCodeContainer.classList.add('show');
});
