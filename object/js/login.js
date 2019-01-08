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
			//恢复动画效果
			el.classList.add('car-active');
		}
		temp = -1519 * i;
		el.style.left = temp + 'px';
		if(i > 4) {
			//无缝轮播,失去动画效果
			el.classList.remove('car-active');
			el.style.left = 0 + 'px';
			i = 0;
		}
	}, delay);
}

var ensurePwd = function() {
	var regPwd = document.getElementById('reg-pwd');
	var enPwd = document.getElementById('en-pwd');
	enPwd.addEventListener('keyup', function(ev) {
		if(regPwd.value != enPwd.value && enPwd.value != '') {
			//禁止提交
			var btn = document.getElementById('btn-reg');
			btn.disabled = false;
			//显示提示
			var info = document.getElementById('en-info');
			info.innerHTML = '<b>两次密码输入不一样</b>';
		}
		else {
			var info = document.getElementById('en-info');
			info.innerHTML = '';
			var btn = document.getElementById('btn-reg');
			btn.disabled = false;
		}
	});
}

var encodeLogPwd = function() {
	var inPwd = document.getElementById('in-pwd');
	var realPwd = document.getElementById('re-pwd');

	inPwd.onkeyup = function(ev)  {		
		realPwd.value = md5(inPwd.value);
	}
	
}

var encodeRegPwd = function() {
	var regPwd = document.getElementById('reg-pwd');
	var regRePwd = document.getElementById('reg-re-pwd');
	regRePwd.value = md5(regPwd.value);
	var fo = document.getElementById('reg-form').submit();//提交表单
}

encodeLogPwd();
ensurePwd();
autoPlay(2000);
