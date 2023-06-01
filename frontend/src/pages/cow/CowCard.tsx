// import React from 'react';
import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

import { Cow } from '../../types/@databasetypes';
interface Props {
  cow: Cow,
}
export const CowCard = ({ cow }:Props) => {
  return (
    <Paper elevation={7} >
    <Card sx={{ width: "100%",textOverflow: 'ellipsis' ,height:"500px" }} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image="/src/assets/screenroad-FquDp5N1Gw0-unsplash.jpg"
          alt="cow"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" textAlign="center">
           {cow.name}
          </Typography>
        <Divider orientation="horizontal"  />
          <Typography variant="body2" color="text.secondary" paddingTop="10px">
            {cow.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Paper>
  )
}