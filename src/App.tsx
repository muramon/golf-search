import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from './ProTip';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SportsGolfIcon from '@mui/icons-material/SportsGolf';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import Copyright from './components/Copyright'
import Credit from './components/Credit'
import ClubList from './components/Clubs'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
// import Search from './components/Search';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import ArrowCircleRightSharpIcon from '@mui/icons-material/ArrowCircleRightSharp';
import Appbar from './components/Appbar';
import { analytics } from "./firebase_config";
import { logEvent } from "firebase/analytics";


const App = () => {
  //primaryとsecondaryで、色を指定します
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

  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    console.log('event target value')
    console.log(event.target.value)
    console.log(searchTerm)
  };
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const [items, setItems] = useState([{"rank":22,"itemName":"","catchcopy":"","mediumImageUrls":"","affiliateUrl":"","affiliateRate":"4.0","itemCaption":"","itemPrice":"","reviewAverage":""}])
  useEffect(() => {
    // fetch("http://localhost:8990/search", {
    fetch("https://golfbuy-api.herokuapp.com/search", { method: "GET" })
          .then(res => res.json(),
          )
          .then(data => {
              console.log(data)
              setItems(data);
              console.log('session strage search')
              console.log(sessionStorage.getItem('term'))
              console.log('session strage search')
              console.log('searched')
              console.log(items)
              logEvent(analytics, 'screen_view');
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              // setIsLoaded(true);
              setError(error);
              console.log(error)
            }
          )
    } ,[]);

  useEffect ( () => {
    console.log('reload func')
    const keepterm = sessionStorage.getItem('term')
    console.log('useeffect')
    console.log(keepterm)
    fetch("https://golfbuy-api.herokuapp.com/search", {
    // fetch("http://localhost:8990/search", { 
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            term: {'searchTerm': keepterm},
          })
        })
        .then(res => res.json(),
        )
        .then(data => {
            console.log(data)
            setItems(data);
            console.log('session strage search')
            console.log(sessionStorage.getItem('term'))
            console.log('session strage search')
            console.log('searched')
            console.log(items)
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            // setIsLoaded(true);
            setError(error);
            console.log(error)
          }
        )
  } ,[]);
  
  console.log(items)
  const handleSearchSubmit = async () => {
    console.log("searching now")
    sessionStorage.setItem('term', searchTerm)
    // const searched_items = Search({searchTerm});
    // console.log(searched_items)
    fetch("https://golfbuy-api.herokuapp.com/search", {
    // fetch("http://localhost:8990/search", { 
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            term: {searchTerm},
          })
        })
        .then(res => res.json(),
        )
        .then(data => {
            console.log(data)
            setItems(data);
            // var results = localStorage.setItem('results', 'data');
            // sessionStorage.setItem('term', searchTerm)
            // // console.log('session strage')
            // // console.log(sessionStorage.getItem('term'))
            // // console.log('session strage')
            // // // console.log(results)
            // // console.log('searched')
            console.log(items)
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            // setIsLoaded(true);
            setError(error);
            console.log(error)
          }
        )
  };

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  // 追加: Drawer の開閉
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen); // Drawer の開閉状態を反転
  };

  return (
    <ThemeProvider theme={myTheme}>
      <CssBaseline />
      <Appbar/>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h5"
              align="center"
              color="text.primary"
              gutterBottom
            >
              ゴルフクラブをまとめて検索
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
              >
                <IconButton sx={{ p: '10px' }} aria-label="menu">
                  <SportsGolfIcon />
                </IconButton>
                {/* <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search Golf Clubs"
                  inputProps={{ 'aria-label': 'search golf clubs' }}
                /> */}
                <TextField fullWidth 
                  id="outlined-basic" 
                  label="search golf clubs" 
                  variant="standard" 
                  size="small" 
                  value={searchTerm}
                  onChange={handleChange}/>
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={handleSearchSubmit}>
                  <SearchIcon />
                </IconButton>
              </Paper>
            </Stack>
            <ImageList sx={{ height: 450,
              display: "grid",
              gridTemplateColumns:  "repeat(4, 1fr)"}}>
              <ImageListItem key="Subheader" cols={2}>
                <ListSubheader component="div"></ListSubheader>
              </ImageListItem>
              {items.map((item) => (
                <ImageListItem key={item.rank}>
                  <img
                    src={item.mediumImageUrls}
                    srcSet={item.mediumImageUrls}
                    alt={item.itemName}
                    loading="lazy"
                    onClick={() => navigate("detail", { state: { src: item.mediumImageUrls, 
                      price: item.itemPrice,
                      title: item.itemName,
                      caption: item.itemCaption,
                      affiliateurl: item.affiliateUrl,
                      rank: item.rank} })}
                  />
                  <ImageListItemBar
                    title={item.itemName}
                    subtitle={`¥ ${item.itemPrice} 円`}
                    onClick={() => navigate("detail", { state: { src: item.mediumImageUrls, 
                      price: item.itemPrice,
                      title: item.itemName,
                      caption: item.itemCaption,
                      affiliateurl: item.affiliateUrl,
                      rank: item.rank} })}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Container>
        </Box>
        
      </main>
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

export default App;