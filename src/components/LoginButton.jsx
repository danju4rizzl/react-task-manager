import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
	const { loginWithRedirect } = useAuth0();
	return (
		<button
			onClick={() => loginWithRedirect()}
			className="py-1.5 px-8 mx-5 ease-in duration-300 rounded-md border border-red-400 text-red-400 hover:text-white hover:bg-red-400 "
		>
			Login
		</button>
	);
};

export default LoginButton;
