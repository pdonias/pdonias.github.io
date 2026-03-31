const born = new Date(1992, 3, 19); // April 19, 1992
const today = new Date();
let age = today.getFullYear() - born.getFullYear();
const hadBirthday = today.getMonth() > born.getMonth() ||
  (today.getMonth() === born.getMonth() && today.getDate() >= born.getDate());

if (!hadBirthday) {
  age--;
}

const el = document.getElementById('age');
el.textContent = age + el.dataset.suffix;
