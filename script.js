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
<// CountAPI (Global view and like counter)
const NAMESPACE = 'everythingaboutxhlazz';
const VIEW_KEY = 'site-views';
const LIKE_KEY = 'site-likes';

// Update the view count (increments by 1 on each load)
function updateNeonViewCounter() {
  fetch(`https://api.countapi.xyz/hit/${NAMESPACE}/${VIEW_KEY}`)
    .then(res => res.json())
    .then(data => {
      document.getElementById('view-count').textContent = data.value;
    })
    .catch(() => {
      document.getElementById('view-count').textContent = '⚠️';
      console.warn('View counter failed: CountAPI may be blocked.');
    });
}

// Get the like count (does not increment)
function updateNeonLikeCounter() {
  fetch(`https://api.countapi.xyz/get/${NAMESPACE}/${LIKE_KEY}`)
    .then(res => res.json())
    .then(data => {
      document.getElementById('like-count').textContent = data.value ?? 0;
    })
    .catch(() => {
      document.getElementById('like-count').textContent = '⚠️';
      console.warn('Like counter failed: CountAPI may be blocked.');
    });
}

// Add a like (increments by 1, only once per browser)
function addNeonLike() {
  if (localStorage.getItem('liked_xhlazz_site')) return;
  fetch(`https://api.countapi.xyz/hit/${NAMESPACE}/${LIKE_KEY}`)
    .then(res => res.json())
    .then(data => {
      document.getElementById('like-count').textContent = data.value;
      document.getElementById('like-btn').classList.add('liked');
      document.getElementById('like-heart').classList.add('liked');
      localStorage.setItem('liked_xhlazz_site', '1');
    })
    .catch(() => {
      alert('Like failed: CountAPI may be blocked.');
    });
}

document.addEventListener('DOMContentLoaded', () => {
  // Make sure the stats section exists before binding
  if (document.getElementById('view-count')) updateNeonViewCounter();
  if (document.getElementById('like-count')) updateNeonLikeCounter();

  let likeBtn = document.getElementById('like-btn');
  if (likeBtn) {
    likeBtn.addEventListener('click', () => {
      if (!localStorage.getItem('liked_xhlazz_site')) {
        addNeonLike();
      }
    });

    // Show as liked if already liked
    if (localStorage.getItem('liked_xhlazz_site')) {
      likeBtn.classList.add('liked');
      document.getElementById('like-heart').classList.add('liked');
    }
  }
});
});
