import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

const Header = () => {
  const [value, setValue] = useState();
  return (
    <div>
      <AppBar sx={{ backgroundColor: "#232F3D" }} position="sticky">
        <Toolbar>
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            <Typography>
              <Button variant="text" startIcon={<LibraryBooksOutlinedIcon />}>
                Books shop
              </Button>
            </Typography>
          </Link>
          <Tabs
            sx={{ ml: "auto" }}
            textColor="inherit"
            indicatorColor="primary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={Link} to="/add" label="Add product" />
            <Tab LinkComponent={Link} to="/books" label="Books" />
            <Tab LinkComponent={Link} to="/about" label="About Us" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;