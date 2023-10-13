import { About } from "./components/about/about";
import { Contact } from "./components/contact/contact";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { NavBar } from "./components/nav-bar/nav-bar";
import { PropertyCatalogList } from "./components/property-components/property-catalog-list/property-catalog-list";
import { Search } from "./components/search/search";
import { Spinner } from "./components/spinner/spinner";
import { Team } from "./components/team/team";
import { Testemonial } from "./components/testemonial/testemonial";

function App() {
	return (
		<div>
			<div className="container-xxl bg-white p-0">
				{/* <Spinner /> */}
				<NavBar />
				<Header />
				<Search />
				<About />
				<PropertyCatalogList />
				<Team />
				<Testemonial />
				<Contact />
				<Footer />
				{/* Back to Top */}
				<a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
					<i className="bi bi-arrow-up" />
				</a>
			</div>
		</div>
	);
}

export default App;
