import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function RecipeReviewCard() {
  return (
    <Card sx={{ maxWidth: 245 }}>
      <CardHeader
        title="テーラーメイド（TAYLORMADE） SIM2 MAX ドライバー(1W ロフト10.5度)"
      />
      <CardMedia
        component="img"
        height="234"
        image="https://thumbnail.image.rakuten.co.jp/@0_mall/victoriagolf/cabinet/1/3930502_55/7716754_m.jpg?_ex=240x240"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        <a target="_blank" href="https://hb.afl.rakuten.co.jp/ichiba/25140a2a.4afd80c2.25140a2b.014000c2/?pc=https%3A%2F%2Fitem.rakuten.co.jp%2Fvictoriagolf%2F107716754014%2F&link_type=hybrid_url&ut=eyJwYWdlIjoiaXRlbSIsInR5cGUiOiJoeWJyaWRfdXJsIiwic2l6ZSI6IjI0MHgyNDAiLCJuYW0iOjEsIm5hbXAiOiJyaWdodCIsImNvbSI6MSwiY29tcCI6ImRvd24iLCJwcmljZSI6MSwiYm9yIjoxLCJjb2wiOjEsImJidG4iOjEsInByb2QiOjAsImFtcCI6ZmFsc2V9">詳細</a>
        </Typography>
      </CardContent>
    </Card>
  );
}
