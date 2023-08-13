import React from "react";
import Article from "../components/Article";

const articles = [
	{
		id: 1,
		title: "Czym jest teoria strun",
		author: "Jan Nowak",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione vitae error soluta sunt. Culpa esse nisi quibusdam eum tempora eos at cum, velit quia, doloribus laborum quaerat cumque, dolore nemo?",
	},
	{
		id: 2,
		title: "Czym jest paradoks fermiego",
		author: "Jan Nowak",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione vitae error soluta sunt. Culpa esse nisi quibusdam eum tempora eos at cum, velit quia, doloribus laborum quaerat cumque, dolore nemo?",
	},
	{
		id: 3,
		title: "Ciemna materia i ciemna energia",
		author: "Jan Nowak",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione vitae error soluta sunt. Culpa esse nisi quibusdam eum tempora eos at cum, velit quia, doloribus laborum quaerat cumque, dolore nemo?",
	},
];

const HomePage = () => {
	const artList = articles.map((article) => (
		<Article key={article.id} {...article} />
	));

	return <div className="Home">{artList}</div>;
};

export default HomePage;
