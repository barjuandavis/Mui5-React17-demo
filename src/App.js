import styles from "./App.css";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";

function App() {
  return (
    <div>
      <AppBar>
        <Typography variant="h5">Material UI 5 Demo</Typography>
      </AppBar>
      <div className={styles.root}>
        <Typography variant="body1">
          So this supposed to be the body.
        </Typography>
      </div>
    </div>
  );
}

export default App;
