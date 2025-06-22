import { Box, Button, Container, FormControl, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useState } from "react";

export default function Ordercheckout() {

    const [orderPlaced, setOrderPlaced] = useState(false)

    function handleSubmit() {
        setOrderPlaced(old => !old)

    }
    return (
        <>
            <Container>{orderPlaced === false ? 
            <>
                <Typography my={3} variant="h4">Billing details</Typography>
                <form>
                    <label style={{ display: 'block' }}>Full Name<span style={{ color: 'red' }}>&#8902;</span></label>
                    <input style={{ width: '50%', padding: '0.75rem 1.25rem', margin: '0.5rem 0', boxSizing: 'content-box' }} type='text' placeholder='Daney' required />

                    <label style={{ display: 'block' }}>Street address<span style={{ color: 'red' }}>&#8902;</span> </label>
                    <input placeholder='House number and street name' style={{ width: '50%', padding: '0.75rem 1.25rem', margin: '0.5rem 0', boxSizing: 'content-box' }} type='email' required />


                    <label style={{ display: 'block' }}> Town / City<span style={{ color: 'red' }}>&#8902;</span></label>
                    <input placeholder='House number and street name' style={{ width: '50%', padding: '0.75rem 1.25rem', margin: '0.5rem 0', boxSizing: 'content-box' }} type='email' required />

                    <label style={{ display: 'block' }}>Phone<span style={{ color: 'red' }}>&#8902;</span></label>
                    <input placeholder='House number and street name' style={{ width: '50%', padding: '0.75rem 1.25rem', margin: '0.5rem 0', boxSizing: 'content-box' }} type='email' required />

                    <label style={{ display: 'block' }}>Email address<span style={{ color: 'red' }}>&#8902;</span></label>
                    <input placeholder='House number and street name' style={{ width: '50%', padding: '0.75rem 1.25rem', margin: '0.5rem 0', boxSizing: 'content-box' }} type='email' required />

                    <Typography my={3} variant="h4">Your Order</Typography>
                    <TableContainer  sx={{ maxWidth: '100%' }} component={Paper}>
                        <Table sx={{ maxWidth: '100%' }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{ fontWeight: 'bold' }} component='th' scope="column">Product</TableCell>
                                    <TableCell style={{ fontWeight: 'bold' }} component='th'>Total</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow >
                                    <TableCell component="td" scope="row">
                                        Plain White Shirt
                                    </TableCell>
                                    <TableCell>$59.00</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Subtotal</TableCell>
                                    <TableCell>$59.00</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table >
                    </TableContainer>
                    <Container style={{margin:'1.4em auto',width:'100%', padding:'1.5em 1em', backgroundColor:'#f9f3f3', borderBottom:'3px solid #a8a5a5'}}>Cash on delivery.  Please contact us if you require assistance or wish to make alternate arrangements.</Container>
                    <Button onClick={handleSubmit} sx={{ display: 'block', marginLeft: 'auto', textAlign: "right", marginTop: '2rem', backgroundColor: 'blue', color: 'whitesmoke', padding: '0.875rem 2.25rem' }}>PLACE ORDER</Button>
                </form></>
                :

                <Box sx={{ backgroundColor: '#6262db', padding: '6.25rem 4.375rem', margin:'5rem 0' }}>
                    <Typography color="white" textAlign={'center'} variant="h3">Order placed successfully 🙌</Typography>
                </Box>}
                </Container >
            
        </>
    )
}