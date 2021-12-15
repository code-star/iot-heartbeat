import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CircularProgress, Grid, IconButton, LinearProgress, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Close as CloseIcon, Check as CheckIcon, ContentCopy as ContentCopyIcon, Grid3x3 as Grid3x3Icon, DevicesOther as DevicesOtherIcon } from '@mui/icons-material';

const wait = (delay: number) => new Promise((resolve) => {
    setTimeout(() => { resolve("done") }, delay);
})

const Loader = () => {
    return <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
        <CircularProgress color="primary" size={140} />
    </div>
}

export default function StatusCard() {
    const [isPreparing, setIsPreparing] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [deviceState, setDeviceState] = useState(false);
    const handleClick = async () => {
        setIsPreparing(true);
        await wait(5000);
        setIsPreparing(false);
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
                            <Grid container gap={2} my={4}>
                                <Grid item>
                                    {/* button (pulse)
                                                          */}
                                    <Button variant="contained" color={deviceState ? "success" : "error"} size="large">
                                        {deviceState ? <CheckIcon /> : <CloseIcon />}
                                    </Button>
                                </Grid>
                                <Grid item xs>
                                    <Button variant="outlined" fullWidth size="large" sx={{ backgroundColor: "#001E3C", color: "rgb(191, 199, 207)" }}>{deviceState ? "CONNECTED" : "DISCONNECTED"}</Button>
                                </Grid>
                            </Grid>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary" style={{ fontSize: "160%" }}>
                                Location: Westfields Oirschot
                            </Typography>
                            <List>
                                <ListItem disableGutters secondaryAction={<IconButton edge="end"><ContentCopyIcon /></IconButton>}>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <Grid3x3Icon />
                                        </ListItemIcon>
                                        <ListItemText primary="123e4567-e89b-12d3-a456-426655440000" primaryTypographyProps={{ style: { fontSize: "120%" } }}></ListItemText>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disableGutters secondaryAction={<IconButton edge="end"><ContentCopyIcon /></IconButton>}>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <DevicesOtherIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Intel NUC" primaryTypographyProps={{ style: { fontSize: "140%" } }}></ListItemText>
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </>}
                    {isPreparing && <LinearProgress sx={{ height: "2px", width: "3px" }} />}
                </CardContent>
            </Card>
        </Box>
    );
}