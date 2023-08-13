import React from "react";
import "../styles/Header.css";
import { Route, Routes, Switch } from "react-router-dom";

import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";

const Img1 = () => <img src={img1} alt="" />;
const Img2 = () => <img src={img2} alt="" />;
const Img3 = () => <img src={img3} alt="" />;
const Img4 = () => <img src={img4} alt="" />;

const Header = () => {
	return (
		<>
			<Routes>
				<Route path="/" exact element={<Img1 />} />
				<Route path="/products" element={<Img2 />} />
				<Route path="/contact" element={<Img3 />} />
				<Route path="/admin" element={<Img4 />} />
				<Route path="*" element={<Img1 />} />
			</Routes>
		</>
	);
};

export default Header;
