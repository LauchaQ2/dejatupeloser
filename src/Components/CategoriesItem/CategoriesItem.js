import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./CategoriesItem.css";


export default function CategoriesItem({categ}){
    return(
        <Card className="card-cat" sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h3" component="div">
              {categ.title}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="large">Learn More</Button>
        </CardActions>
      </Card>
    )

}