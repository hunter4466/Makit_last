document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

const backBtn = document.getElementById('back_btn');
const div3Link = document.getElementById('div3Link');

div3Link.addEventListener('click', (event) => {
  event.preventDefault();
  backBtn.style = 'display: none';
  backBtn.style = 'display: inline';
});

const advertising1 = document.getElementById('advertising1');
const backgroundAdv1 = document.getElementById('backgroundAdv1');
const adv1Header = document.getElementById('adv1Header');
const adv1Content = document.getElementById('adv1Content');
const adv1Footer = document.getElementById('adv1Footer');
const d = new Date();
const n = d.getDay();

if (n === 5) {
  advertising1.style = 'display:inline';
  backgroundAdv1.style = 'display:inline';
  advertising1.className = 'advertising1_op';
  backgroundAdv1.className = 'backgroundAdv1_op';
}
if (n === 6) {
  advertising1.style = 'display:inline';
  backgroundAdv1.style = 'display:inline';
  advertising1.className = 'advertising1_op';
  backgroundAdv1.className = 'backgroundAdv1_op';
}
if (n === 7) {
  advertising1.style = 'display:inline';
  backgroundAdv1.style = 'display:inline';
  advertising1.className = 'advertising1_op';
  backgroundAdv1.className = 'backgroundAdv1_op';
}

adv1Content.addEventListener('click', () => {
  window.location.replace('https://api.whatsapp.com/send?phone=51994172125&text=¡Hola Makit!%0AQuiero%20una%20SUPER%20PROMO%20de%2048%20makis%20a%20S/55%20😋%20¡Ya mismo!%20🛵');
});
adv1Header.addEventListener('click', () => {
  window.location.replace('https://api.whatsapp.com/send?phone=51994172125&text=¡Hola Makit!%0AQuiero%20una%20SUPER%20PROMO%20de%2048%20makis%20a%20S/55%20😋%20¡Ya mismo!%20🛵');
});

adv1Footer.addEventListener('click', (event) => {
  event.preventDefault();
  advertising1.className = 'advertising1_cl';
  backgroundAdv1.className = 'backgroundAdv1_cl';
});
backgroundAdv1.addEventListener('click', (event) => {
  event.preventDefault();
  advertising1.className = 'advertising1_cl';
  backgroundAdv1.className = 'backgroundAdv1_cl';
});
