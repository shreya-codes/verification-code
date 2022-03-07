import React, { useState } from 'react';
import axios from 'axios';
import OTPInput from 'otp-input-react';
import { useNavigate } from 'react-router-dom';

export default function OTP() {
	const [otps, setotps] = useState({ otp: '' });

	const HandleChange = (otp) => setotps({ otp });
	let navigate = useNavigate();

	const HandleSubmit = async (e) => {
		try {
			e.preventDefault();
			const res = await axios.post('http://localhost:3001/api/Otp', otps);
			console.log(res.data.otp);
			if(res){
				navigate('/success');
			}
		} catch (err) {
			console.log(err);
			alert('The otp entered is either not a 6 digit or  the last digit is 7');
		}
	};

	return (
		<div className='container'>
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
		</div>
	);
}
