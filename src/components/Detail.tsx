import { memo, useState, useEffect, VFC } from "react"
import { useLocation } from "react-router-dom"
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

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
    return (
        <div>
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
        </div>
    )
}

export default Detail