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
	console.log(req.body);
	const { otp } = req.body;
	const otps = parseInt(otp);
	//check 6 digit for otp

	if (otp.length === 6) {
		console.log(otp.length);
	} else if (otp.length != 6 || otp[otp.length - 1] === 7) {
		throw new Error(
			'The otp entered is either not a 6 digit or  the last digit is 7'
		);
	}

	res.json({
		otp,
	});
});

module.exports = app;
