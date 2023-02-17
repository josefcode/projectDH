import React from 'react'
import { RecommendationCard } from '../recommendation-card/RecommendationCard'
import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid';

const listHotel = [
    {
        id: '1',
        image :"https://picsum.photos/200/300",
        name: "hotel",
        totals: '1000 hotels',
        alt: 'hotelImage'
     },
     {
        id: '2',
        image :"https://picsum.photos/200/300",
        name: "hotel",
        totals: '1000 hotels',
        alt: 'hotelImage'
     },
     {
        id: '3',
        image :"https://picsum.photos/200/300",
        name: "hotel",
        totals: '1000 hotels',
        alt: 'hotelImage'
     },
     {
        id: '3',
        image :"https://picsum.photos/200/300",
        name: "hotel",
        totals: '1000 hotels',
        alt: 'hotelImage'
     },
]


const Root = styled('div')({
    paddingInline: '4rem'
  })
export  function RecommendationCards() {
  return (
    <Root>
       <Typography variant='h5'> Busca por tipo de acomodacao</Typography>
        
       <Grid container spacing={4}>
        {
            listHotel.map(item => <Grid item xs={4} sm={3} key={item.id}><RecommendationCard  image = {item.image} alt = {item.alt} totals={item.totals} 
            title={item.name} /></Grid>
               
            )
        }
        </Grid>
    </Root>
  )
}
