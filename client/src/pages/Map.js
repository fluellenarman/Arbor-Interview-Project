import React, { useRef, useState } from 'react'
import {useNavigate} from "react-router-dom"
import FormControl from '@mui/material/FormControl';
import { Container } from "@mui/material"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { DataGrid } from '@mui/x-data-grid';

// import { GoogleMap, Marker, useLoadScript } from "react-google-maps"
// import {useLoadScript} from '@react-google-maps/api';
import MyMapsComp from "../components/MyMapsComp"

function Map() {
  const boxStyle = {
    // backgroundColor: "DodgerBlue",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    // height: '500px'

  };
  const containerStyle = {
    // height: '100%',
    // backgroundColor: "DodgerBlue"
  };
  const inputStyle = {
    alignSelf: 'center',
  }

  

  const [value, setValue] = React.useState(1);
  const navigate = useNavigate();
  const navBottomHomepage = () => navigate("/homepage")
  const navBottomHist = () => navigate("/History")
  console.log(window.innerHeight)
  
  
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column"}}>
    Map
    
      <Box style={boxStyle} component="form" sx={{height: window.innerHeight -100}}>
        <Typography>DataTable</Typography>
        <MyMapsComp />
      </Box>
      
      <BottomNavigation style={{position:'sticky', bottom:'20px'}}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction onClick={navBottomHomepage} label="Orders" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Map" icon={<LocationOnIcon />} />
          <BottomNavigationAction onClick={navBottomHist} label="History" icon={<FolderIcon />} />
        </BottomNavigation>
    </div>
  )
}

export default Map