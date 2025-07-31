import { Breadcrumbs, Button, Container, Input, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router";

export default function Cart() {


    const data = useSelector(state => state.carts.productData)

        const [cartData, setCartData] = useState(data) 

    const[subtotal, setSubtotal] = useState(cartData.reduce((acc, item)=>acc+item.price * item.quantity, 0))

    function calculateTotal(data){
      return  data.reduce((acc, item)=> acc+item.price * item.quantity, 0)
    }

    function handleChangeQuantity(id, quantity){
        setCartData((prevData)=>{
            const updatedData = prevData.map((item)=>(item.id === id?{...item, quantity:quantity}:item))
        setSubtotal(calculateTotal(updatedData))  
        return updatedData
    })}

    function handleDelete(id){
        setCartData((prevData)=>{
            const updatedData = prevData.filter(item=> item.id !==id)
            setSubtotal(calculateTotal(updatedData))
            return updatedData
        })

    }


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
                        {cartData.map((item)=>(
                            <TableRow key={item.id}>
                            <TableCell align="center">{item.name}</TableCell>
                            <TableCell align="center">$ {item.price}</TableCell>
                            <TableCell align="center"><TextField sx={{width:'6em'}}  onChange={(e)=>handleChangeQuantity(item.id, e.target.value)} type="number" value={item.quantity}/></TableCell>
                            <TableCell align="center">$ {item.price * item.quantity}.00</TableCell>
                            <TableCell align="center"><Button onClick={()=>handleDelete(item.id)} color="error" variant="contained">Delete</Button></TableCell>
                        </TableRow>
                        ))}                      

                    </TableBody>
                </Table>
            </TableContainer >

            <Container  maxWidth={'sm'} sx={{marginLeft:'0', marginTop:'2em'}} >
                <Typography variant="h5" fontWeight={'bold'}>Cart Totals</Typography>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{fontWeight:'bold'}}  align="left">Subtotal</TableCell>
                                <TableCell sx={{color:'gray'}}   align="left">Shipping Free</TableCell>
                                <TableCell sx={{fontWeight:'bold'}} align="left">Total</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell align="left"> $ {subtotal}</TableCell>
                                <TableCell sx={{color:'gray'}} align="left">{subtotal > 99 ? 0 : 50}</TableCell>
                                <TableCell align="left">$ {subtotal > 99 ? subtotal : subtotal + 50}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <Button onClick={handleChange} sx={{my:'2em'}} variant="contained">PROCEED TO CHECKOUT</Button>

            </Container>
        </>
    )
}