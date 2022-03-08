import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OTP from './components/Otp';
import Success from './components/success';
import VerificationError from './components/verificationerror';
import './styles/style.css';
export default function App() {
	const [errorsOccured, seterrorsOccured] = useState(false);

	return (
		<>
			<Router>
				<Routes>
					<Route
						path='/'
						exact
						element={<OTP errorsOccured={errorsOccured} seterrorsOccured={seterrorsOccured} />}
					/>
					<Route path='/success' element={<Success />} />
					<Route path='*' element={<VerificationError />} />
				</Routes>
			</Router>
		</>
	);
}
