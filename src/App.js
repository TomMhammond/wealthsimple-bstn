import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import PageHeader from "./components/PageHeader/PageHeader";

function App() {
	return (
		<div className="background">
			<PageHeader title={"Home"} />
			<NavBar />
		</div>
	);
}

export default App;
