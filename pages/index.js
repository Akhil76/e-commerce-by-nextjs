import styles from '../styles/Home.module.css';
import { Grid} from '@mui/material';
import Card from "../components/Card";

export default function Home() {
  return (
    <div className={styles.container}>
      <Grid direction="row" justifyContent="flex-start" container>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </Grid>
    </div>
  )
}
