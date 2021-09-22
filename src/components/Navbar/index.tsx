import "./index.css";
import { AppBar, IconButton, Typography, Toolbar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

/**
 * Navigation bar elements
 * @returns NavigationBar UI elements
 */
const NavigationBar = () => {
    return (
        <AppBar position="static" className="navbar">
            <Toolbar>
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" component="div">
                    ChambaSoft Store
                </Typography>
            </Toolbar>
        </AppBar>

    );
};

export default NavigationBar;