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


function History() {
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
  const [value, setValue] = React.useState(2);

  const navigate = useNavigate();
  const navBottomMap = () => {
    localStorage.setItem("directions",JSON.stringify({ id: 3, destination: '552 University Rd', distance: 2.5, compensation: 10}));
    console.log(localStorage.getItem("directions"));
    navigate("/Map")
  }
  const navBottomHomepage = () => navigate("/homepage")

  const columns = [
    //   { field: 'id', headerName: 'ID',
    //   width: 50,
    // },
      {
        field: 'destination',
        width: 150,
        headerName: 'Order',
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

  console.log(localStorage.getItem('directions'));
  localStorage.setItem("directions","");
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column"}}>
      <Container style={containerStyle} maxWidth="sm" sx={{height: window.innerHeight -75}}>
        <div>History</div>
        <Box style={boxStyle} component="form" sx={{height: window.innerHeight -150}}>
          <Typography>History</Typography>
          <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          onRowClick={handleRowClick}
          />
        </Box>
      </Container>

      <BottomNavigation style={{position:'sticky', bottom:'20px'}}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction onClick={navBottomHomepage} label="Orders" icon={<RestoreIcon />} />
        <BottomNavigationAction onClick={navBottomMap} label="Map" icon={<LocationOnIcon />} />
        <BottomNavigationAction label="History" icon={<FolderIcon />} />
      </BottomNavigation>
      
    </div>
  )
}

export default History