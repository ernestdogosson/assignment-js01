let username = prompt('Enter username here');
let password = prompt('Enter password here');

function isValidPassword(password, username) {
	return password.includes(username) ||
		password.length < 8 ||
		/\s/.test(password)
		? console.log(false)
		: console.log(true);
}

isValidPassword(password, username);


function checkNumber()