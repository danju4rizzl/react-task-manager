import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
	const { logout } = useAuth0();
	return (
		<button
			onClick={() =>
				logout({ logoutParams: { returnTo: window.location.origin } })
			}
			className="py-1.5 px-8 mx-5 ease-in duration-300 rounded-md border border-red-400 text-red-400 hover:text-white hover:bg-red-400 "
		>
			Log out
		</button>
	);
};

export default LogoutButton;
