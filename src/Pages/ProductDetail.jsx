import { Box, Breadcrumbs, Button, Container, FormControl, InputLabel, Link, MenuItem, Rating, Select, Typography } from "@mui/material";
import { useState } from "react";
import { WiDayThunderstorm } from "react-icons/wi";
import { NavLink } from "react-router";

export default function ProductDetail() {
    const [quantity, setQuantity] = useState('')

    const handleClick = (e) => {
        e.preventDefault()
        console.log('You clicked a breadcrumb.')
    }

    const handleChange = (e) => {
        e.preventDefault()
        setQuantity(e.target.value)

    }

    return (
        <>
            <Box sx={{display:'flex', flexDirection:{xs: "column", sm: "row"}, my:'2.5em', }}>


                <Container sx={{width:'50%', display:'flex', flexDirection:'column',}}>
                <div role="presentation" onClick={handleClick}>
                        <Breadcrumbs aria-label="breadcrumb">
                            <NavLink to="/" style={{color:'inherit', textDecoration:'none'}}>
                                Home
                            </NavLink>
                            <NavLink to="/productlist" style={{color:'inherit', textDecoration:'none'}} >
                                Shop Now
                            </NavLink>
                            <Typography sx={{ color: 'text.primary' }}>Fruits</Typography>
                        </Breadcrumbs>
                    </div>

                    <img width={'100%'} src="https://m.media-amazon.com/images/I/815N83MFZwL._SL1500_.jpg" />

                </Container>


                <Container sx={{textAlign:'justify', display:'flex', flexDirection:'column', gap:'1em'}} >
                    <Typography variant="h4" fontWeight={'bold'}>Fresh Kiwi</Typography>
                    <Rating name="half-rating" readOnly defaultValue={4} precision={0.5}></Rating>
                    <Typography variant="h6">$59</Typography>
                    <Typography variant="body1">Kiwis are small fruits that pack a lot of flavor and plenty of health benefits. Their green flesh is sweet and tangy. It’s also full of nutrients like vitamin C, vitamin K, vitamin E, folate, and potassium. They also have a lot of antioxidants and are a good source of fiber.</Typography>
                    <div>
                        <FormControl sx={{my:1, minWidth: 100 }}>
                            <InputLabel id="demo-simple-select-autowidth-label">Quantity</InputLabel>
                            <Select
                                labelId="demo-simple-select-autowidth-label"
                                id="demo-simple-select-autowidth"
                                value={quantity}
                                onChange={handleChange}
                                autoWidth
                                label="quantity"
                            >
                                <MenuItem value={1}>1 KG</MenuItem>
                                <MenuItem value={2}>2 KG</MenuItem>
                                <MenuItem value={5}>5 KG</MenuItem>
                                <MenuItem value={7}>7 KG</MenuItem>
                                <MenuItem value={10}>10 KG</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <Button sx={{px:'1.3em', py:'0.5em', color:'whitesmoke', backgroundColor:"blue",alignSelf: 'flex-start'}}> ADD TO CART</Button>

                </Container>
            </Box>

        </>


    )
}