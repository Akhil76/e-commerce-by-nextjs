import {Container, Typography } from "@mui/material";



export default function Footer(){
    return(
        <div style={{background:"black",minHeight:"100px"}}>
            <Container>
                <Typography variant="h6" color="white" align="center">Footer</Typography>
            </Container>
        </div>
    )
}