import * as React from 'react';
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from './Copyright'
import Credit from './Credit'
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import Appbar from './Appbar';

export const Contact = () => {

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
        <div className="main-content">
        <div className="header py-7 py-lg-8" />
        <Appbar/>
        <Container className="mt--8 pb-5">
            <Row className="justify-content-center">
            <Col lg="8" md="8">
            <h1>Comming soon ...</h1>
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

export default Contact