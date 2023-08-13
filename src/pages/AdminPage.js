import React from "react";
import { Route, Routes, Redirect } from "react-router-dom";

const permission = false;

const AdminLogin = () => {
	if (permission === true) {
		<h3>ADMIN</h3>;
	}
};

const AdminPage = () => {
	return <AdminLogin />;
};

export default AdminPage;
