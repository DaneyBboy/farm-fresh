import { Breadcrumbs, Button, Container, Input, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { NavLink, useNavigate } from "react-router";

export default function Cart() {
const navigate = useNavigate()
    function handleChange(){
        navigate('/checkout')
        
    }
    return (
        <>
            <Breadcrumbs aria-label="breadcrumb">
                <NavLink className={({ isActive }) => isActive ? "active" : "unactive"} to="/">
                    HOME
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? "active" : "unactive"} to="/cart">
                    SHOPPING CART
                </NavLink>
            </Breadcrumbs>

            <TableContainer  component={Paper}>
                <Table size="medium" aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Product</TableCell>
                            <TableCell align="center">Price</TableCell>
                            <TableCell align="center">Quantity</TableCell>
                            <TableCell align="center">Total</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell align="center">Tomoto</TableCell>
                            <TableCell align="center">$59.00</TableCell>
                            <TableCell align="center">1</TableCell>
                            <TableCell align="center">${59*1}.00</TableCell>
                            <TableCell align="center"><Button variant="contained">Delete</Button></TableCell>

                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer >

            <Container  maxWidth={'sm'} sx={{marginLeft:'0', marginTop:'2em'}} >
                <Typography variant="h5" fontWeight={'bold'}>Cart Totals</Typography>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Subtotal</TableCell>
                                <TableCell align="left">Shipping Free</TableCell>
                                <TableCell align="left">Total</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell align="left">$59.00</TableCell>
                                <TableCell align="left">!Free</TableCell>
                                <TableCell align="left">$59.00</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <Button onClick={handleChange} sx={{my:'2em'}} variant="contained">PROCEED TO CHECKOUT</Button>

            </Container>
        </>
    )
}