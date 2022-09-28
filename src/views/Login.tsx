import { Button, Input } from 'raz-ui';
import React from 'react';
import { Wrapper } from '../components/Wrapper';

export const Login = () => {
	return (
		<>
			<Wrapper title="Login">
				<form className="raz-flex raz-flex-col raz-justify-center align-items-center  mb-5 my-3">
					<Input label="Username" />
					<Input label="Password" />
					<Button className="py-2 mt-4" width="214px">
						Login
					</Button>
				</form>
			</Wrapper>
		</>
	);
};
