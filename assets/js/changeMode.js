document.addEventListener("DOMContentLoaded", function () {
  const changeMode = document.querySelector('#toggleModeBtn');
  const modeText = document.querySelector('#modeText');
  const body = document.querySelector('body')
  const logoImg = body.querySelector("#logoMode");
  const lsCurrentMode = localStorage.getItem('mode');

  if (lsCurrentMode === null || lsCurrentMode === undefined) {
    localStorage.setItem('mode', 'dark_mode');
  } else {
    if (localStorage.getItem('mode') === 'light_mode') {
        modeText.textContent = 'dark_mode';
        body.classList.remove('body--dark');
        logoImg.src = "./assets/img/logo_lm.png";
        logoImg.alt = "Logo Light Mode";
        localStorage.setItem('mode', 'light_mode');
    } else {
        modeText.textContent = 'light_mode';
        body.classList.add('body--dark');
        logoImg.src = "./assets/img/logo_dm.png";
        logoImg.alt = "Logo Dark Mode";
        localStorage.setItem('mode', 'dark_mode');
    }
  }

  changeMode.addEventListener('click', function (e) {
    const currentMode = modeText.textContent.trim();

    if (currentMode === 'light_mode') {
      modeText.textContent = 'dark_mode';
      body.classList.remove('body--dark');
      logoImg.src = "./assets/img/logo_lm.png";
      logoImg.alt = "Logo Light Mode";
      localStorage.setItem('mode', 'light_mode');
    } else {
      modeText.textContent = 'light_mode';
      body.classList.add('body--dark');
      logoImg.src = "./assets/img/logo_dm.png";
      logoImg.alt = "Logo Dark Mode";
      localStorage.setItem('mode', 'dark_mode');
    }
  });
})