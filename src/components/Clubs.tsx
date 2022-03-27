import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import ArrowCircleRightSharpIcon from '@mui/icons-material/ArrowCircleRightSharp';
import { useNavigate, Link } from 'react-router-dom';
import axios, { AxiosResponse } from "axios";
import React, { useState } from 'react';

type Item= {
  rank: number;
  name: string;
  img_url: string;
  affilicate_url: string;
  description: string;
  price: number;
};

export default function ClubList() {
  const navigate = useNavigate();
  const [item, setItems] = useState<Item[]>([]);
  const resdata = axios.get("https://app.rakuten.co.jp/services/api/IchibaItem/Ranking/20170628?", {
                    params : {
                        'applicationId': '1036157472940221185',
                        'affiliateId' : '25de4e9e.e4d4424e.25de4e9f.207712e9',
                        'genreId' : '201706',
                        'period' : 'realtime'                     
                    }}).then(res => {
                        console.log(res.data.Items);
                      });

  return (
    <ImageList sx={{ height: 450,
      display: "grid",
      gridTemplateColumns:  "repeat(4, 1fr)"}}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={item.img}
            srcSet={item.img}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={`${item.price} 円`}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
                onClick={() => navigate("detail", { state: { src: item.img, 
                                                             price: item.price,
                                                             title: item.title } })}
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

const itemData = [
  {
    img: 'https://thumbnail.image.rakuten.co.jp/@0_mall/victoriagolf/cabinet/1/3930502_55/7716754_m.jpg?_ex=240x240',
    title: 'Breakfast',
    author: '@bkristastucchio',
    price: 1000,
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://thumbnail.image.rakuten.co.jp/@0_mall/kotobukigolf/cabinet/image8/10052619-1.jpg?_ex=128x128',
    title: 'Burger',
    author: '@rollelflex_graphy726',
    price: 1000,
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
    price: 1000,
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
    price: 1000,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
    price: 1000,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    price: 1020,
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
    price: 10030,
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
    price: 10002,
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
    price: 1000,
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
    price: 1000,
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
    price: 1000,
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
    price: 1000,
    cols: 2,
  },
];