var togglePassword01 = document.getElementById('togglePassword01');
var togglePassword02 = document.getElementById('togglePassword02');
var togglePassword03 = document.getElementById('togglePassword03');
var togglePassword099 = document.getElementById('togglePassword099');

var showOrHidePassword01 = () => {
	console.log(1);
	let password = document.getElementById('0old-password');
	  if (password.type === 'password') {
	    password.type = 'text';
	  } else {
	    password.type = 'password';
	  }
};

var showOrHidePassword02 = () => {
	console.log(1);
	let password = document.getElementById('0new-password');
	  if (password.type === 'password') {
	    password.type = 'text';
	  } else {
	    password.type = 'password';
	  }
};

var showOrHidePassword03 = () => {
	console.log(1);
  let password = document.getElementById('0same-password');
	  if (password.type === 'password') {
	    password.type = 'text';
	  } else {
	    password.type = 'password';
	  }
};


togglePassword01.addEventListener('change', showOrHidePassword01);
togglePassword02.addEventListener('change', showOrHidePassword02);
togglePassword03.addEventListener('change', showOrHidePassword03);