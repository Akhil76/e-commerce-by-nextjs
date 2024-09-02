import Footer from "../components/Footer";
import Header from "../components/Header";
import Navigation from "../components/Navigation";


export default function RootLayout({ children }) {
    return (
        <div className="">
            <Header />
            <Navigation />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
