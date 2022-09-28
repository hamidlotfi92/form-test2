import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toast';
import './App.css';
import { Login } from './views/Login';
import { Report } from './views/Report';
import { Setting } from './views/Setting';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Navigate to={'/report'} replace></Navigate>} />
					<Route path="/report" element={<Report />} />
					<Route path="/setting" element={<Setting />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</BrowserRouter>
			<ToastContainer delay={5000} position="top-right" />
		</>
	);
}

export default App;
