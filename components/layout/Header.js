import {Container, Typography } from "@mui/material";
import Link from "next/link";



export default function Headers(){
    return(
        <div style={{background:"black",height:"100px"}}>
            <Container>
                <Typography variant="h6" color="white" style={{paddingTop:"35px"}}><Link href="/">E-commersite</Link></Typography>
            </Container>
        </div>
    )
}