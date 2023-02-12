import React, { useRef, useState, useEffect  } from 'react'
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
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
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
  let openSnackbar = false
  
  
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('showSnackbar') === 'true') {
      setOpen(true);
    }
    
  }, []);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

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
    { id: 0, destination: '7000 Hollister Ave', distance: 1.1, compensation: 10},
    { id: 1, destination: '6533 Trigo Rd', distance: 1.6, compensation: 10},
    { id: 2, destination: '170 Aero Camino', distance: 2.1, compensation: 10},
  ];
  
  const handleRowClick = (row) => {
    console.log(row.row);
    console.log(localStorage.getItem("directions"));
    localStorage.setItem("directions", JSON.stringify(row.row));
    console.log(JSON.parse(localStorage.getItem('directions')));
    navigate("/Map")
  }

  const navigate = useNavigate();
  const navBottomHist = () => navigate("/History")
  const navBottomMap = () => {
    localStorage.setItem("directions",JSON.stringify({ id: 3, destination: '552 University Rd', distance: 2.5, compensation: 10}));
    console.log(localStorage.getItem("directions"));
    navigate("/Map")
  }

  

  localStorage.setItem("directions","");
  console.log(localStorage.getItem('directions'));

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

        <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            Delivery Completed!
          </Alert>
        </Snackbar>
        {/* </div> */}
    </div>
  )
}

export default Homepage