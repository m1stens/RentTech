const products = [
	{
			id: 1,
			type: 'laptop',
			name: 'MacBook Pro 16"',
			description: 'Мощный ноутбук для профессионалов',
			price: 3000,
			image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
	},
	{
			id: 2,
			type: 'smartphone',
			name: 'iPhone 16 Pro Max',
			description: 'Последняя модель iphone',
			price: 1500,
			image: 'image/iphone16.jpeg'
	},
	{
		id: 3,
		type: 'camera',
		name: 'Sony A7 III',
		description: 'Профессиональная камера',
		price: 2500,
		image: 'image/sony.jpg'
	},
	{
			id: 4,
			type: 'tablet',
			name: 'iPad Pro',
			description: 'Планшет для творчества и работы',
			price: 2000,
			image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
	}
];
const laptops = [
	{
		id: 1,
		type: 'laptop',
		name: 'MacBook Pro 16"',
		description: 'Мощный ноутбук для профессионалов',
		price: 3000,
		image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
	},
]
const smartphones = [
	{
		id: 1,
		type: 'smartphone',
		name: 'iPhone 16 Pro Max',
		description: 'Последняя модель iphone',
		price: 1500,
		image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
	}
]
const tablets = [
	{
		id: 1,
		type: 'headphone',
		name: 'iPad Pro',
		description: 'Планшет для творчества и работы',
		price: 2000,
		image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
}
]
const cameras = [
	{
		id: 1,
		type: 'camera',
		name: 'Sony A7 III',
		description: 'Профессиональная камера',
		price: 2500,
		image: 'image/sony.jpg'
}
]

function displayProducts() {
	const productsContainer = document.querySelector('.catalog__list');
	productsContainer.innerHTML = products.map(product => `
		<li class="catalog__list-item">
					<img src="${product.image}" alt="${product.name}" class="catalog__list-image" width="286" height="192">
					<div class="catalog__list-info">
							<h4 class="">${product.name}</h4>
							<p>${product.description}</p>
							<div class="catalog__list-infoPrice">
								<p class="catalog__list-price">${product.price} ₽/день</p>
								<button class="catalog__list-button button" onclick="openModal(${product.id})">Арендовать</button>
							</div>
					</div>
		</li>
	`).join('');
}

document.addEventListener('DOMContentLoaded', function() {
	displayProducts();
});


const sectionCatalogElement = document.querySelector('#catalog')
const sectionHowElement = document.querySelector('#how')
const sectionContactsElement = document.querySelector('#contacts')

const catalogLinkElement = document.querySelector('.catalog-link')
const howLinkElement = document.querySelector('.how-link')
const contactsLinkElement = document.querySelector('.contacts-link')

catalogLinkElement.addEventListener('click', (event) => {
	event.preventDefault()

	sectionCatalogElement.scrollIntoView({
		behavior: 'smooth'
	})
})

howLinkElement.addEventListener('click', (event) => {
	event.preventDefault()

	sectionHowElement.scrollIntoView({
		behavior: 'smooth'
	})
})

contactsLinkElement.addEventListener('click', (event) => {
	event.preventDefault()

	sectionContactsElement.scrollIntoView({
		behavior: 'smooth'
	})
})

const modalElement = document.querySelector('.modal');
const closeBtn = document.querySelector('.modal__content-close');
let selectedProductId = null;

window.openModal = function(productId) {
    modalElement.style.display = 'block';
    selectedProductId = productId;
}

closeBtn.onclick = function() {
    modalElement.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target === modalElement) {
        modalElement.style.display = 'none';
    }
}

document.querySelector('.modal__content-form').addEventListener('submit', function(event) {
	event.preventDefault();
	
	const formData = {
			productId: selectedProductId,
			name: document.getElementById('name').value,
			phone: document.getElementById('phone').value,
			email: document.getElementById('email').value,
			days: document.getElementById('days').value
	};

	// В реальном проекте здесь был бы запрос к серверу
	console.log('Данные заявки:', formData);
	
	alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
	modal.style.display = 'none';
	this.reset();
});



const catalogElement = document.querySelector('.catalog')


const laptopElement = document.querySelector('.laptop')

function laptopProducts() {
	catalogElement.innerHTML = laptops.map(laptop => `
		<h3>Ноутбуки</h3>
		<ul class="catalog__list">
		<li class="catalog__list-item">
					<img src="${laptop.image}" alt="${laptop.name}" class="catalog__list-image" width="286" height="192">
					<div class="catalog__list-info">
							<h4 class="">${laptop.name}</h4>
							<p>${laptop.description}</p>
							<div class="catalog__list-infoPrice">
								<p class="catalog__list-price">${laptop.price} ₽/день</p>
								<button class="catalog__list-button button" onclick="openModal(${laptop.id})">Арендовать</button>
							</div>
					</div>
		</li>
		</ul>
	`).join('');

}

laptopElement.addEventListener('click', function() {
	laptopProducts()
})

const smartphoneElement = document.querySelector('.smartphone')

function smartphoneProducts() {
	catalogElement.innerHTML = smartphones.map(smartphone => `
		<h3>Смартфоны</h3>
		<ul class="catalog__list">
		<li class="catalog__list-item">
					<img src="${smartphone.image}" alt="${smartphone.name}" class="catalog__list-image" width="286" height="192">
					<div class="catalog__list-info">
							<h4 class="">${smartphone.name}</h4>
							<p>${smartphone.description}</p>
							<div class="catalog__list-infoPrice">
								<p class="catalog__list-price">${smartphone.price} ₽/день</p>
								<button class="catalog__list-button button" onclick="openModal(${smartphone.id})">Арендовать</button>
							</div>
					</div>
		</li>
		</ul>
	`).join('');
}

smartphoneElement.addEventListener('click', function() {
	smartphoneProducts()
})

const cameraElement = document.querySelector('.camera')

function cameraProducts() {
	catalogElement.innerHTML = cameras.map(camera => `
		<h3>Камеры</h3>
		<ul class="catalog__list">
		<li class="catalog__list-item">
					<img src="${camera.image}" alt="${camera.name}" class="catalog__list-image" width="286" height="192">
					<div class="catalog__list-info">
							<h4 class="">${camera.name}</h4>
							<p>${camera.description}</p>
							<div class="catalog__list-infoPrice">
								<p class="catalog__list-price">${camera.price} ₽/день</p>
								<button class="catalog__list-button button" onclick="openModal(${camera.id})">Арендовать</button>
							</div>
					</div>
		</li>
		</ul>
	`).join('');
}

cameraElement.addEventListener('click', function() {
	cameraProducts()
})


const tabletElement = document.querySelector('.tablet')

function tabletProducts() {
	catalogElement.innerHTML = tablets.map(tablet => `
		<h3>Планшеты</h3>
		<ul class="catalog__list">
		<li class="catalog__list-item">
					<img src="${tablet.image}" alt="${tablet.name}" class="catalog__list-image" width="286" height="192">
					<div class="catalog__list-info">
							<h4 class="">${tablet.name}</h4>
							<p>${tablet.description}</p>
							<div class="catalog__list-infoPrice">
								<p class="catalog__list-price">${tablet.price} ₽/день</p>
								<button class="catalog__list-button button" onclick="openModal(${tablet.id})">Арендовать</button>
							</div>
					</div>
		</li>
		</ul>
	`).join('');
}

tabletElement.addEventListener('click', function() {
	tabletProducts()
})