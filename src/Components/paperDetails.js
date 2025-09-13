import { Box, Chip , Stack, Typography , Button, Avatar, IconButton } from '@mui/material'

import {React , useState} from 'react'

function PaperDetails(props ) {
    const [theme , setTheme] = useState("this is the title") ;;
    const [title , setTitle] = useState("Corona Effect and purple lighning damage to wires");
    const [description , setDescription] = useState("As artificial intelligence continues to reshape industries, AI is not just changing how we work but also why we work. This article explores the opportunities and challenges ...");
    const [authors , setAuthors] = useState(["adnane" , "hossame" , "majdoline"]);
    const colors = ["#f44336", "#2196f3", "#4caf50", "#ff9800", "#9c27b0"];
    
  return (
        <Stack spacing={3} sx={{padding :'32px'}} >
            {props.theme && <Box sx={{ alignSelf: 'flex-start'}}>
        <Chip label = {props.theme}
        sx={{
            
                backgroundColor: '#ddd6fe',
                color: '#7c3aed',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                height: '28px',
                borderRadius: '14px',
                border: '1px solid #c4b5fd'
                              
        }}/>
        </Box>}
        <Typography variant='h1' sx={{
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 700,
                            color: '#0f172a',
                            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                            lineHeight: 1.1,
                            letterSpacing: '-0.025em',
                            background: 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'  
                           }}>{props.title} </Typography>
                        <Typography variant='body1' sx={{
                            color: '#475569',
                            lineHeight: 1.7,
                            fontSize: '1.1rem',
                            fontWeight: 400,
                            mb: 2,
                            width:'75%'
                        }}> {props.description} </Typography>

                       {props.authors &&
                       <Box>
                        <Typography variant='caption' sx={{
                            fontSize :'15px'
                        }} >Research Authors :</Typography>
                        
                        <Box display={'flex'} sx={{flexDirection :'row' , marginTop :'8px'}}>
                        {
                        props.authors.map((author , index) => (
                            <div key={author}>
                                <IconButton>
                            <Avatar sx={{ bgcolor: colors[index % colors.length] }}>{author.slice(0,1).toUpperCase()}</Avatar>
                            </IconButton>
                            </div>
                        ))}

                        </Box></Box>}
                           
                         
        </Stack>

  )
}

export default PaperDetails
