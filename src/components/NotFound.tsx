import * as React from 'react';
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
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
import Copyright from './Copyright'
import Credit from './Credit'
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import Appbar from './Appbar';


export const NotFound = () => {

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
        <Appbar/>
        <div className="main-content">
        <div className="header py-7 py-lg-8" />
        <Container className="mt--8 pb-5">
            <Row className="justify-content-center">
            <Col lg="8" md="8">
            <h1>404エラー</h1>
                <Card className="bg-secondary shadow border-0">
                <CardBody className="px-lg-5 py-lg-5">
                    <p>お探しのページは見つかりませんでした。</p>
                    {/* <Link to='/home'>ログイン画面へ</Link> */}
                </CardBody>
                </Card>
            </Col>
            </Row>
        </Container>
        </div>
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
  );
}

export default NotFound