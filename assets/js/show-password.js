const togglePassword1 = document.getElementById('togglePassword1');
const togglePassword2 = document.getElementById('togglePassword2');
const togglePassword3 = document.getElementById('togglePassword3');
const togglePassword99 = document.getElementById('togglePassword99');

const showOrHidePassword1 = () => {
  let password = document.getElementById('old-password');
	  if (password.type === 'password') {
	    password.type = 'text';
	  } else {
	    password.type = 'password';
	  }
};

const showOrHidePassword2 = () => {
  let password = document.getElementById('new-password');
	  if (password.type === 'password') {
	    password.type = 'text';
	  } else {
	    password.type = 'password';
	  }
};

const showOrHidePassword3 = () => {
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
togglePassword99.addEventListener('change', showOrHidePassword99);