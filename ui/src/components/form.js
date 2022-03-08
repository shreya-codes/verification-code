import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OTPInput from 'otp-input-react';
import { useNavigate } from 'react-router-dom';

export default function OTP({ errorsOccured, seterrorsOccured }) {
	const [otps, setotps] = useState({ otp: '' });

	const HandleChange = (otp) => setotps({ otp });
	let navigate = useNavigate();
	useEffect(() => {
		setotps({ otp: '' });
	}, [errorsOccured]);

	const HandleSubmit = async (e) => {
		try {
			e.preventDefault();
			const res = await axios.post('http://localhost:3001/api/Otp', otps);
			console.log(res.data.otp);
			if (res) {
				console.log(res.data);
				navigate('/success');
			}
		} catch (err) {
			console.log(err);
			seterrorsOccured(true);
		}
	};

	return (
		<form onSubmit={HandleSubmit}>
			<div className='title'>Verification code:</div>
			<OTPInput
				value={otps.otp}
				onChange={HandleChange}
				autoFocus
				OTPLength={6}
				otpType='number'
				disabled={false}
				secure
			/>
			<button className='btn' type='submit'>
				Submit
			</button>
		</form>
	);
}
