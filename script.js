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
    const webhookUrl = 'https://discordapp.com/api/webhooks/1390879953570234438/KvfCT2Loac8dncN1H7TtvKb-AocfBIo45u8R5LeSNISFEWhtk2BUksCsp_HYhaQyH-Mq';
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
    const birthDate = new Date('2010-12-8');
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
// --- Fun Experiments Section ---

const funFactsMessages = [
  "You're awesome! 😎","Keep going! 🚀","Did you drink water today? 💧","Have a great day! 🌟","You found the secret button! 🎉",
  "Fun fact: The internet weighs about 50 grams (it's true!)","Bananas are berries, but strawberries aren't.","Honey never spoils.",
  "A group of flamingos is called a flamboyance.","Cats have fewer toes on their back paws.","A day on Venus is longer than its year.",
  "There are more stars in the universe than grains of sand on Earth.","Octopuses have three hearts.","Some turtles can breathe through their butts.",
  "Hot water freezes faster than cold water.","You can't hum while holding your nose closed.","Mosquitoes are attracted to the color blue twice as much as any other color.",
  "The unicorn is the national animal of Scotland.","Wombat poop is cube-shaped.","The Eiffel Tower can be 15 cm taller during hot days.",
  "Sloths can hold their breath longer than dolphins can.","The tongue of a blue whale weighs as much as an elephant.",
  "A cloud can weigh more than a million pounds.","A group of crows is called a murder.","Butterflies taste with their feet.",
  "Sea otters hold hands while sleeping so they don’t drift apart.","The inventor of the Frisbee was turned into a Frisbee.",
  "The dot over a lowercase i or j is called a tittle.","Giraffes have no vocal cords.","The Twitter bird’s name is Larry.",
  "An ostrich’s eye is bigger than its brain.","Snails can sleep for three years.","A shrimp’s heart is in its head.",
  "Goats have rectangular pupils.","The first computer mouse was made of wood.","Kangaroos can’t walk backwards.",
  "A group of hedgehogs is called a prickle.","There's a basketball court on the top floor of the US Supreme Court building.",
  "Venus is the only planet that spins clockwise.","More people are allergic to cow’s milk than any other food.",
  "Some frogs can be frozen solid then thawed and continue living.","The inventor of Pringles is buried in a Pringles can.",
  "The original name for butterfly was flutterby.","A cow-bison hybrid is called a beefalo.","The hashtag symbol is technically called an octothorpe.",
  "Polar bear skin is black.","Elephants are the only animals that can't jump.","A group of porcupines is called a prickle.",
  "The heart of a shrimp is located in its head.","Peanuts aren’t nuts – they’re legumes.","The word 'nerd' was first coined by Dr. Seuss.",
  "Banging your head against a wall burns 150 calories per hour.","The inventor of the Rubik’s Cube couldn’t solve it for a month.",
  "The average person walks the equivalent of five times around the world in their lifetime.","The world’s largest grand piano was built by a 15-year-old in New Zealand.",
  "The longest wedding veil was longer than 63 football fields.","Some cats are allergic to humans.","A small child could swim through the veins of a blue whale.",
  "A group of ferrets is called a business.","A group of frogs is called an army.","Chewing gum boosts concentration.",
  "The world’s oldest toy is a stick.","More people are bitten by New Yorkers each year than by sharks.",
  "A hummingbird weighs less than a penny.","You can hear a blue whale’s heartbeat from two miles away.",
  "The word 'strengths' is the longest word in the English language with only one vowel.",
  "The inventor of Vaseline ate a spoonful of it every morning.","A snail can sleep for three years.",
  "The world's largest snowflake was 15 inches wide.","Some lipstick contains fish scales.",
  "An apple, potato, and onion all taste the same if you eat them with your nose plugged.",
  "A group of jellyfish is called a smack.","There are more fake flamingos in the world than real ones.",
  "Wearing headphones for just an hour could increase the bacteria in your ear by 700 times.",
  "The tongue is the only muscle in one’s body that is attached from one end.",
  "A group of unicorns is called a blessing.","The world’s tallest snowman was 113 feet tall.",
  "The longest time between two twins being born is 87 days.",
  "A crocodile can’t poke its tongue out.","Recycling one glass jar saves enough energy to watch TV for 3 hours.",
  "A group of pandas is called an embarrassment.","The oldest “your mom” joke was discovered on a 3,500 year old Babylonian tablet.",
  "Mr. Potato Head was the first toy advertised on TV.","A group of owls is called a parliament.",
  "A group of kittens is called a kindle.","Cows moo with regional accents.","The sentence 'The quick brown fox jumps over the lazy dog' uses every letter of the alphabet.",
  "There are 293 ways to make change for a dollar.","The inventor of the popsicle was 11 years old.",
  "Carrots were originally purple.","You can't fold a piece of paper more than 7 times.",
  "The Mona Lisa has no eyebrows.","The world's smallest reptile was discovered in 2021.",
  "A group of parrots is called a pandemonium.","A group of flamingos is called a flamboyance.",
  "The world’s largest rubber duck is over 60 feet tall.","The longest place name in the world is 85 letters long.",
  "Ketchup was sold as medicine in the 1830s.","The word 'peacock' only refers to male peafowl.",
  "The inventor of Coca-Cola originally wanted to invent a headache cure.",
  "The unicorn is the national animal of Scotland. (Yes, again!)",
  "A group of giraffes is called a tower.",
  "There are more public libraries than McDonald's in the U.S.",
  "No number before 1,000 contains the letter A."
];

let typewriterFactQueue = [];
let typewriterFactLastIndex = -1;
let typewriterFactCooldown = false;

function getUniqueRandomFact() {
  // If queue is empty, refill with all indices except the last one shown
  if (typewriterFactQueue.length === 0) {
    typewriterFactQueue = [...Array(funFactsMessages.length).keys()];
    // Remove last shown to prevent immediate repeat
    if (typewriterFactLastIndex !== -1 && typewriterFactQueue.length > 1) {
      typewriterFactQueue = typewriterFactQueue.filter(i => i !== typewriterFactLastIndex);
    }
    // Shuffle
    for (let i = typewriterFactQueue.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [typewriterFactQueue[i], typewriterFactQueue[j]] = [typewriterFactQueue[j], typewriterFactQueue[i]];
    }
  }
  const index = typewriterFactQueue.pop();
  typewriterFactLastIndex = index;
  return funFactsMessages[index];
}

function typewriterFact() {
  if (typewriterFactCooldown) return;
  typewriterFactCooldown = true;
  const el = document.getElementById('typewriter-fact-output');
  const text = getUniqueRandomFact();
  let i = 0;
  el.textContent = '';
  function type() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(type, 38);
    } else {
      setTimeout(() => { typewriterFactCooldown = false; }, 400); // allow new fact after short pause
    }
  }
  type();
}

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

function spinTitle() {
  const title = document.querySelector('h1');
  if (!title) return;
  title.classList.add('spin-title');
  setTimeout(() => title.classList.remove('spin-title'), 1000);
}

function surpriseAlert() {
  alert(funFactsMessages[Math.floor(Math.random() * funFactsMessages.length)]);
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
  if (!h1) return;
  h1.classList.add('rainbow');
  setTimeout(() => h1.classList.remove('rainbow'), 1800);
}

function flipSite() {
  document.body.classList.toggle('flipped');
  setTimeout(() => document.body.classList.remove('flipped'), 1300);
}

function rainStars() {
  for (let i = 0; i < 22; i++) {
    const star = document.createElement('span');
    star.className = 'rain-star';
    star.textContent = '⭐';
    star.style.left = `${Math.random() * 98}vw`;
    star.style.fontSize = `${1.2 + Math.random() * 1.2}em`;
    document.body.appendChild(star);
    setTimeout(() => star.remove(), 1900);
  }
}

function rainBurgers() {
  for (let i = 0; i < 18; i++) {
    const burger = document.createElement('span');
    burger.className = 'rain-burger';
    burger.textContent = '🍔';
    burger.style.left = `${Math.random() * 98}vw`;
    burger.style.fontSize = `${1.6 + Math.random() * 1.3}em`;
    burger.style.animationDuration = `${1.7 + Math.random() * 1.2}s`;
    document.body.appendChild(burger);
    setTimeout(() => burger.remove(), 2100);
  }
}

function rainFish() {
  for (let i = 0; i < 18; i++) {
    const fish = document.createElement('span');
    fish.className = 'rain-fish';
    // Randomly select a fish type
    const fishEmojis = ["🐟", "🐠", "🐡"];
    fish.textContent = fishEmojis[Math.floor(Math.random() * fishEmojis.length)];
    fish.style.left = `${Math.random() * 98}vw`;
    fish.style.fontSize = `${1.6 + Math.random() * 1.3}em`;
    fish.style.animationDuration = `${1.7 + Math.random() * 1.2}s`;
    document.body.appendChild(fish);
    setTimeout(() => fish.remove(), 2100);
  }
}

function zoomAll() {
  document.body.classList.add('zoomed');
  setTimeout(() => document.body.classList.remove('zoomed'), 1400);
}

function blurEverything() {
  document.body.classList.add('blurry');
  setTimeout(() => document.body.classList.remove('blurry'), 1600);
}

function bubbles() {
  for (let i = 0; i < 18; i++) {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.style.left = `${Math.random() * 96}vw`;
    bubble.style.width = bubble.style.height = `${18 + Math.random() * 28}px`;
    bubble.style.background = `rgba(${100+Math.random()*155},${180+Math.random()*50},${200+Math.random()*55},0.4)`;
    bubble.style.animationDuration = `${1.7 + Math.random() * 1.7}s`;
    document.body.appendChild(bubble);
    setTimeout(() => bubble.remove(), 2900);
  }
}
// ---- Birthday Countdown ----

const BIRTHDAY_MONTH = 11;  // July (since JS months are 0-indexed)
const BIRTHDAY_DAY = 8;   // 23rd

function updateBirthdayCountdown() {
  const now = new Date();
  let year = now.getFullYear();
  let nextBirthday = new Date(year, BIRTHDAY_MONTH, BIRTHDAY_DAY, 0, 0, 0, 0);
  if (now > nextBirthday) {
    nextBirthday = new Date(year + 1, BIRTHDAY_MONTH, BIRTHDAY_DAY, 0, 0, 0, 0);
  }
  const totalSeconds = Math.floor((nextBirthday - now) / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  document.getElementById('bcd-days').textContent = days;
  document.getElementById('bcd-hours').textContent = hours.toString().padStart(2, "0");
  document.getElementById('bcd-minutes').textContent = minutes.toString().padStart(2, "0");
  document.getElementById('bcd-seconds').textContent = seconds.toString().padStart(2, "0");
}

// Start the countdown timer if the section exists
if (document.getElementById('birthday-countdown')) {
  updateBirthdayCountdown();
  setInterval(updateBirthdayCountdown, 1000);
}
const witayCodes = {
  "L34H1": "Hi Leah, I wanted to clear things up really. This was supposed to be a love paragraph and something since and before I told you about the code, but I actually changed perspective. I wanted to say we shouldnt continue this, its just that there are 3 things that dont add up to me. 1st thing is you having a BF, I don't want to be like a lover or something like that. 2nd thing is you might cheat and might have cheated on a lot of guys before, not to exagerate it, I just think its not ideal to be with someone like that. 3rd Thing is you are probably too good, for me, everything i've said before about you being pretty,beatiful, I like you, its all true and remains true. I just think we shouldnt and keep on as normal friends. And please, if you have any questions about this ask me.",
  "J35U5": "No hay palabras para decirte que eres un amigazo. Eres como uno de los tios chill, como te eh mostrado e ayudado en cosas igualmente eres uno de los unicos que me entiende en problemas y razonar, aunque tenemos nuestras pequeñas diferencias nos entendemos igual. Es algo bueno de ti y de mi que cuando nos reimos, no va importar lo que digamos con tal no haga daño directo. Tu eres alguien maraviloso bro! Pero siempre recuerda que cualquier duda y secreto que me quieras compartir, todo esta bien. Con esto te quiero decir que te apoyo y eres uno de los amigos que fueran llegado mas temprano en mi vida ❤"
  "A10NS"  "Para ti hermano, eres como un amigazo que conoci por puro Rune. Gracias por estar ahi en las buenas y las malas y cuando ni nos hablamos por meses, dias, y incluso una vez 1 año. Pienso que eres alguien de esos amigos virtuales que caen muy bien. Esto de aca solo te lo dedico porque eres un amigo que cuando puede jugar juega y cuando no, ps no we. Pero por ti cuando no tenia amigos en la vida real con que, que hacer pues te invitaba y jugabamos incluso cuando tenia mi PC que parecia toda hecha de carton que crasheaba a cada rato Jajaja, pero bueno aca solo te digo que eres un amigazo. No se que agregar aqui de tantas cosas que podria pero bueno, tenemos que llevar esa racha de tiktok a mas de 300 vro. Feliz dia, feliz noche, paz."
};

function isEmoji(char) {
  // Simple emoji detection for most unicode emoji
  return /\p{Emoji}/u.test(char);
}

function rainEmoji(emoji) {
  for (let i = 0; i < 18; i++) {
    const drop = document.createElement('span');
    drop.textContent = emoji;
    drop.className = 'rain-fun-emoji';
    drop.style.left = `${Math.random() * 95}vw`;
    drop.style.fontSize = `${1.6 + Math.random()}em`;
    drop.style.animationDuration = `${1.2 + Math.random()}s`;
    document.body.appendChild(drop);
    setTimeout(() => drop.remove(), 1800);
  }
}

// Typewriter effect for plain text only
function witayTypewriterEffect(text, container, onDone) {
  container.innerHTML = ""; // clear
  container.style.display = 'block';
  let i = 0;
  function type() {
    if (i < text.length) {
      const char = text[i];
      if (isEmoji(char)) {
        rainEmoji(char);
      }
      container.innerHTML += char;
      i++;
      setTimeout(type, 32 + (isEmoji(char) ? 130 : 0));
    } else {
      if (typeof onDone === "function") onDone();
    }
  }
  type();
}

function submitWitayCode() {
  const input = document.getElementById('witay-code-input');
  const code = input.value.trim().toUpperCase();
  const errorDiv = document.getElementById('witay-error');
  const msgDiv = document.getElementById('witay-secret-message');
  errorDiv.classList.remove('show');
  errorDiv.textContent = '';
  msgDiv.style.display = 'none';
  msgDiv.innerHTML = '';

  if (!/^[A-Z0-9]{5}$/.test(code)) {
    errorDiv.textContent = "Please enter a valid 5-character code.";
    errorDiv.classList.add('show');
    input.classList.add('witay-shake');
    setTimeout(()=>input.classList.remove('witay-shake'), 400);
    return;
  }
  if (witayCodes[code]) {
    document.getElementById('witay-form').style.display = 'none';
    msgDiv.style.display = 'block';
    msgDiv.innerHTML = ''; // clear for animation
    // Typewriter only the text
    witayTypewriterEffect(witayCodes[code], msgDiv, function() {
      // After animation, prepend the neon emoji and append reload text
      msgDiv.innerHTML =
        `<span style="font-size:1.5em;vertical-align:middle;text-shadow:0 0 8px #fff,0 0 16px #fff6;">🗣️</span> `
        + msgDiv.innerHTML +
        `<br><br><span style="font-size:.9em;opacity:.7;">(Reload to try another code!)</span>`;
    });
  } else {
    errorDiv.textContent = "Wrong code! Try again.";
    errorDiv.classList.add('show');
    input.value = '';
    input.classList.add('witay-shake');
    setTimeout(()=>input.classList.remove('witay-shake'), 400);
  }
}
