import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const FourOFour = () => {
  
    const router = useNavigate()

    const handleBack = () => {
        router(-1)
    }

    return (
    <section style={{
        background: '#F3F6E4',
        display: 'grid',
        placeContent: 'center',
        height: '100vh'
    }}>
        <h2>No page was found.</h2>
        <div
            style={{
                margin: '0 auto',
                textAlign: 'center',
                
            }}
        >
            <Button
            sx={{
                color: '#000',
                margin: '10px',
                background: '#f13131',
                fontFamily: 'Montserrat'
            }}
            onClick={handleBack}>Go back</Button>
        </div>
    </section>
  )
}

export default FourOFour