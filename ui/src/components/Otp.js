import React, { useState, useEffect } from 'react';
import Form from './form';
import Alert from '@material-ui/lab/Alert';

export default function OTP() {
	const [errorsOccured, seterrorsOccured] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			if (errorsOccured) {
				setTimeout(seterrorsOccured(false), 3000);
			}
		}, 2000);
	});

	return (
		<div className='container'>
			{errorsOccured && (
				<Alert severity='error'>
					ERROR: The code entered is either not a 6 digit or the last digit is 7
				</Alert>
			)}
			<Form errorsOccured={errorsOccured} seterrorsOccured={seterrorsOccured} />
		</div>
	);
}
