import { Routes, Route } from "react-router-dom"

import { Home } from "./components/home/home";
import { Contact } from "./components/contact/contact";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { NavBar } from "./components/nav-bar/nav-bar";
import { PropertyCatalogList } from "./components/property-components/property-catalog-list/property-catalog-list";
import { Spinner } from "./components/spinner/spinner";
import { Team } from "./components/team/team";
import { Testemonial } from "./components/testemonial/testemonial";

function App() {
	return (
		<div>
			<div className="container-xxl bg-white p-0">
				{/* <Spinner /> */}
				<NavBar />
				{/* <Header /> */}
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/catalog" element={<PropertyCatalogList />}></Route>
					<Route path="/team" element={<Team />}></Route>
					<Route path="/testimonial" element={<Testemonial />}></Route>
					<Route path="/contact" element={<Contact />}></Route>
				</Routes>
				<Footer />
			</div>
		</div>
	);
}

export default App;
