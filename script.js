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
    const age = now.getFullYear() - birthDate.getFullYear();
    const monthDiff = now.getMonth() - birthDate.getMonth();
    const dayDiff = now.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        return age - 1;
    }
    return age;
}

function calculateDaysUntilBirthday(birthDate) {
    const now = new Date();
    const currentYear = now.getFullYear();
    let nextBirthday = new Date(currentYear, birthDate.getMonth(), birthDate.getDate());

    if (now > nextBirthday) {
        nextBirthday = new Date(currentYear + 1, birthDate.getMonth(), birthDate.getDate());
    }

    const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
    const daysLeft = Math.round((nextBirthday - now) / oneDay);

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
       
