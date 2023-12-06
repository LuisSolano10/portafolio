document.addEventListener('DOMContentLoaded', function () {
  const elementsToTranslate = document.querySelectorAll('[data-translate-en]');
  const changeLanguageBtn = document.getElementById('changeLanguageBtn');
  const currentLanguage = localStorage.getItem('currentLanguage');

  let lenguage = 'es';

  if (currentLanguage === null || currentLanguage === undefined) {
    localStorage.setItem('currentLanguage', 'es');
  } else {
    if (localStorage.getItem('currentLanguage') === 'es') {
      for (const phrase of elementsToTranslate) {
        const translation = phrase.getAttribute('data-translate-es');
        phrase.textContent = translation;
      }
      document.getElementById('downloadCV').href = '../cv/cv_es.png';
      localStorage.setItem('currentLanguage', 'es');
    } else {
      for (const phrase of elementsToTranslate) {
        const translation = phrase.getAttribute('data-translate-en');
        phrase.textContent = translation;
      }
      document.getElementById('downloadCV').href = '../cv/cv_ens.png';
      localStorage.setItem('currentLanguage', 'en');
    }
  }

  changeLanguageBtn.addEventListener('click', function () {
    if (lenguage === 'es') {
      for (const phrase of elementsToTranslate) {
        const translation = phrase.getAttribute('data-translate-en');
        phrase.textContent = translation;
      }
      document.getElementById('downloadCV').href = '../cv/cv_en.png';
      lenguage = 'en';
      localStorage.setItem('currentLanguage', 'en');
    } else {
      for (const phrase of elementsToTranslate) {
        const translation = phrase.getAttribute('data-translate-es');
        phrase.textContent = translation;
      }
      document.getElementById('downloadCV').href = '../cv/cv_es.png';
      lenguage = 'es';
      localStorage.setItem('currentLanguage', 'es');
    }
  })
})