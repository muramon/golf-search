import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import ArrowCircleRightSharpIcon from '@mui/icons-material/ArrowCircleRightSharp';
import { useNavigate, Link } from 'react-router-dom';
import Search from './Search';
import { useState, useEffect } from 'react';

// type Item= {
//   rank: number,
//   itemName: string, 
//   catchcopy: string, 
//   mediumImageUrls: string,
//   smallImageUrls: string,
//   affiliateUrl: string, 
//   affiliateRate: number,
//   itemCaption: string, 
//   itemPrice: number, 
//   reviewAverage: number,
// };
type ClubListProps = { searchTerm: string };

const ClubList = ({searchTerm}: ClubListProps) => {
  const navigate = useNavigate();
  console.log(searchTerm)
  // const [error, setError] = useState(null);
  // // const [isLoaded, setIsLoaded] = useState(false);
  // const [items, setItems] = useState([{"rank":22,"itemName":"更新前【カスタム】2022 キャロウェイゴルフ ROGUE ST MAX IRONS ローグ ST MAX アイアン【 日本仕様】5本セット(#6〜9,PW)","catchcopy":"","mediumImageUrls":"https:\\/\\/thumbnail.image.rakuten.co.jp\\/@0_mall\\/kotobukigolf\\/cabinet\\/image8\\/10052619-1.jpg?_ex=128x128","affiliateUrl":"https:\\/\\/hb.afl.rakuten.co.jp\\/hgc\\/g00plmsa.i98ricf1.g00plmsa.i98rj2b3\\/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkotobukigolf%2F10052619%2F","affiliateRate":"4.0","itemCaption":"2022年3月発売 メーカー希望小売価格はメーカーサイトに基づいて掲載しています※特別価格の為、売り切れの際はご了承お願いいたします。","itemPrice":"105600","reviewAverage":"0.0"}]);

  // const params = {
  //                     'applicationId': '1036157472940221185',
  //                     'affiliateId' : '25de4e9e.e4d4424e.25de4e9f.207712e9',
  //                     'genreId' : '201706',
  //                     'period' : 'realtime'                     
  //                 }
  // const query_params = new URLSearchParams(params); 

  // // Note: the empty deps array [] means
  // // this useEffect will run once
  // // similar to componentDidMount()
  // useEffect(() => {
  //   fetch("https://golfbuy-api.herokuapp.com/", { method: "GET" })
  //     .then(res => res.json(),
  //     )
  //     .then(data => {
  //         setItems(data);
  //         console.log(items)
  //       },
  //       // Note: it's important to handle errors here
  //       // instead of a catch() block so that we don't swallow
  //       // exceptions from actual bugs in components.
  //       (error) => {
  //         // setIsLoaded(true);
  //         setError(error);
  //       }
  //     )
  // }, [])
  const items = Search({searchTerm});

  return (
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
          />
          <ImageListItemBar
            title={item.itemName}
            subtitle={`${item.itemPrice} 円`}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.itemPrice}`}
                onClick={() => navigate("detail", { state: { src: item.mediumImageUrls, 
                                                             price: item.itemPrice,
                                                             title: item.itemName,
                                                             caption: item.itemCaption,
                                                             affiliateurl: item.affiliateUrl,
                                                             rank: item.rank} })}
              >
                <ArrowCircleRightSharpIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default ClubList;