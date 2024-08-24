import Footer from "../components/Footer";
import Header from "../components/Header";
import Navigation from "../components/Navigation";


export default function RootLayout({ children }) {
    return (
        <div className="h-screen">
            <Header />
            <Navigation />
            <div>{children}</div>
            <Footer />
        </div>
    );
}
