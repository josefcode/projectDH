import React from 'react'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './styles.css'
import { borderRadius } from '@mui/system';


export function SearchBox() {
  return (
 
        <div className='searchBox-container'>
        <div>
            <h2 className='searchBox-title'>Buscar Offertas</h2>
        </div>
        <form className='searchBox-form'>
          <TextField type = "text" placeholder='Onde Vamos?' 
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocationOnIcon />
              </InputAdornment>
            ),
          }}
          size = 'small'
          sx = {{
            background: 'white',
            borderRadius: '5px',
            width: '100%'
          }}
          />
          <TextField 
          type = "date" 
          placeholder='Data' 
          size='small'
          sx = {{
            background: 'white',
            borderRadius: '5px',
            width: '100%'
          }}
          />
          <button className='searchBox-btn'>Buscar</button>
          </form>
        </div>
 
  )
}
