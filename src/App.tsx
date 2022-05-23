import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import {
	BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';
// import "AOS" from 'aos';
import React from 'react';
import Homepage from '../src/Component/Homepage';
// import PageHeader from './Component/PageHeader';
import Pageheader1 from './Component/Pageheader1';
import UnderProgress from './Component/UnderProgress';
import Footer from './Component/Footer';
// import IndeskCard from './Component/IndeskCard';



// AOS.init();
class App extends React.Component {
	render() {
		return (
			<div>

				<Router>
					<Pageheader1 />
					<Routes>
						<Route path='/' element={<Homepage />} />
						<Route path='*' element={<UnderProgress />} />
				        

					</Routes>
					{/* <IndeskCard></IndeskCard> */}
					<Footer/>


				</Router>
			</div>
		)
	}
}

export default App;
