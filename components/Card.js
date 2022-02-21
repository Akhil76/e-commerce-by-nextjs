import { Grid,Paper,Typography,Divider,Toolbar,Button} from "@mui/material";
import Link from "next/link";


export default function Card(){
    return(
        <Grid item xs={12} sm={6} md={3}>
            <Paper style={{margin:"5px"}}>
                <Link href="/details">
                    <a>
                    <div>
                        <img src="../img/hp.jpg"/>
                    </div>
                    </a>
                </Link>
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
        </Grid>
    )
}