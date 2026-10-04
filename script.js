function toggleMenu() {

    const nav = document.getElementById("navMenu");

    nav.classList.toggle("show");

}


function sendWhatsApp(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    const phone =
        document.getElementById("phone").value;

    const service =
        document.getElementById("service").value;

    const date =
        document.getElementById("date").value || "Not specified";


    const message =
`Hello Habib Salon,

I would like to request an appointment.

Name: ${name}
Phone: ${phone}
Service: ${service}
Preferred Date: ${date}

Please let me know the available appointment time.`;

    const whatsappURL =
        "https://wa.me/919818900694?text=" +
        encodeURIComponent(message);

    window.open(whatsappURL, "_blank");

}