import React from "react";
import { Route, Routes, useLocation, useParams } from "react-router-dom";

const FooterText = () => {
	// const { pathname } = useLocation();
	const { page, idProduct } = useParams();

	if (typeof idProduct !== "undefined") {
		return (
			<>
				<p>jestes na {page}</p>
				<p>jestes na {idProduct}</p>
			</>
		);
	} else {
		return (
			<>
				<p>jestes na {page}</p>
			</>
		);
	}
};

const Footer = () => {
	return (
		<div>
			<h3>Stopka</h3>
			<Routes>
				<Route path="/" element={<p>Jesteś na stronie głównej</p>} />
				<Route path="/:page" element={<FooterText />} />
				<Route path="/:page/:idProduct" element={<FooterText />} />
			</Routes>
		</div>
	);
};

export default Footer;
