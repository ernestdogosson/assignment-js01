function isValidPassword(password, username) {
	return password.includes(username) ||
		password.length < 8 ||
		/\s/.test(password)
		? console.log(false)
		: console.log(true);
}

isValidPassword('dogoson123', 'dogoson');
