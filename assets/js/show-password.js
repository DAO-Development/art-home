var togglePassword1 = document.getElementById('togglePassword1');
var togglePassword2 = document.getElementById('togglePassword2');
var togglePassword3 = document.getElementById('togglePassword3');
var togglePassword99 = document.getElementById('togglePassword99');

var showOrHidePassword1 = () => {
	console.log(1);
	let password = document.getElementById('old-password');
	  if (password.type === 'password') {
	    password.type = 'text';
	  } else {
	    password.type = 'password';
	  }
};

var showOrHidePassword2 = () => {
	console.log(1);
	let password = document.getElementById('new-password');
	  if (password.type === 'password') {
	    password.type = 'text';
	  } else {
	    password.type = 'password';
	  }
};

var showOrHidePassword3 = () => {
	console.log(1);
  let password = document.getElementById('same-password');
	  if (password.type === 'password') {
	    password.type = 'text';
	  } else {
	    password.type = 'password';
	  }
};


togglePassword1.addEventListener('change', showOrHidePassword1);
togglePassword2.addEventListener('change', showOrHidePassword2);
togglePassword3.addEventListener('change', showOrHidePassword3);