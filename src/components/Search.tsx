import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import SportsGolfIcon from '@mui/icons-material/SportsGolf';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Search() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    console.log(searchTerm)
  };
  const navigate = useNavigate();
  const [items, setItems] = useState([{"rank":22,"itemName":"更新前【カスタム】2022 キャロウェイゴルフ ROGUE ST MAX IRONS ローグ ST MAX アイアン【 日本仕様】5本セット(#6〜9,PW)","catchcopy":"","mediumImageUrls":"https:\\/\\/thumbnail.image.rakuten.co.jp\\/@0_mall\\/kotobukigolf\\/cabinet\\/image8\\/10052619-1.jpg?_ex=128x128","affiliateUrl":"https:\\/\\/hb.afl.rakuten.co.jp\\/hgc\\/g00plmsa.i98ricf1.g00plmsa.i98rj2b3\\/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkotobukigolf%2F10052619%2F","affiliateRate":"4.0","itemCaption":"2022年3月発売 メーカー希望小売価格はメーカーサイトに基づいて掲載しています※特別価格の為、売り切れの際はご了承お願いいたします。","itemPrice":"105600","reviewAverage":"0.0"}]);
  const handleSearchSubmit = async () => {
        
    // setSearchTerm(searchForm.current.value)
    console.log(searchTerm)
    const fetchSearch = async () => {
        const params = {searchTerm: searchTerm}
        console.log(params)
        // const response = await axios("/api/search", { params });
        // const data = response.data
        // setResTable(data)
        // console.log(resTable)
        fetch("https://golfbuy-api.herokuapp.com/", { method: "GET" })
          .then(res => res.json(),
          )
          .then(data => {
              setItems(data);
              console.log(data)
            }
          )
        navigate("Searchresults", { state: { data: items }})
    };
    fetchSearch();
};

  return (
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
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" onClick={handleSearchSubmit}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
