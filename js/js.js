// Polyfill for IE11 missing NodeList.forEach 
if ('NodeList' in window && !NodeList.prototype.forEach) {
    console.info('polyfill for IE11');
    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
    }
};
};

// text__hidden
if(document.querySelector('.text__hidden')){
	let textHidden = document.querySelectorAll('.text__hidden');

	textHidden.forEach(function(el){
		let btnMore = el.nextElementSibling;

		btnMore.addEventListener('click', function(){

			el.classList.toggle('text__open');
			(el.classList.contains('text__open')) ? this.innerHTML = 'Показати менше' : this.innerHTML = 'Показати більше';
		});
	});
}