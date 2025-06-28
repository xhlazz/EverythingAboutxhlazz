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
// Add this at the end of your script.js

function fetchDiscordActivity() {
    const userId = "996117984928088167";
    const url = `https://api.lanyard.rest/v1/users/${userId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            const profile = data.data;
            // Username and avatar
            const usernameSpan = document.getElementById("discord-username");
            const avatarImg = document.getElementById("discord-avatar");
            if (profile.discord_user) {
                const username = profile.discord_user.username + "#" + profile.discord_user.discriminator;
                usernameSpan.textContent = username;
                avatarImg.src = `https://cdn.discordapp.com/avatars/${userId}/${profile.discord_user.avatar}.png?size=128`;
                avatarImg.style.display = 'block';
            } else {
                usernameSpan.textContent = "(not found)";
                avatarImg.style.display = 'none';
            }
            // Status
            const statusSpan = document.getElementById("discord-status");
            statusSpan.className = "status-dot";
            switch (profile.discord_status) {
                case "online": statusSpan.classList.add("status-online"); break;
                case "idle": statusSpan.classList.add("status-idle"); break;
                case "dnd": statusSpan.classList.add("status-dnd"); break;
                default: statusSpan.classList.add("status-offline");
            }
            statusSpan.title = "Status: " + profile.discord_status;
            // Activities
            const activityDiv = document.getElementById("discord-activity");
            let html = "";
            if (profile.activities && profile.activities.length > 0) {
                profile.activities.forEach(act => {
                    if (act.type === 0) { // playing/game
                        html += `<p>🎮 Playing <b>${act.name}</b>`;
                        if (act.details) html += ` - ${act.details}`;
                        if (act.state) html += ` <small>(${act.state})</small>`;
                        html += `</p>`;
                    } else if (act.type === 2) { // listening
                        html += `<p>🎵 Listening to <b>${act.name}</b></p>`;
                    } else if (act.type === 3) { // watching
                        html += `<p>👀 Watching <b>${act.name}</b></p>`;
                    } else if (act.type === 4 && act.state) { // custom status
                        html += `<p>${act.emoji ? act.emoji.name + " " : ""}${act.state}</p>`;
                    }
                });
            }
            if (html === "") html = `<p>No current activity</p>`;
            activityDiv.innerHTML = html;
        })
        .catch(() => {
            document.getElementById("discord-username").textContent = "(error)";
            document.getElementById("discord-avatar").style.display = "none";
            document.getElementById("discord-activity").innerHTML = "<em>Error fetching Discord status.</em>";
        });
}
// On page load and refresh every 20 seconds
document.addEventListener('DOMContentLoaded', fetchDiscordActivity);
setInterval(fetchDiscordActivity, 20000);
