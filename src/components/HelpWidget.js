// import Button from "@mui/material/Button";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";
import {
  Button,
  Menu,
  MenuItem,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

import { useState } from "react";

const HelpWidget = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleClose() {
    setAnchorEl(null);
  }
  return (
    <div className="help-widget">
      <Button
        aria-owns={anchorEl ? "simple-menu" : undefined}
        aria-haspopup="true"
        aria-label="Help"
        onClick={handleClick}
        onMouseOver={handleClick}
      >
        {/* prettier-ignore */}
        <svg width="36" height="36" version="1.0" viewBox="0 0 187.5 187.5" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" zoomAndPan="magnify"><defs><clipPath id="a"><path d="m2.4531 2.4531h182.25v182.25h-182.25z" /></clipPath></defs><g clipPath="url(#a)"><path d="m93.578 2.4531c-50.324 0-91.125 40.801-91.125 91.125 0 50.328 40.801 91.125 91.125 91.125 50.328 0 91.125-40.797 91.125-91.125 0-50.324-40.797-91.125-91.125-91.125zm0 176.18c-46.895 0-85.051-38.152-85.051-85.051 0-46.895 38.156-85.051 85.051-85.051 46.898 0 85.051 38.156 85.051 85.051 0 46.898-38.152 85.051-85.051 85.051z" fill="#eee" /></g><path d="m85.004 110.58c3.2539-21.73 25.871-23.949 25.871-39.91 0-9.6094-7.6875-17.297-17.297-17.297s-17.293 7.6875-17.293 17.297v1.4766h-12.27v-1.4766c0-16.262 13.305-29.566 29.562-29.566 16.262 0 29.566 13.305 29.566 29.566 0 22.613-22.766 24.832-26.02 41.684-0.44141 2.2188-0.44141 4.2891-0.44141 6.6523h-12.27c0-2.957 0.14844-5.7656 0.58984-8.4258zm-0.58984 23.207h12.27v12.27h-12.27z" fill="#eee" /></svg>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
      >
        <MenuItem onClick={handleClose} style={{ whiteSpace: "unset" }}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5" component="div">
                leftRight
              </Typography>
              <div>
                <Typography variant="body2">
                  Click left and right buttons on the screen and create amazing
                  patterns using characters!
                </Typography>
              </div>
            </CardContent>
          </Card>
        </MenuItem>
        <MenuItem onClick={handleClose} style={{ whiteSpace: "unset" }}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5" component="div">
                circleDown
              </Typography>
              <div>
                <Typography variant="body2">
                  Click on circles as they keep getting smaller and smaller.
                </Typography>
              </div>
            </CardContent>
          </Card>
        </MenuItem>
        <MenuItem onClick={handleClose} style={{ whiteSpace: "unset" }}>
          <Card variant="outlined">
            <CardContent>
              <div>
                <Typography variant="h5" component="div">
                  1%
                </Typography>
              </div>
              <Typography variant="body2">
                Guess the location of a point that you never see by clicking
                somewhere inside the square. Less than 1% get a perfect score of
                10!
              </Typography>
            </CardContent>
          </Card>
        </MenuItem>
        <MenuItem></MenuItem>
      </Menu>
    </div>
  );
};

export default HelpWidget;
