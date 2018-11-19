import React from "react";
import { Link } from 'react-router-dom';

const LogInView = ({ onSubmit }) => {
	return (
		<div className="">
			<form onSubmit={onSubmit} className="form-signin">
				<h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
				<label htmlFor="inputEmail" className="sr-only">Email address</label>
				<input type="email" name="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
				<label htmlFor="inputPassword" className="sr-only">Password</label>
				<input type="password" id="inputPassword" name="password" className="form-control" placeholder="Password" required />
				<button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
				Not Registered? <Link to="/signup">Register here</Link>
			</form>
		</div>
	);
};

export default LogInView;
