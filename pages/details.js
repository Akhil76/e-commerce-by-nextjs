import {Container,Paper,Divider,Typography,Toolbar,Button} from "@mui/material";


export default function Details(){
    return(
        <Container>
            <Paper>
                <div>
                    <img src="../img/hp.jpg"/>
                </div>
                <div>
                    <Divider/>
                    <Typography variant="h6">Hp elite Desk</Typography>
                    <Divider/>
                    <Typography variant="h6">Price: 5000 Tk</Typography>
                </div>
                <Toolbar>
                    <Button variant="contained" color="primary">Details</Button>
                    <Button variant="contained" color="primary">Cart</Button>
                </Toolbar>
            </Paper>
        </Container>
    )
}