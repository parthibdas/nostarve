
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./App.css";
import Homepage from "./homepage";
import Member from "./pages/member";
import Feedback from "./pages/feedback";


function App() {
	const [user, setUser] = useState(null);

	const getUser = async () => {
		try {
			const url = `http://localhost:8080/auth/login/success`;
			const { data } = await axios.get(url, { withCredentials: true });
			setUser(data.user._json);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
    console.log(user);
    // if (user){
    //   window.location.replace('http://localhost:3000/')
    // }
		getUser();

	}, [user]);

	return (
		<div className="container1001">
			<Routes>
				<Route
					
					path="/"
					element={user ? <Home user={user} /> : <Navigate to="/Home" />}
				/>
				<Route
					exact
					path="/login"
					element={user ? <Navigate to="/" /> : <Login />}
				/>
				<Route
					path="/signup"
					element={user ? <Navigate to="/" /> : <Signup />}
				/>
        <Route
					exact
					path="/Home"
					element={user ? <Navigate to="/" /> : <Homepage />}
				/>
        <Route
					exact
					path="/1236547890"
					element={<Member />}
				/>
		<Route
					exact
					path="/feedback"
					element={<Feedback user={user} />}
				/>
			</Routes>
		</div>
	);
}

export default App;