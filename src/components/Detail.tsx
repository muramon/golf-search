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
                        <Typography variant="subtitle1" component="h5">
                            {selectId.title}
                        </Typography>
                    </Box>
                    <Box padding={1}>
                        <Typography variant="body2" component="p">
                            {selectId.caption}
                        </Typography>
                    </Box>
                    <Box padding={1} sx={{ textAlign: 'right' }}>
                        <Typography variant="h5" component="h5">
                            {selectId.price}円
                        </Typography>
                    </Box>
                    <Box padding={1} sx={{ textAlign: 'right' }}>
                        <Typography variant="body1" component="p">
                            <a href={selectId.affiliateurl}>購入はこちら</a>
                        </Typography>
                    </Box>
                </Paper>
            </Grid>
        </div>
    )
}

export default Detail