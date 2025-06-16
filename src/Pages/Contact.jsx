import { Box, Button, Input, Typography } from '@mui/material'
import React, { useState } from 'react'

export default function Contact() {

    const [message, setMessage] = useState(false)

    function onSubmit(){
        setMessage(prev => !prev)
    }
    return (
        <>
            <Box sx={{
                display: 'flex',
                alignItems: 'anchor-center',
                backgroundImage: `url('/contact.jpg')`,
                width: '100%',
                height: '348px',
                color: 'white',

            }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft:'2%' }}>
                    <Typography fontSize={'3rem'} variant='h1'>Contact US</Typography>
                </Box>
            </Box>
            <section style={{display:'flex', justifyContent:'space-between', margin:'7% 2%'}}>
                { !message? <div>
                    <Typography variant='h4' fontWeight={'bold'}>We would love to hear from you.</Typography>
                    <Typography variant='body1' margin={'2rem 0rem'}>If you have any query or any type of suggestion, you can contact us here. We would love to hear from you.</Typography>
                    <form>
                        <div>
                            <label>
                                Name
                                <input style={{width: '100%', padding: '0.75rem 1.25rem',  margin: '0.5rem 0', boxSizing: 'content-box'}} type='text' placeholder='Daney' required />
                            </label>
                            <label>
                                Email
                                <input style={{width: '100%', padding: '0.75rem 1.25rem',  margin: '0.5rem 0', boxSizing: 'content-box'}}  type='email' placeholder='daney@gmail.com' required/>
                            </label>
                        </div>

                        <label>
                            Message
                            <textarea style={{width: '100%', height:'8rem', padding: '0.75rem 1.25rem',  margin: '0.5rem 0', boxSizing: 'content-box'}}/>
                        </label>
                        <Button onClick={onSubmit} sx={{marginTop:'2rem',backgroundColor:'blue', color:'whitesmoke', padding: '0.5em 1em'}}>SEND MESSAGE</Button>
                    </form>
                </div>:<div>
                <Typography textAlign={'center'} variant='h4'>Message sent. We’ll contact you soon.</Typography>
                <Button onClick={onSubmit} sx={{marginTop:'2rem',backgroundColor:'blue', color:'whitesmoke', padding: '0.5em 1em'}}>Go Back</Button>
            </div>}


                <div style={{display:'flex', flexDirection:'column', gap:'2rem'}}>
                    <Box>
                        <Typography marginBottom={'1rem'} variant='h6' fontWeight={'bold'}>Visit Us</Typography>
                        <Typography>Thaltej, Ahmedabad, Gujarat, India</Typography>
                    </Box>
                    <Box>
                        <Typography marginBottom={'1rem'} variant='h6' fontWeight={'bold'}>Get In Touch</Typography>
                        <Typography>You can get in touch with us on this provided email. </Typography>
                        <Typography>Email: daneyboy111@gmail.com</Typography>
                    </Box>

                </div>


            </section>

        </>
    )
}