var autoPlay = function (delay) {
	var el = document.getElementsByClassName('car-container')[0];
	var i = -1;
	var temp;
	i++;
	temp = -1519 * i;
	el.style.left = temp + 'px';
	
	setInterval(function() {
		i++;
		if(i == 1) {
			el.classList.add('car-active');
		}
		temp = -1519 * i;
		el.style.left = temp + 'px';
		if(i > 4) {
			el.classList.remove('car-active');
			el.style.left = 0 + 'px';
			//el.classList.add('car-active');
			i = 0;
		}
	}, delay);
}

autoPlay(2000);