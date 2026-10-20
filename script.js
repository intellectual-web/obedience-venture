document.addEventListener("DOMContentLoaded", function () {
const whatsappButton = document.getElementById("send-whatsapp");

if (!whatsappButton) {
    console.error("WhatsApp button not found.");
    return;
}

whatsappButton.addEventListener("click", function () {
    const phoneNumber = "2348088435813";

    const message = "Hello Obedience Ventures, I would like to make an enquiry.";

    const whatsappURL =
        "https://wa.me/" + phoneNumber +
        "?text=" + encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
});

});
