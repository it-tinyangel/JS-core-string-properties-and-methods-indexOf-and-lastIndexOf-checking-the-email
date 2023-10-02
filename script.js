let userInputEmail = prompt('Input your email:');

let atIndex = userInputEmail.indexOf("@");

let dotIndex = userInputEmail.lastIndexOf(".");

if (atIndex !== 0 && atIndex !== -1 && dotIndex > atIndex) {
	console.log('Email is valid.');
} else {
	console.log('Email isn\'t valid.');
}

