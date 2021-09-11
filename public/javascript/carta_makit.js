document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

const back_btn = document.getElementById('back_btn');
const div_3_link = document.getElementById('div_3_link');

div_3_link.addEventListener('click', (event) => {
  event.preventDefault();
  back_btn.style = 'display: none';
  back_btn.style = 'display: inline';
});

const advertising_1 = document.getElementById('advertising_1');
const background_adv_1 = document.getElementById('background_adv_1');
const adv_1_header = document.getElementById('adv_1_header');
const adv_1_content = document.getElementById('adv_1_content');
const adv_1_footer = document.getElementById('adv_1_footer');
const d = new Date();
const n = d.getDay();

if (n == 5) {
  advertising_1.style = 'display:inline';
  background_adv_1.style = 'display:inline';
  advertising_1.className = 'advertising_1_op';
  background_adv_1.className = 'background_adv_1_op';
}
if (n == 6) {
  advertising_1.style = 'display:inline';
  background_adv_1.style = 'display:inline';
  advertising_1.className = 'advertising_1_op';
  background_adv_1.className = 'background_adv_1_op';
}
if (n == 7) {
  advertising_1.style = 'display:inline';
  background_adv_1.style = 'display:inline';
  advertising_1.className = 'advertising_1_op';
  background_adv_1.className = 'background_adv_1_op';
}

adv_1_content.addEventListener('click', (event) => {
  window.location.replace('https://api.whatsapp.com/send?phone=51994172125&text=¡Hola Makit!%0AQuiero%20una%20SUPER%20PROMO%20de%2048%20makis%20a%20S/55%20😋%20¡Ya mismo!%20🛵');
});
adv_1_header.addEventListener('click', (event) => {
  window.location.replace('https://api.whatsapp.com/send?phone=51994172125&text=¡Hola Makit!%0AQuiero%20una%20SUPER%20PROMO%20de%2048%20makis%20a%20S/55%20😋%20¡Ya mismo!%20🛵');
});

adv_1_footer.addEventListener('click', (event) => {
  event.preventDefault();
  advertising_1.className = 'advertising_1_cl';
  background_adv_1.className = 'background_adv_1_cl';
});
background_adv_1.addEventListener('click', (event) => {
  event.preventDefault();
  advertising_1.className = 'advertising_1_cl';
  background_adv_1.className = 'background_adv_1_cl';
});
