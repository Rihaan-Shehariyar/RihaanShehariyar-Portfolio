function loadContent(page) {
  fetch(page)
    .then(res => res.text())
    .then(html => {
      document.querySelector('.home').innerHTML = html;

      if (page.includes('contact')) setupEmailJS();
    });
}

function setupEmailJS() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_hxglee4", "template_it4bpmr", this)
      .then(() => {
        alert("Message sent!");
        form.reset();
      })
      .catch(error => {
        console.error("EmailJS error:", error);
        alert("Failed to send message.");
      });
  });
}


