const navBtn = document.querySelector('.nav-hamb');
const navMenu = document.querySelector('.nav');
const modWind = document.querySelector('.example-img');
const modalInf = document.querySelector('.gallery-modal');
const worksGallery = document.querySelector('.zet-works-gallery');
const modalDesc = document.querySelector('.gallery-modal-info');
const closeBtn = document.querySelector('.close-btn');


navBtn.addEventListener('click', (e) => {
	navMenu.classList.toggle('nav-hamb-checked');
	navBtn.classList.toggle('nav-hamb-checkbox');
});

worksGallery.addEventListener('click', (e) => {
	if (e.target.className === 'example-img') {
		modalInf.classList.remove('hidden');

		const srcs = e.target.getAttribute('src');
		const templ = document.createElement('img');
		templ.setAttribute('src', srcs);
		modalInf.appendChild(templ)

		const getDesc = e.target.dataset.desc;
		modalDesc.innerText = getDesc;
		getDesc.className = 'modal-desc-text';
		modalInf.style.overflow = 'hidden'
		document.querySelector('.gallery-modal-background').classList.remove('hidden')
};
});

const ClsBtn = document.createElement('button');
ClsBtn.className = 'close-modal-btn';
ClsBtn.innerHTML = '&times';
modalInf.appendChild(ClsBtn);

ClsBtn.addEventListener('click', (e) => {
	modalInf.classList.add('hidden');
	modalInf.querySelector('img').remove();
	document.querySelector('.gallery-modal-background').classList.add('hidden')
});

document.querySelector('.gallery-modal-background').addEventListener('click', (e) => {
	e.target.classList.add('hidden');
	modalInf.classList.add('hidden');
	modalInf.querySelector('img').remove();
});
