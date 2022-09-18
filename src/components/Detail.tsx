import * as React from 'react';
import { memo, useState, useEffect, VFC } from "react"
import { useLocation } from "react-router-dom"
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SportsGolfIcon from '@mui/icons-material/SportsGolf';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
import Copyright from './Copyright'
import Credit from './Credit'


function Detail() {
    const location = useLocation()
    const [selectId] 
    = useState<{ src: string, 
                 price: number, 
                 title: string,
                 caption: string,
                 affiliateurl: string }>(location.state as { src: string, 
                                                             price: number, 
                                                             title: string, 
                                                             caption: string, 
                                                             affiliateurl: string })

    const myTheme = createTheme({
        palette: {
        primary: {
            main: "#424242",
        },
        secondary: {
            main: "#9e9e9e",
        },
        },
    });

    const navigate = useNavigate();

    const [drawerOpen, setDrawerOpen] = React.useState(false);
    // 追加: Drawer の開閉
    const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen); // Drawer の開閉状態を反転
    };

                                                             
    return (
        <ThemeProvider theme={myTheme}>
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
                <InfoIcon />
                </ListItemIcon>
                <ListItemText primary="Contact"/>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                <InfoIcon />
                </ListItemIcon>
                <ListItemText primary="Instagram"/>
            </ListItem>
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
            <Grid container direction="column" alignItems="center">
                <Paper elevation={0}>
                    <Box padding={5} sx={{ textAlign: 'center' }}>
                        <img src={selectId.src} alt={selectId.title} height={256}/>
                    </Box>
                    <Box padding={1}>
                        <Typography variant="h5" component="h5">
                            <b>{selectId.title}</b>
                        </Typography>
                    </Box>
                    <Box padding={1} sx={{ textAlign: 'left' }}>
                        <Typography variant="h5" component="h5">
                            <b style={{color: "red"}}>¥{selectId.price}円 (税込)</b>
                        </Typography>
                    </Box>
                    <Box padding={1} sx={{ textAlign: 'left' }}>
                        <Typography variant="body1" component="p">
                            <a href={selectId.affiliateurl}>購入はこちら</a>
                        </Typography>
                    </Box>
                    <Box padding={1} sx={{ textAlign: 'left' }}>
                        <Typography variant="h4" component="h4">
                            <hr color="#D3D3D3"></hr>
                            <b>商品の説明</b>
                        </Typography>
                    </Box>
                    <Box padding={1}>
                        <Typography variant="body2" component="p">
                            {selectId.caption}
                        </Typography>
                    </Box>                
                </Paper>
            </Grid>
            {/* Footer */}
            <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                </Typography>
                <Typography
                variant="subtitle1"
                align="center"
                color="text.secondary"
                component="p"
                >
                </Typography>
                <Credit />
                <Copyright />
            </Box>
            {/* End footer */}
        </ThemeProvider>
    )
}

export default Detail