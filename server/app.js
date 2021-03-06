const express = require('express');
const cors = require('cors');
const app = express();

app.use(
	cors({
		origin: 'http://localhost:3000',
		Credential: true,
	})
);

app.use(express.json());

app.post('/api/Otp', (req, res) => {
	// console.log(req.body);
	const { otp } = req.body;
	const otps = parseInt(otp);
	//check 6 digit for otp
	console.log(typeof otp[otp.length - 1]);
	lastDigit = otp[otp.length - 1];
	if (lastDigit === '7' || otp.length !== 6) {
		throw new Error(
			'The otp entered is either not a 6 digit or  the last digit is 7'
		);
	}

	res.json({
		otp,
	});
});

module.exports = app;
