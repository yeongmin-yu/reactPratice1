
'use client'
import { Box, Divider, Grid2, ListItem, Stack, Button, Drawer, Typography } from "@mui/material";
import { blue, blueGrey, green, red } from "@mui/material/colors";
import { useState } from "react";




type props = {
  open: boolean,
  onClose: () => void
}

function SidePanel(props: props) {



  return (
    <Box
    sx={{
      //display: props.open? 'initial':'none',
      // flex: props.open ? '0 0 250px' : '0',
      width:props.open ? '250px' : '0',
      transition: 'width 0.3s ease',
      //padding: 2,
      backgroundColor: '#e0e0e0',
    }}
  >
      <Typography variant="h6" gutterBottom>
        Drawer Content
      </Typography>
      <Button variant="contained" color="secondary" onClick={props.onClose}>
        Close Drawer
      </Button>
      <Typography variant="body1" mt={2}>
        Here is some content inside the drawer.
      </Typography>
    </Box>
  );
}



export default function Home() {

  const [sideOpen, setSideOpen] = useState<boolean>(false);

  const toggleHandle = () => {
    setSideOpen(!sideOpen);
  }
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

      <Grid2 container sx={{ flex: 1 }}>
        <Grid2 size={3} >
          <Box sx={{ backgroundColor: blueGrey[50], height: '100%' }}>
            dd
          </Box>
          {/* <Sidebar /> */}
        </Grid2>
        <Grid2 size={9} >
          <Box sx={{ backgroundColor: blue[50], height: '20%' }}>
            <Button variant="outlined" color="primary" onClick={toggleHandle}>
              Toggle
            </Button>
          </Box>
          <Box sx={{ backgroundColor: blue[100], height: '80%' }}>
            <Box sx={{ display: 'flex' ,flexDirection:'row',height: '100%'}}>
              {/* Main Content Area */}
              <Box
                sx={{
                  width:sideOpen ? 'calc(100% - 250px)' : '100%',
                  // flex: sideOpen ? '0 0 calc(100% - 250px)' : '1',
                  transition: 'width 0.3s ease',
                  padding: 2,
                  backgroundColor: red[50],
                  overflow: 'hidden', // overflow 속성 추가
                }}
              >
                 <Typography variant="body1" mt={2}>
                    Here is some content Here is some content Here is some content Here is some content Here is some content Here is some content Here is some content 
                  </Typography>
              </Box>
              <SidePanel open={sideOpen} onClose={toggleHandle}>

              </SidePanel>
            </Box>


          </Box>
        </Grid2>
      </Grid2>

    </Box>
  );
}
