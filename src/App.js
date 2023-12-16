import { Routes, Route } from "react-router-dom"

import { Home } from "./components/base-components/home/home";
import { Contact } from "./components/base-components/contact/contact";
import { Footer } from "./components/base-components/footer/footer";
import { NavBar } from "./components/base-components/nav-bar/nav-bar";
import { PropertyCatalogList } from "./components/property-components/property-catalog-list/property-catalog-list";
import { Login } from "./components/auth-components/login/login";
import { Register } from "./components/auth-components/register/register";
import { Logout } from "./components/auth-components/logout/logout";
import { PropertyAdd } from "./components/property-components/property-add/property-add";
import { PropertyUserList } from "./components/property-components/property-user-list/property-user-list";
import { PropertyDetails } from "./components/property-components/property-details/property-details";
import { PropertyEdit } from "./components/property-components/property-edit/property-edit";
import { AuthProvider } from './contexts/AuthContext';
import { PrivateRoute } from "./components/special-route/private-route";
import { PropertyProvider } from "./contexts/PropertyContext";
import { Unauthorized } from "./components/base-components/unauthorized/unauthorized";
import { NotFound } from "./components/base-components/not-found/not-found";


function App() {
	return (
		<AuthProvider>
			<div>
				<div className="container-xxl bg-white p-0">
					<NavBar />
					<PropertyProvider>
						<Routes>
							<Route path="/" element={<Home />}></Route>
							<Route path="/register" element={<Register />}></Route>
							<Route path="/login" element={<Login />}></Route>
							<Route path="/catalog" element={<PropertyCatalogList />}></Route>
							<Route path="/catalog/:propertyId" element={<PropertyDetails />}></Route>
							<Route path="/contact" element={<Contact />}></Route>

							<Route element={<PrivateRoute />} >
								<Route path="/logout" element={<Logout />}></Route>
								<Route path="/my-properties" element={<PropertyUserList />}></Route>
								<Route path="/add-property" element={<PropertyAdd />}></Route>
								<Route path="/catalog/:propertyId/edit" element={<PropertyEdit />} />
							</Route>

							<Route path="/unauthorized" element={<Unauthorized />}></Route>
							<Route path="*" element={<NotFound />}></Route>
						</Routes>
					</PropertyProvider>
					<Footer />
				</div>
			</div>
		</AuthProvider>
	);
}

export default App;
