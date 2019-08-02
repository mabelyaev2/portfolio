const navig = document.querySelector('.nav-hamb');
const navbar = document.querySelector('.navbar');
const submitBtn = document.querySelector('.submit-btn');
const memberinf = document.querySelector('.team-members-desc');
const memberImg = document.querySelector('.member-info-img');
const ftrList = document.querySelector('.features-list')



navig.addEventListener('click', (e) => {
	navbar.classList.toggle('navbar-list');
	navig.classList.toggle('closure-btn');
});



fetch(`http://maximumstart-echo.herokuapp.com`)
.then(function (response) {
	if(response.status !== 200) {
		return Promise.reject(new Error(response.statusText))
	};
	return JSON.stringify(response)
})
.catch(function(err) {  
    console.log('Fetch Error', err);   
  });




submitBtn.addEventListener('submit', (e) => {
	request(e.target.querySelector('#email').value)
	e.preventDefault()
});




memberinf.addEventListener('click', (e) => {
    if(e.target.className === 'member-info-img'){
        const getHead = e.target.getAttribute('data-head');
        const getDesc = e.target.getAttribute('data-desc');
        const getUrl = e.target.getAttribute('src');
        
        const picture = document.querySelector('.first-pic-image');
        picture.setAttribute('src',getUrl);
        
        const head = document.querySelector('.first-name');
        head.innerText = getHead;
        
        const descr = document.querySelector('.first-name-desc');
        descr.innerText = getDesc;
    }
 
});


document.addEventListener('DOMContentLoaded', (e) => {
	    const featureCategories = document.querySelector('.opportunities-list');
	    const featureImages = document.querySelectorAll('.features-example');

	    const rerenderimages = (cls) => {
	    	if (cls === 'All') {
	    		return featureImages.forEach((img) => img.style.display = 'block');
	    	}

	    	featureImages.forEach((img) => {
	    		img.style.display = 'block'
	    		if (!img.classList.contains(cls)) {
	    			img.style.display = 'none'
	    		}
	    	});
	    };

	    featureCategories.addEventListener('click', (e) => {
	    	if (e.target.tagName === 'BUTTON') {
	    		const featuresClass = e.target.getAttribute('data-class');
	    		rerenderimages(featuresClass);
	    	}
	    	
	    });
});


