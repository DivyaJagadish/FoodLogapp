import React from "react";
import WebApp from "./WebApp";
import useWindowSize from "./helpers/useWindowSize";
import MobileApp from "./MobileApp";
export default function App() {
	console.log(window.innerWidth);
	const mode = window.innerWidth > 1024 ? true : false;

	return (
		<>
			{mode && <WebApp />}
			{!mode && <MobileApp />}
		</>
	);
}
