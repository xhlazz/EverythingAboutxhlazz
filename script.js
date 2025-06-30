function toggleSection(sectionId, button) {
    const section = document.getElementById(sectionId);
    const arrow = button.querySelector('.arrow');
    if (section.style.display === 'none' || section.style.display === '') {
        section.style.display = 'block';
        arrow.classList.add('arrow-up');
    } else {
        section.style.display = 'none';
        arrow.classList.remove('arrow-up');
    }
}

function calculateAge(birthDate) {
    const now = new Date();
    let age = now.getFullYear() - birthDate.getFullYear();
    const monthDiff = now.getMonth() - birthDate.getMonth();
    const dayDiff = now.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }
    return age;
}

function calculateDaysUntilBirthday(birthDate) {
    const now = new Date();
    const currentYear = now.getFullYear();
    let nextBirthday = new Date(currentYear, birthDate.getMonth(), birthDate.getDate());

    // If birthday this year has passed, use next year
    if (
        now.getMonth() > birthDate.getMonth() ||
        (now.getMonth() === birthDate.getMonth() && now.getDate() > birthDate.getDate())
    ) {
        nextBirthday = new Date(currentYear + 1, birthDate.getMonth(), birthDate.getDate());
    }

    // Calculate days difference
    const oneDay = 24 * 60 * 60 * 1000;
    // Remove hours/mins/seconds part for accurate day difference
    const nowDateOnly = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const daysLeft = Math.round((nextBirthday - nowDateOnly) / oneDay);

    return daysLeft;
}

function showBirthdayMessageForm() {
    document.getElementById('birthday-message').style.display = 'block';
}

function submitBirthdayMessage() {
    const webhookUrl = 'https://discord.com/api/webhooks/1323002006108901486/7Zf6tq0KdT87CBFWEhOoJ21haB-ZASRI-Ddb3n1z74HAZanYtqVRoVX_ga4WMIPfGZ51';
    const message = document.getElementById('birthday-text').value;

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            content: message,
        }),
    })
    .then(response => {
        if (response.ok) {
            alert('Message sent successfully!');
        } else {
            alert('Failed to send message.');
        }
        document.getElementById('birthday-message').style.display = 'none';
        document.getElementById('birthday-text').value = '';
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to send message.');
        document.getElementById('birthday-message').style.display = 'none';
        document.getElementById('birthday-text').value = '';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const birthDate = new Date('2010-12-08');
    const ageElement = document.getElementById('age');
    const birthdayInfoElement = document.getElementById('birthday-info');

    if (!ageElement || !birthdayInfoElement) {
        // These elements must exist in the HTML!
        return;
    }

    const age = calculateAge(birthDate);
    const daysUntilBirthday = calculateDaysUntilBirthday(birthDate);

    ageElement.textContent = `${age} years old`;

    if (daysUntilBirthday === 0) {
        birthdayInfoElement.innerHTML = `By the way, my birthday is today! <button onclick="showBirthdayMessageForm()">Happy Birthday!</button>`;
    } else {
        birthdayInfoElement.textContent = `Oh, and in case you wonder. My birthday is in ${daysUntilBirthday} days, so please go into any of my social medias and wish me a happy birthday, even late or even too early I appreciate it♥`;
    }
    // Lightbox functionality for Extras section
function openLightbox(imgElem) {
    const modal = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDesc = document.getElementById('lightbox-desc');
    lightboxImg.src = imgElem.src;
    lightboxImg.alt = imgElem.alt;
    lightboxTitle.textContent = imgElem.dataset.title || '';
    lightboxDesc.textContent = imgElem.dataset.description || '';
    modal.style.display = 'flex';
}

function closeLightbox(event) {
    // Only close if background or close button is clicked
    if (
        event.target.id === 'lightbox-modal' ||
        event.target.id === 'lightbox-close'
    ) {
        document.getElementById('lightbox-modal').style.display = 'none';
    }
}
});
// Fun Experiments

function partyConfetti() {
  for (let i = 0; i < 32; i++) {
    const conf = document.createElement('div');
    conf.className = 'confetti-piece';
    conf.style.left = `${Math.random()*98}vw`;
    conf.style.background = `hsl(${Math.random()*360},90%,60%)`;
    conf.style.top = '-20px';
    conf.style.transform = `rotate(${Math.random()*360}deg)`;
    conf.style.width = conf.style.height = `${8 + Math.random()*12}px`;
    document.body.appendChild(conf);
    setTimeout(() => conf.remove(), 1550);
  }
}

function randomBg() {
  const colors = [
    'linear-gradient(135deg,#fff,#111 80%)',
    'radial-gradient(circle at 60% 40%,#ffb6e6 0%,#6fd6ff 90%)',
    'linear-gradient(120deg,#e6fff6 0%,#000 100%)',
    'radial-gradient(at 80% 20%,#fff 0%,#111 100%)',
    'linear-gradient(120deg,#fff 0%,#000 100%)'
  ];
  const color = colors[Math.floor(Math.random()*colors.length)];
  document.body.style.background = color;
  setTimeout(() => {
    document.body.style.background = '';
  }, 1600);
}

function spinTitle() {
  const title = document.querySelector('h1');
  title.classList.add('spin-title');
  setTimeout(() => title.classList.remove('spin-title'), 1000);
}

function surpriseAlert() {
  const messages = [
    "You're awesome! 😎",
    "Keep going! 🚀",
    "Did you drink water today? 💧",
    "Have a great day! 🌟",
    "You found the secret button! 🎉",
    "Fun fact: The internet weighs about 50 grams (it's true!)"
  ];
  alert(messages[Math.floor(Math.random()*messages.length)]);
}

function shakeEverything() {
  document.body.classList.add('shake');
  setTimeout(() => document.body.classList.remove('shake'), 600);
}

function darkLightSwitch() {
  document.body.classList.toggle('light-mode');
}

function rainbowText() {
  const h1 = document.querySelector('h1');
  h1.classList.add('rainbow');
  setTimeout(() => h1.classList.remove('rainbow'), 1800);
}

function flipSite() {
  document.body.classList.toggle('flipped');
  setTimeout(() => document.body.classList.remove('flipped'), 1300);
}
