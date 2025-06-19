import { Breadcrumbs, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { NavLink } from "react-router";

export default function Cart() {
    return (
        <>
            <Breadcrumbs aria-label="breadcrumb">
                <NavLink className={({ isActive }) => isActive ? "active" : "unactive"} to="/">
                    Home
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? "active" : "unactive"} to="/cart">
                    Shopping Cart
                </NavLink>
            </Breadcrumbs>

            <TableContainer component={Paper}>

                <Table sx={{ minWidth: 650 }} aria-label="simple table">

                    <TableHead>
                        <TableRow>
                            <TableCell>Product</TableCell>
                            <TableCell align="center">Price</TableCell>
                            <TableCell align="center">Quantity</TableCell>
                            <TableCell align="center">Total</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody></TableBody>
                
            </Table>
        </TableContainer >
        </>
    )
}