// Массив объектов с данными для карточек
const users = [
    {
        name: 'Анна',
        age: 24,
        image: 'https://i.pinimg.com/736x/4b/3f/8a/4b3f8aef9f1ae3ab0ac1a4661f4acd69.jpg',
        description: '👫 Не против сходить на свидание',
        hasCrown: true,
        hasScorpio: true,
        hasMedal: true,
        isOnline: true
    },
    {
        name: 'Анна',
        age: 24,
        image: 'https://i.pinimg.com/736x/3f/fb/5e/3ffb5ee9958f68b96e3e96b4a1ae67db.jpg',
        description: '👫 Не против сходить на свидание',
        hasCrown: true,
        hasScorpio: true,
        hasMedal: true,
        isOnline: true
    },
    {
        name: 'Анна',
        age: 24,
        image: 'https://i.pinimg.com/1200x/f6/42/bc/f642bcb252a76186db3abcfcad90f091.jpg',
        description: '👫 Не против сходить на свидание',
        hasCrown: true,
        hasScorpio: true,
        hasMedal: true,
        isOnline: true
    }
];

const cardsContainer = document.getElementById('cards-container');
const cardTemplate = document.getElementById('card-template');

function createCard(userData) {
    const cardElement = cardTemplate.content.cloneNode(true);
    
    const box1Image = cardElement.querySelector('.box1-image');
    const nameSpan = cardElement.querySelector('.name');
    const ageSpan = cardElement.querySelector('.age');
    const descriptionP = cardElement.querySelector('.description');
    const circle = cardElement.querySelector('.circle');
    
    box1Image.src = userData.image;
    box1Image.alt = `${userData.name}'s profile image`;
    nameSpan.textContent = userData.name;
    ageSpan.textContent = `${userData.age}`;
    descriptionP.textContent = userData.description;
    
    if (userData.isOnline) {
        circle.style.backgroundColor = 'rgb(10, 173, 70)'; // зеленый
    } else {
        circle.style.backgroundColor = 'rgb(156, 163, 175)'; // серый
    }
    
    const crownImg = cardElement.querySelector('.crown-img');
    const scorpioImg = cardElement.querySelector('.scorpio-img');
    const medalImg = cardElement.querySelector('.medal-img');
    
    if (!userData.hasCrown) {
        crownImg.closest('.info').style.display = 'none';
    }
    
    if (!userData.hasScorpio) {
        scorpioImg.closest('.info').style.display = 'none';
    }
    
    if (!userData.hasMedal) {
        medalImg.closest('.info').style.display = 'none';
    }
    
    return cardElement;
}

function renderCards() {
    cardsContainer.innerHTML = '';

    users.forEach(user => {
        const card = createCard(user);
        cardsContainer.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', renderCards);