const gradients = [
  {
    odd: '#80FFEA',
    even: '#8AFF80',
  },
  {
    odd: '#FF80BF',
    even: '#9580FF',
  },
  {
    odd: '#9442FE',
    even: '#3378FF',
  },
  {
    odd: '#9580FF',
    even: '#80FFEA',
  },
];

function rotateLogoColor(index) {
  const oddColors = document.getElementsByClassName('logo-color-odd');
  const evenColors = document.getElementsByClassName('logo-color-even');

  setTimeout(() => {
    for (const color of oddColors) {
        color.style.setProperty('stop-color', gradients[index].odd);
      }
      for (const color of evenColors) {
        color.style.setProperty('stop-color', gradients[index].even);
      }

      index = index === gradients.length - 1 ? 0 : index + 1;
      rotateLogoColor(index)
  }, 7000);
}

function setupFaqControllers() {
  const items = document.getElementsByClassName('faq-item');

  for (const item of items) {

    item.addEventListener('click', () => {
      const controller = item.getElementsByClassName('controller')[0];
      const state = controller.dataset.state;
      const rotation = state === 'closed' ? 'rotate(180deg)' : 'rotate(0)'
      const display = state === 'closed' ? 'block' : 'none';

      controller.style.setProperty('transform', rotation);
      controller.dataset.state = state === 'closed' ? 'open' : 'closed';

      const answer = controller.parentElement.parentElement.getElementsByClassName('answer')[0];
      answer.style.setProperty('display', display);
    });
  }
}

rotateLogoColor(0);
setupFaqControllers();

function toggleMode(){
  const toggleSwitch = document.getElementById("toggle")

  const article = document.querySelector('.projects article')

  article.classList.toggle('dev')

  article.classList.toggle('artist')
}
