import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './styles.css'

  const date = new Date()

export function Footer() {
  return (
    <>
      <p><span>{date.getFullYear()}</span> digital booking</p>
      <div className='footer-social-icon'>
        <FacebookIcon />
        <TwitterIcon />
        <LinkedInIcon />
        <InstagramIcon />
      </div>
   </>
  )
}
