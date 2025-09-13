import { Box, Stack, Typography, Chip, Paper, Button, Divider } from '@mui/material'
import React, { useEffect , useState } from 'react'
import PdfViewer from './PdfViewer'
import ModernActionIcons from "./Icons";
import { TextBox } from '@react-pdf-viewer/core';
import PaperDetails from './paperDetails';
import PublishedBy from './publishedBy';
import PaperSideBarCard from './paperSideBarCard';
import { useParams } from 'react-router-dom';

function FilePage() {

    
    const {fileId} = useParams() ;
    const [fileData , setFileData] = useState(null) ;
    const [publisherName , setPublisherName] = useState(null) ;
    const [publisherPic , setPublisherPic] = useState(null) ;
    const [theme , setTheme] = useState(null) ;

    const getPublisher = async (fileData) => {
      
      if(fileData.groupId != null ) {
        const response =  await fetch (`http://localhost:8082/group/${fileData.groupId}`, {
        credentials : "include"
      });
      const group = await response.json();   
        setPublisherName(group.name);
        setPublisherPic(null);
        setTheme(group.theme);
      }else if (fileData.groupId == null && fileData.owner != null){
        const response =  await fetch (`http://localhost:8082/user/${fileData.owner}`, {
        credentials : "include"
      });
      const user = await response.json(); 
        setPublisherName(user.username);
        setPublisherPic(null);
        setTheme(null);
      }
    }
    
    const getFileDetails = async (fileId) => {
      const response =  await fetch (`http://localhost:8082/file/details/${fileId}`, {
        credentials : "include"
      });
      const data = await response.json() ;
      return data ;
    } ;

    useEffect(() => {
        if (fileId) {
            getFileDetails(fileId)
                .then(data => {
                    setFileData(data);
                    getPublisher(data); 
                })
        }
    }, [fileId]);
    const papers = [{"title" : "this is the demo title"
      , "description" : "this is the demo description" ,
      "img" :"image.png" , "publisher" : "username"
    }, {"title" : "corona virus is such a danger on our society"
      , "description" : "the way corona virus manipulate electricity to hover over " ,
      "img" :"nope4.png" , "publisher" : "nssr"
    }]

        

    return (
        <Box  display={'flex'} sx={{ backgroundColor: "#f8fafc" }} flexDirection={"column"}>
            
            <Box  display={'flex'} flexDirection={'row'} sx={{}}>
              <Box>
                {fileData && (
  <Paper sx={{ borderRadius :"0% 0% 0% 0%", width: '70vw', margin: '14px', marginTop:'0px', backgroundColor: "#fff" }}>
    <PaperDetails 
      title={fileData.title} 
      description={fileData.description} 
      theme={theme} 
      authors={fileData.authors} 
    />
  </Paper>
)}

                        
                  <Paper sx={{  width: '70vw', margin: '14px', backgroundColor: "#ffffffff"  }}>
                    <Stack sx={{ margin: '0px' }}>
                      <Box  sx={{padding: '8px'}}>
                        <ModernActionIcons></ModernActionIcons>
                        <PdfViewer fileId={fileId}></PdfViewer></Box>



                    </Stack>
                </Paper>
                </Box>
                
        
                <Paper sx={{  height: '100%', width: '30vw', margin: '14px',marginTop:'0px', marginLeft: "0px", padding: '8px', backgroundColor: "white" }}>
                  <Typography variant='caption'> Published By</Typography>
                  <PublishedBy name={publisherName}  />
                  <Divider></Divider>

                    <Typography sx={{marginTop :'6px' , marginBottom :'6px'}}> You may also like  </Typography>
                    <Stack  spacing={2}>
                    <PaperSideBarCard papers = {papers}/> 
                    </Stack>
                </Paper></Box>

            

        </Box>
    )
}


export default FilePage