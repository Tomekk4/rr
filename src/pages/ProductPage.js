import React from "react";
import Product from "../components/Product";
import { Link, useParams } from "react-router-dom";

const ProductsPage = () => {
	const params = useParams();

	return (
		<>
			<div>Strona produktu</div>
			<Product id={params.id} />
			<Link to="/products">Powrót do listy produktów</Link>
		</>
	);
};

export default ProductsPage;
