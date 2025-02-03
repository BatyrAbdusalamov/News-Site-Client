import { FC } from "react"
import { Typography } from "../../Typography";
import { Avatar, CardActions, Card as CardComponent, CardContent, CardHeader, CardMedia, IconButton } from "@mui/material";
import { red } from "@mui/material/colors";

import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

interface CardProps {
  topic: string;
  content: string;
  picture: string;
}

export const Card: FC<CardProps> = ({topic,content,picture}) => {
  const cardContent = content?.length > 200 ? content.slice(200) : content;
  
  return(
    <CardComponent sx={{ maxWidth: 545, maxHeight: 600 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        title={topic}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="250"
        image={picture}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="bodyText">
          {cardContent}
        </Typography>
      </CardContent>
       <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        </CardActions>
    </CardComponent>
  )
}