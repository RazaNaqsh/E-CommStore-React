import React, { useState } from "react";

import "./signIn.scss";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";

const SignIn = () => {
	const [id, setId] = useState({
		email: "",
		password: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
	};
	const handleChange = (e) => {
		const { name, value } = e.target;
		setId((prevId) => ({ ...prevId, [name]: value }));
	};

	return (
		<div className="sign-in">
			<h2 className="title">I already have a account</h2>
			<span>Sign in with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					type="email"
					name="email"
					value={id.email}
					handleChange={handleChange}
					label="email"
					required
				/>

				<FormInput
					type="password"
					name="password"
					value={id.password}
					handleChange={handleChange}
					label="password"
					required
				/>

				<div className="buttons">
					<CustomButton type="submit">Sign In</CustomButton>
					<CustomButton
						// onClick={signInWithGoogle}
						isGoogleSignIn
					>
						{" "}
						Sign in with Google{" "}
					</CustomButton>
				</div>
			</form>
		</div>
	);
};

export default SignIn;
