import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';

const JobCard = ({job}) => {
  return (
    <Box sx={{ minWidth: 275 }}>
   <Card variant="outlined">
    <CardContent>
    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
       {job.title}
      </Typography>
      <Typography variant="h5" component="div">
     aaa
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
       {job.smallDescription}
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
   </Card>
   </Box>
  )
}

export default JobCard