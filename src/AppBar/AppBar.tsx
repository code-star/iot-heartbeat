import * as React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';

const SvgComponent = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 14.537 14.537"
    style={{
      enableBackground: "new 0 0 14.537 14.537",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <path
      style={{
        fill: "white",
      }}
      d="M13.66 0H.877A.878.878 0 0 0 0 .877V13.66c0 .483.394.877.877.877H13.66a.879.879 0 0 0 .877-.877V.878A.879.879 0 0 0 13.66 0zm-.176 13.485H1.052V1.053h12.432v12.432z"
    />
    <path
      style={{
        fill: "white",
      }}
      d="M2.126 8.744h1.605c.15 0 .282-.101.322-.245l.492-1.78.703 3.904a.33.33 0 0 0 .358.273.334.334 0 0 0 .305-.332v-1.82h.95a.334.334 0 0 0 .331-.286l.526-3.619 1.142 6.305a.333.333 0 0 0 .327.273h.002c.16 0 .298-.113.328-.27l.51-2.627h.256l.385.652c.059.1.165.162.281.164a.337.337 0 0 0 .287-.152l.383-.59h.461a.334.334 0 1 0 0-.669h-.642a.336.336 0 0 0-.28.152l-.188.29-.207-.352a.334.334 0 0 0-.288-.164h-.723a.333.333 0 0 0-.328.27l-.223 1.148-1.189-6.567a.334.334 0 0 0-.66.012l-.779 5.36h-.995a.33.33 0 0 0-.105.017l-.529-2.937a.334.334 0 0 0-.314-.274c-.172-.024-.296.094-.337.245l-.815 2.95H2.126a.334.334 0 0 0 0 .669z"
    />
  </svg>
)

export default function AppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MuiAppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <SvgComponent width="40" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {/* 💓 IoT Heartbeat */}
            IoT Heartbeat
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </MuiAppBar>
    </Box>
  );
}