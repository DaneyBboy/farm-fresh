import React, { useContext } from "react";
import { VscAccount } from "react-icons/vsc";
import { FiShoppingBag } from "react-icons/fi";
import { NavLink } from "react-router";
import { Typography } from "@mui/material";
import Badge from '@mui/material/Badge';
import { AddtoCart } from "../Context";





export default function Header() {

const {badge} = useContext(AddtoCart)
    return (
        <>
            <header className="header-flex">
                <h1>Farm Fresh</h1>
                <nav>
                    {/* NavLink makes it easy to show active states */}
                    <NavLink to="/" className={({ isActive }) => isActive ? 'active' : "unactive"}>
                        <Typography >HOME</Typography>
                    </NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "active" : "unactive"}>
                        <Typography className="nav-header">ABOUT</Typography>
                    </NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : "unactive"}>
                        <Typography className="nav-header">CONTACT US</Typography>
                    </NavLink>
                    <NavLink to="/productlist" className={({ isActive }) => isActive ? "active" : "unactive"}>
                        <Typography className="nav-header">SHOP NOW</Typography>
                    </NavLink>
                </nav>
                <div className="icon">
                    <VscAccount className="icon-size" />

                    <NavLink className={({ isActive }) => isActive ? 'active' : "unactive"} to='/cart'>
                        <Badge badgeContent={badge} color="secondary">
                            <FiShoppingBag className="icon-size" />
                        </Badge>
                    </NavLink>

                </div>
            </header>
        </>
    )
}