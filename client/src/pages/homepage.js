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

function Homepage() {

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
  const [value, setValue] = React.useState(0);

  const columns = [
  //   { field: 'id', headerName: 'ID',
  //   width: 50,
  // },
    {
      field: 'destination',
      width: 100,
      headerName: 'Destination',
    },
    {
      field: 'distance',
      width: 80,
      headerName: 'Distance',
    },
    {
      field: 'compensation',
      headerName: 'Compensation',
      type: 'number',
      width: 120,
      editable: true,
    },
  ];
  
  const rows = [
    { id: 0, destination: '123 main St.', distance: 20, compensation: 10},
  ];
  const handleRowClick = (row) => {
    console.log(row.row);
  }
  const navigate = useNavigate();
  const navBottomMap = () => navigate("/Map")
  const navBottomHist = () => navigate("/History")

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column"}} >
      <Container style={containerStyle} maxWidth="sm" sx={{height: window.innerHeight -75}}>
        <div>homepage</div>
        <Box style={boxStyle} component="form" sx={{height: window.innerHeight -150}}>
          <Typography>DataTable</Typography>
          <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          onRowClick={handleRowClick}
        />
        </Box>
        
        
      </Container>
    {/* <div style={{position: 'relative'}}> */}
        <BottomNavigation style={{position:'sticky', bottom:'20px'}}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Orders" icon={<RestoreIcon />} />
          <BottomNavigationAction onClick={navBottomMap} label="Map" icon={<LocationOnIcon />} />
          <BottomNavigationAction onClick={navBottomHist} label="History" icon={<FolderIcon />} />
        </BottomNavigation>
        {/* </div> */}
    </div>
  )
}

export default Homepage