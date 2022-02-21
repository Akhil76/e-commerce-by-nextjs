import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Navigation from "../layout/Navigation";

export default function Layout({children}){
	return(
	<>
	<Header/>
	<Navigation/>
	 <main style={{minHeight:"380px"}}>
	 	{children}
	 </main>
	<Footer/>	
	</>
	)
}