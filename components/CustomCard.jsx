import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StandaloneToggleButton from './ToggleHeart';

const CustomCard = (props) => {
  const title = props.title.replace(" ", "");
  const src = "/" +  title;
  return (
    <Card sx={{ width: 345 }} style={{margin: "1rem"}}>
      <StandaloneToggleButton />
      <CardMedia
        sx={{ height: 140 }}
        image={props.image}
        title={props.alt}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small" href={src}>Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default CustomCard;