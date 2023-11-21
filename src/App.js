import { Routes, Route } from "react-router-dom"

import { Home } from "./components/base-components/home/home";
import { Contact } from "./components/base-components/contact/contact";
import { Footer } from "./components/base-components/footer/footer";
import { NavBar } from "./components/base-components/nav-bar/nav-bar";
import { PropertyCatalogList } from "./components/property-components/property-catalog-list/property-catalog-list";
import { Spinner } from "./components/base-components/spinner/spinner";
import { Team } from "./components/base-components/team/team";
import { Testemonial } from "./components/base-components/testemonial/testemonial";
import { Login } from "./components/auth-components/login/login";
import { Register } from "./components/auth-components/register/register";
import { Logout } from "./components/auth-components/logout/logout";
import { PropertyAdd } from "./components/property-components/property-add/property-add";
import { PropertyUserList } from "./components/property-components/property-user-list/property-user-list";
import { PropertyDetails } from "./components/property-components/property-details/property-details";
import { PropertyEdit } from "./components/property-components/property-edit/property-edit";
import { PropertyDelete } from "./components/property-components/property-delete/property-delete";
import { AuthProvider } from './contexts/AuthContext';
import { PrivateRoute } from "./components/private-route/private-route";

function App() {
	return (
		<AuthProvider>
			<div>
				<div className="container-xxl bg-white p-0">
					{/* <Spinner /> */}
					<NavBar />
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/register" element={<Register />}></Route>
						<Route path="/login" element={<Login />}></Route>
						<Route path="/catalog" element={<PropertyCatalogList />}></Route>
						<Route path="/catalog/:propertyId" element={<PropertyDetails />}></Route>
						<Route path="/team" element={<Team />}></Route>
						{/* <Route path="/testimonial" element={<Testemonial />}></Route> */}
						<Route path="/contact" element={<Contact />}></Route>
					
						<Route element={<PrivateRoute />} >
							<Route path="/logout" element={<Logout />}></Route>
							<Route path="/my-properties" element={<PropertyUserList />}></Route>
							<Route path="/catalog/:propertyId/edit" element={<PropertyEdit />}></Route>
							<Route path="/catalog/:propertyId/delete" element={<PropertyDelete />}></Route>
							<Route path="/add-property" element={<PropertyAdd />}></Route>
						</Route>
					</Routes>
					<Footer />
				</div>
			</div>
		</AuthProvider>
	);
}

export default App;
