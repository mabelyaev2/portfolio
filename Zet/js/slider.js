const OnePictureSlider = function(options) {
  this.container = options.container;
  this.images = options.images;
  this.prevBtn = options.prevBtn;
  this.nextBtn = options.nextBtn;
  this.updateInterval = options.updateInterval || 1500;
  this._current = 0;
  this._intervalID = 0;

  this.getCurrentSlide = function() {
    return this._current;
  };

  this.init = function() {
    // Disable slider if no images received
    if (!this.images || !this.images.length) return;

    this._changeSlide();
    this.initEventListeners();
    this.setIntervalChanging();
  };
};

OnePictureSlider.prototype._changeSlide = function() {
  this.images.forEach(img => img.classList.add('hidden'));
  this.images[this._current].classList.remove('hidden');
};

OnePictureSlider.prototype.setIntervalChanging = function() {
  this._intervalID = setInterval(() => this.next(), this.updateInterval);
};

OnePictureSlider.prototype.removeIntervalChanging = function() {
  if (this._intervalID) {
    clearInterval(this._intervalID);
    this._intervalID = 0;
    this.updateIntervalChanging();
  }
};

// Reset interval update after removing it (user clicked on slide or swiped it)
OnePictureSlider.prototype.updateIntervalChanging = function() {
  if (!this._intervalID) {
    setTimeout(() => this.setIntervalChanging(), 1500);
  }
};

OnePictureSlider.prototype._decSlide = function() {
  if (this.images[this._current - 1]) {
    this._current -= 1;
  } else {
    this._current = this.images.length - 1;
  }
};

OnePictureSlider.prototype._incSlide = function() {
  if (this.images[this._current + 1]) {
    this._current += 1;
  } else {
    this._current = 0;
  }
};

OnePictureSlider.prototype.prev = function() {
  this._decSlide();
  this._changeSlide();
};

OnePictureSlider.prototype.next = function() {
  this._incSlide();
  this._changeSlide();
};

OnePictureSlider.prototype.detectSwipe = function() {
  const h = new Hammer(this.container);
  h.on('swipe', (e) => {
    this.removeIntervalChanging();
    if (e.direction === Hammer.DIRECTION_LEFT) {
      this.next();
    } else if (e.direction === Hammer.DIRECTION_RIGHT) {
      this.prev();
    }
  });
};

OnePictureSlider.prototype.initEventListeners = function() {
  // this.prevBtn.addEventListener('click', () => {
  //   this.prev();
  //   this.removeIntervalChanging();
  // });

  // this.nextBtn.addEventListener('click', () => {
  //   this.next();
  //   this.removeIntervalChanging();
  // });

  if (typeof Hammer === 'function') {
    this.detectSwipe();
  } else {
    console.warn('Please, define Hammer.js to enabling swipe slide changing');
  }
};

document.addEventListener('DOMContentLoaded', () => {
 // Set home about us section's slider
  const aboutOptions = {
    container: document.querySelector('.client-feedbacks'),
    images: document.querySelectorAll('.client-info'),
    prevBtn: document.querySelector('.about-section__slider .about-section__slider-arrow--left'),
    nextBtn: document.querySelector('.about-section__slider .about-section__slider-arrow--right'),
  };

  const aboutSlider = new OnePictureSlider(aboutOptions);
  aboutSlider.init();

  // Set home features mobile slider
  const featuresOptions = {
    container: document.querySelector('.advantages-case--mobile'),
    images: document.querySelectorAll('.advantage--mobile'),
    prevBtn: document.querySelector('.advantage-arrow-left'),
    nextBtn: document.querySelector('.advantage-arrow-right'),
  };

  const featuresSlider = new OnePictureSlider(featuresOptions);
  featuresSlider.init();

  // Set home certificates mobile slider
  const certificatesOptions = {
    container: document.querySelector('.certificates-section__certificates-case--mobile'),
    images: document.querySelectorAll(
      '.certificates-section__certificates-case--mobile .certificates-section__certificate-box'
    ),
    prevBtn: document.querySelector('.certificates-arrow-left'),
    nextBtn: document.querySelector('.certificates-arrow-right'),
  };

  const certSlider = new OnePictureSlider(certificatesOptions);
  certSlider.init();

  // Set brands slide for tmpl-about.php
  const brandsOptions = {
    container: document.querySelector('.ability-and-quality__brand-materials-mobile'),
    images: document.querySelectorAll(
      '.ability-and-quality__brand-materials-mobile .ability-and-quality__brand-material-box'
    ),
    prevBtn: document.querySelector('.arrow-nav-left'),
    nextBtn: document.querySelector('.arrow-nav-right'),
  };

  const brandSlider = new OnePictureSlider(brandsOptions);
  brandSlider.init();
});