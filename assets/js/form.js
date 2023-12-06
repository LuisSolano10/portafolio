document.addEventListener('DOMContentLoaded', function () {
  const dialog = document.getElementById("dialog");
  const showButton = document.getElementById('contactMeBtn');
  const closeButton = document.getElementById("close_button");

  showButton.addEventListener("click", () => {
    dialog.showModal();
  });

  closeButton.addEventListener("click", () => {
    dialog.close();
  });

  const btnSend = document.getElementById('btn-send');
  const form = document.getElementById('form')

  btnSend.addEventListener('click', function (e) {
    e.preventDefault();

    const serviceID = 'service_yiun47q';
    const templateID = 'template_p24fyjl';

    emailjs.sendForm(serviceID, templateID, form)
      .then(() => {
        const msgAlert = (localStorage.getItem('currentLanguage') === 'es') ? 'Gracias por comunicarte conmigo, recibirás una respuesta pronto.' : 'Thank you for getting in touch with me, you will receive a response soon.';

        window.alert(msgAlert);
        form.reset();
        dialog.close();
      })
      .catch((error) => {
        alert(JSON.stringify(error));
      })
  })
})