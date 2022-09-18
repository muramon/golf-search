import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SportsGolfIcon from '@mui/icons-material/SportsGolf';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import MailIcon from '@mui/icons-material/Mail';
import InstagramIcon from '@mui/icons-material/Instagram';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography'

export const Appbar = () => {    

    const navigate = useNavigate();

    const [drawerOpen, setDrawerOpen] = React.useState(false);
    // 追加: Drawer の開閉
    const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen); // Drawer の開閉状態を反転
    };

return (

    <AppBar position="relative" color="primary">
        <Drawer variant="temporary"
            open={drawerOpen}
            onClose={handleDrawerToggle}
            sx={{
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
            }}
        >
            <List>
            <ListItem>
                <ListItemIcon>
                <HomeIcon onClick={() => navigate("gallery")}/>
                </ListItemIcon>
                <ListItemText primary="Home" onClick={() => navigate("/")}/>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                <InfoIcon onClick={() => navigate("about")}/>
                </ListItemIcon>
                <ListItemText primary="About" onClick={() => navigate("/About")}/>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                <MailIcon  onClick={() => navigate("/Contact")}/>
                </ListItemIcon>
                <ListItemText primary="Contact" onClick={() => navigate("/Contact")}/>
            </ListItem>
            {/* <ListItem>
                <ListItemIcon>
                <InstagramIcon />
                </ListItemIcon>
                <ListItemText primary="Instagram"/>
            </ListItem> */}
            </List>
        </Drawer>
        <Toolbar>
        <IconButton edge="start" color="secondary" aria-label="menu" sx={{ mr: 2 }} onClick={handleDrawerToggle}>
            <MenuIcon />
        </IconButton>
        <SportsGolfIcon sx={{ mr: 2 }} />
        <Typography variant="h6" color="inherit" noWrap>
            ゴルバイ
        </Typography>
        </Toolbar>
    </AppBar>
    )
}

export default Appbar