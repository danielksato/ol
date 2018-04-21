export default function(number) {
	if (/[^\d]/.test(number)) {
		// if there's anything but digits, don't mess with it
		return number;
	}

	switch (number.length) {
		case 7:
			return `${number.substring(0, 3)}-${number.substring(3)}`;
		case 10:
			return `(${number.substring(0, 3)}) ${number.substring(3, 6)}-${number.substring(6)}`;
		default:
			// if it's not 7 or 10 digits, don't mess with it.
			return number;
	}
}
