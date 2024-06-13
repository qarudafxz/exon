import "./index.css";
import { Analytics } from "@vercel/analytics/react";
import bg from "./assets/bg.png";
import Hero from "./pages/Hero";
import Objective from "./pages/Objective";
import arrow from "./assets/arrow.png";
import Navbar from "./components/Navbar";
import PrimaryServices from "./pages/PrimaryServices";
import ExtensionService from "./pages/ExtensionService";

function App() {
	return (
		<>
		<Navbar/>
			<div
				style={{
					backgroundImage: `url(${bg})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					height: "100vh",
					width: "100%",
				}}>
				<Hero />
				<div className='flex justify-center items-center'>
					<img
						src={arrow}
						alt='Arrow'
						className='absolute bottom-0 animate-bounce w-10 h-10'
					/>
				</div>
			</div>
			<Objective />
			<PrimaryServices />
			<ExtensionService/>
			<Analytics />
		</>
	);
}

export default App;
