var inp = document.getElementsByName('pmenu');
var tab = [];
tab[0] = document.getElementById('infot');
tab[1] = document.getElementById('orderst');
tab[2] = document.getElementById('likedt');
tab[3] = document.getElementById('specialt');
for (var i = 0; i < inp.length; i++) {
	inp[i].addEventListener("click", function() {
		for (var j = 0; j< inp.length; j++) {
        	inp[j].classList.remove('active');
    		tab[j].classList.remove('vis');
    	}
		check();
	});
}

function check() {
    for (var i = 0; i < inp.length; i++) {
        if (inp[i].checked) {
        	inp[i].classList.add('active');
        	tab[i].classList.add('vis');
        }
    }
}