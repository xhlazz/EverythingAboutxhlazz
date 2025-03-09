document.addEventListener('DOMContentLoaded', () => {
    // Initialize toggle buttons functionality
    const toggleButtons = document.querySelectorAll('.toggle-button');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const sectionId = button.getAttribute('data-section');
            toggleSection(sectionId, button);
        });
    });

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
    
    // Calculate age and days until birthday
    const birthDate = new Date('2010-12-08');
    const ageElement = document.getElementById('age');
    const birthdayInfoElement = document.getElementById('birthday-info');
    
    const age = calculateAge(birthDate);
    const daysUntilBirthday = calculateDaysUntilBirthday(birthDate);
    
    ageElement.textContent = `${age} years old`;
    
    if (daysUntilBirthday === 0) {
        birthdayInfoElement.innerHTML = `By the way, my birthday is today! <button id="happy-birthday-button">Happy Birthday!</button>`;
        document.getElementById('happy-birthday-button').addEventListener('click', showBirthdayMessageForm);
    } else {
        birthdayInfoElement.textContent = `By the way, my birthday is in ${daysUntilBirthday} days.`;
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
        let
