import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CircularProgress } from '@mui/material';
import { flexbox } from '@mui/system';

// const bull = (
//     <Box
//         component="span"
//         sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//     >
//         •
//     </Box>
// );

// const card = (
//     <React.Fragment>
//         <CardContent>
//             <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//                 NUC 11443323
//             </Typography>
//             <Typography variant="h5" component="div">
//                 IP 10.0.100.1
//             </Typography>
//             <Typography sx={{ mb: 1.5 }} color="text.secondary">
//                 Location: Westfields Oirschot
//             </Typography>
//             <Typography variant="body2">
//                 serialnr 2454ae245afh141145
//                 <br />
//                 type NUC
//             </Typography>
//             <CircularProgress color="secondary" />
//         </CardContent>
//         {/* <CardActions>
//             <Button size="small">Learn More</Button>
//         </CardActions> */}
//     </React.Fragment>
// );

const wait = (delay: number) => new Promise((resolve) => {
    setTimeout(() => { resolve("done") }, delay);
})

const Loader = () => {
    return <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
        <CircularProgress color="secondary" size={140} />
    </div>
}

export default function StatusCard() {
    const [isLoading, setIsLoading] = React.useState(false);
    const [deviceState, setDeviceState] = React.useState(false);
    const handleClick = async () => {
        setIsLoading(true);
        setDeviceState(true);
        await wait(1000);
        setIsLoading(false);
    };
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined" onClick={handleClick} style={{ height: "calc(100vh - 90px)" }}>
                <CardContent style={{ height: "100%" }}>
                    {isLoading ? <Loader /> :
                        <>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                NUC 11443323
                            </Typography>
                            <Typography variant="h5" component="div">
                                IP 10.0.100.1
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Location: Westfields Oirschot
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                serialnr 2454ae245afh141145
                                <br />
                                type NUC
                            </Typography>
                            <Typography>
                                <strong>{deviceState ? "CONNECTED" : "DISCONNECTED"}</strong>
                            </Typography>
                        </>}
                </CardContent>
            </Card>
        </Box>
    );
}