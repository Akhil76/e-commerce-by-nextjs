import Link from "next/link";
import AppBar from '@mui/material/AppBar';



export default function Navigation(){
    return(
        <AppBar className="navBar" position="sticky">
            <div className="nav">
                <ul style={{display:"flex",listStyle:"none"}}>
                    <li><Link href="/"><a>Home</a></Link></li>
                    <li><Link href="/about"><a>About</a></Link></li>
                    <li><Link href="/category"><a>Category</a></Link></li>
                </ul>
            </div>
        </AppBar>
    )
}