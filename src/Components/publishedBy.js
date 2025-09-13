import { Avatar, Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'

function PublishedBy(props) {
  return (
    <Box sx={{ padding :'16px'}}>
        <Stack spacing={1.5} sx={{alignItems :'center'}}>
            {props.name && <Avatar variant='rounded'>{props.name.slice(0,1).toUpperCase()}</Avatar>}
            <Typography>@{props.name}</Typography>
            <Box display={'flex'} sx={{ flexDirection :'row'}}>
                <Button>Follow</Button>
                <Button>Message</Button>
                <Button>Profile</Button>
            </Box>
        </Stack>
    </Box>
  
  )
}

export default PublishedBy
