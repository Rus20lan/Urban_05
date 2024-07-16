document.addEventListener('DOMContentLoaded', (e) => {
  const radioPanel = document.querySelector('.radio-panel'),
    darkRadio = radioPanel.querySelector('[id="dark"]'),
    lightRadio = radioPanel.querySelector('[id="light"]');
  radioPanel.style.backgroundColor = 'black';
  darkRadio.addEventListener('click', (e) => {
    if (radioPanel.style.backgroundColor === 'white') {
      radioPanel.style.backgroundColor = 'black';
    }
  });

  lightRadio.addEventListener('click', (e) => {
    if (radioPanel.style.backgroundColor === 'black') {
      radioPanel.style.backgroundColor = 'white';
    }
  });
});
