import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CircularProgress, Grid, IconButton } from '@mui/material';
import { Alarm as AlarmIcon, Check as CheckIcon } from '@mui/icons-material';

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
        await wait(5000);
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
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom style={{ fontSize: "160%" }}>
                                NUC 11443323
                            </Typography>
                            <Typography variant="h5" component="div" style={{ fontSize: "300%" }}>
                                IP 10.0.100.1
                            </Typography>
                            {/* <Typography gutterBottom>
                                <strong>{deviceState ? "CONNECTED" : "DISCONNECTED"}</strong>
                            </Typography> */}
                            <Grid container gap={2} my={4}>
                                <Grid item>
                                    {/* button (pulse)
                                                          */}
                                    <Button variant="contained" color="success" size="large">
                                        <CheckIcon />
                                    </Button>
                                </Grid>
                                <Grid item xs>
                                    <Button variant="outlined" fullWidth size="large">{deviceState ? "CONNECTED" : "DISCONNECTED"}</Button>
                                </Grid>
                            </Grid>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary" style={{ fontSize: "160%" }}>
                                Location: Westfields Oirschot
                            </Typography>
                            <Typography variant="body2" gutterBottom style={{ fontSize: "140%" }}>
                                serialnr 2454ae245afh141145
                                <br />
                                type NUC
                            </Typography>
                        </>}
                </CardContent>
            </Card>
        </Box>
    );
}