import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import ArrowCircleRightSharpIcon from '@mui/icons-material/ArrowCircleRightSharp';
import { useNavigate, Link } from 'react-router-dom';
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios"
import React, { useState, useEffect } from 'react';

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

export default function ClubList() {
  const navigate = useNavigate();

  // type Item = {
  //   "rank": number;
  //   "itemName": string;
  //   "catchcopy": string;
  //   "mediumImageUrls": string;
  //   "affiliateUrl": string;
  //   "affiliateRate": string;
  //   "itemCaption": string;
  //   "itemPrice": string;
  //   "reviewAverage": string;
  // } 

  // const itemData: Item[] = await fetch("http://localhost:3100/clubs")
  //   .then(res => {
  //       return res.json();
  //   })
  //   .catch(err => {
  //       console.log(err);
  //   });

  const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([{"rank":22,"itemName":"更新前【カスタム】2022 キャロウェイゴルフ ROGUE ST MAX IRONS ローグ ST MAX アイアン【 日本仕様】5本セット(#6〜9,PW)","catchcopy":"","mediumImageUrls":"https:\\/\\/thumbnail.image.rakuten.co.jp\\/@0_mall\\/kotobukigolf\\/cabinet\\/image8\\/10052619-1.jpg?_ex=128x128","affiliateUrl":"https:\\/\\/hb.afl.rakuten.co.jp\\/hgc\\/g00plmsa.i98ricf1.g00plmsa.i98rj2b3\\/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkotobukigolf%2F10052619%2F","affiliateRate":"4.0","itemCaption":"2022年3月発売 メーカー希望小売価格はメーカーサイトに基づいて掲載しています※特別価格の為、売り切れの際はご了承お願いいたします。","itemPrice":"105600","reviewAverage":"0.0"}]);

  const params = {
                      'applicationId': '1036157472940221185',
                      'affiliateId' : '25de4e9e.e4d4424e.25de4e9f.207712e9',
                      'genreId' : '201706',
                      'period' : 'realtime'                     
                  }
  const query_params = new URLSearchParams(params); 

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    // fetch("http://localhost:3100/clubs", { method: "GET" })
    // fetch("http://127.0.0.1:8888/", { method: "GET" })
    fetch("https://golfbuy-api.herokuapp.com/", { method: "GET" })
      .then(res => res.json(),
      )
      .then(data => {
          setItems(data);
          console.log(items)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          // setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  return (
    <ImageList sx={{ height: 450,
      display: "grid",
      gridTemplateColumns:  "repeat(4, 1fr)"}}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">December</ListSubheader>
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
                                                             title: item.itemName } })}
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

// const itemData = [
//   {"rank":1,"itemName":"【カスタム】2022 キャロウェイゴルフ ROGUE ST MAX IRONS ローグ ST MAX アイアン【 日本仕様】5本セット(#6〜9,PW)","catchcopy":"","mediumImageUrls":"https:\\/\\/thumbnail.image.rakuten.co.jp\\/@0_mall\\/kotobukigolf\\/cabinet\\/image8\\/10052619-1.jpg?_ex=128x128","affiliateUrl":"https:\\/\\/hb.afl.rakuten.co.jp\\/hgc\\/g00plmsa.i98ricf1.g00plmsa.i98rj2b3\\/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fkotobukigolf%2F10052619%2F","affiliateRate":"4.0","itemCaption":"2022年3月発売 メーカー希望小売価格はメーカーサイトに基づいて掲載しています※特別価格の為、売り切れの際はご了承お願いいたします。","itemPrice":"105600","reviewAverage":"0.0"},{"rank":2,"itemName":"【在庫あり！即納！】テーラーメイド ステルス プラス ドライバー 2022年モデル USAモデルTENSEI AV RAW BLUE 60 カーボンシャフト装着TAYLORMADE STEALTH PLUS DRIVER USモデル","catchcopy":"【新品・USA正規品モデル！】","mediumImageUrls":"https:\\/\\/thumbnail.image.rakuten.co.jp\\/@0_mall\\/tksports\\/cabinet\\/a\\/04328293\\/08182169\\/imgrc0076414107.jpg?_ex=128x128","affiliateUrl":"https:\\/\\/hb.afl.rakuten.co.jp\\/hgc\\/g00ri3ia.i98ri0ff.g00ri3ia.i98rj335\\/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Ftksports%2Fstealthplusdriverus03%2F","affiliateRate":"4.0","itemCaption":"","itemPrice":"99000","reviewAverage":"0.0"},{"rank":3,"itemName":"【土日祝も発送】テーラーメイド ステルス プラス ドライバー メンズ 右用 460cc USA三菱 Kaili White 60 ゴルフクラブ STEALTH PLUS DRIVER USA直輸入品【2年保証】【専用ヘッドカバー】【トルクレンチ】","catchcopy":"ステルスプラス USモデル テーラーメイド STEALTH ドライバー TaylorMade 右利き 2022NEWモデル 「スライディングウェイト」搭載のステルスプラスドライバー！","mediumImageUrls":"https:\\/\\/thumbnail.image.rakuten.co.jp\\/@0_mall\\/jeep\\/cabinet\\/08817120\\/imgrc0165060041.jpg?_ex=128x128","affiliateUrl":"https:\\/\\/hb.afl.rakuten.co.jp\\/hgc\\/g00pv9na.i98ria81.g00pv9na.i98rj6a0\\/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fjeep%2F100400185359%2F","affiliateRate":"4.0","itemCaption":"【USモデル／ステルスプラス】新しい”カーボンウッド時代”が始まる。 スライディングウェイトを搭載したステルス『プラス』ドライバー テーラーメイドが開発した「スライディングウェイト」テクノロジーが “ステルス プラス”で再登場。 左右方向に重心位置を変更できる10gのスライディングウェイトによって、あなたの好みに合わせて打ち出しや弾道調整が可能に。 テクノロジー・特徴 テクノロジーとは、情熱である。 命題を提起しながら、課題を一つ一つ解決し、一歩ずつ前進する。 テーラーメイドは「メタルウッド」という前人未踏の領域で、イノベーションを生み出し、潮流を決定づけ、進化を追求する一方で「次」を見据えたチャレンジも進めていた。 カーボンフェーステクノロジーの研究開発である。 そして、2022年、あくなき情熱がついに実を結ぶ。 コードネーム「ステルス」。 20年以上、極秘裏に開発され続けてきた事を意味し、その名を冠する、ステルスドライバー。 常識を置き去りにし、ドライバーの新たな時代を切り拓く、新しい”カーボンウッド時代”が始まる。 ※バックウェイトは着脱不可です。 ※ロフトスリーブは従来の「SIM2」などと共通のため交換が可能です。 ■60層のカーボンフェース 新たに開発された「60層のカーボンフェース」はチタンの43gから24gとなり、チタンフェースと比べて44%※の軽量化に成功。その一方で、SIMドライバーよりもフェース面積を20% 拡大させ、寛容性を強化した。複雑な構造からなる60層のカーボンを精巧に重ね合わせることで、高い強度と大きなたわみを両立し、新次元のエネルギー伝達をもたらす。その結果、フェースのより広い範囲でボール初速が高まり、これまでよりも優れた飛距離性能と寛容性を実現する。 ※同サイズのチタンニウムフェース比較(メーカー調べ) ■ナノテクスチャーPUカバー フェース全面にナノレベルの精巧なポリマーコーティング(PU)を施すことで、どうような状況下においても最適なスピン量を可能にし、飛距離を生み出す。 ■イナーシャ ジェネレーター ヘッド後方に重いウェイトを設置した「イナーシャ ジェネレーター」が寛容性アップに貢献。さらに、フェース面の拡大により、寛容性を高めながらも空気抵抗を減少させ、ダウンスイングのスピードアップを実現する。 ■スライディングウェイト 60層のカーボンツイストフェースを採用したことで、ヘッドの軽量化に成功。それにより、左右方向の重心位置を変更できる10gの「スライディングウェイト」の搭載が可能になり、個々のプレーヤーに応じた弾道調整が可能となる。 ■貫通型スピードポケット テーラーメイド独自の貫通型スピードポケットにより、フェース下部で打ってしまったミスヒットにおいても無駄なスピンを抑えてボール初速維持に貢献。 製品仕様詳細 ■クラブスペック ヘッド素材 \\/ フェース素材 チタン [9-1-1 ti] + カーボンクラウン + スライディングウェイト \\/ 60層カーボンツイストフェース + PUカバー ヘッド体積(cc) 460 ロフト角(度) 8 9 10.5 ライ角(度) 56 長さ(インチ) 45.75 総重量(g) 約318(S) バランス D7.0 ※ロフト角、ライ角はスタンダードポジションでの数値です。 ※各数値は目安としてご覧下さい。 ■シャフト・グリップ・付属品 シャフト名 Mitsubishi Chemical Kai\'li White 60 フレックス X S シャフト重量(g) 約69 約68 トルク 4.1 4.1 弾道 Low スピン Low 振動数(cpm) 約265 約255 グリップ LAMKIN CROSSLINE 360 BLACK\\/RED（口径60／約50g／バックライン無し） 付属品 専用ヘッドカバー、トルクレンチ ※シャフト重量はカット前重量です。 ※各種数値は目安としてご覧下さい。 ※バックウェイトは着脱不可です。","itemPrice":"74800","reviewAverage":"0.0"}
// ];
//   {
//     img: 'https://thumbnail.image.rakuten.co.jp/@0_mall/victoriagolf/cabinet/1/3930502_55/7716754_m.jpg?_ex=240x240',
//     title: 'Breakfast',
//     author: '@bkristastucchio',
//     price: 1000,
//     rows: 2,
//     cols: 2,
//     featured: true,
//   },
//   {
//     img: 'https://thumbnail.image.rakuten.co.jp/@0_mall/kotobukigolf/cabinet/image8/10052619-1.jpg?_ex=128x128',
//     title: 'Burger',
//     author: '@rollelflex_graphy726',
//     price: 1000,
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
//     title: 'Camera',
//     author: '@helloimnik',
//     price: 1000,
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
//     title: 'Coffee',
//     author: '@nolanissac',
//     price: 1000,
//     cols: 2,
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
//     title: 'Hats',
//     author: '@hjrc33',
//     price: 1000,
//     cols: 2,
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
//     title: 'Honey',
//     author: '@arwinneil',
//     price: 1020,
//     rows: 2,
//     cols: 2,
//     featured: true,
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
//     title: 'Basketball',
//     author: '@tjdragotta',
//     price: 10030,
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
//     title: 'Fern',
//     author: '@katie_wasserman',
//     price: 10002,
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
//     title: 'Mushrooms',
//     author: '@silverdalex',
//     price: 1000,
//     rows: 2,
//     cols: 2,
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
//     title: 'Tomato basil',
//     author: '@shelleypauls',
//     price: 1000,
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
//     title: 'Sea star',
//     author: '@peterlaster',
//     price: 1000,
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
//     title: 'Bike',
//     author: '@southside_customs',
//     price: 1000,
//     cols: 2,
//   },
// ];