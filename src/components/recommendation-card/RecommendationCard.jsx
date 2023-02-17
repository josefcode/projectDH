import styled from '@emotion/styled'
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import React from 'react'


const CardWrapper = styled(Card)({
  maxWidth : 300,
  minHeight: 200
 }) 


export function RecommendationCard({image, title, totals, alt}) {
  return (
 
    <CardWrapper>
        <CardMedia
        sx={{ height: 200 }}
       image = {image}
       title = {alt}
      />
        <div>
          <h2>
                {title}
          </h2>
         
            <p >
                {totals}
            </p>
      
        </div>
    </CardWrapper>

  )
}
