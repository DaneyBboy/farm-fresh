import { Box, InputBase, Typography, Button } from "@mui/material";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { SiVisa } from "react-icons/si";
import { FaCcMastercard, FaCcPaypal } from "react-icons/fa";


export default function Footer() {
 

    return (
        <Box sx={{ background: "linear-gradient(to right, #c3ea93, #b8d7a5)", mt: 4 }}>
            {/* Top Section */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: 4,
                    px: 3,
                    py: 4,
                    textAlign:{ xs: "center", sm: "left" }
                }}
            >
                {/** Column 1 */}
                <Box>
                    <Typography variant="body2" fontWeight="bold">COMPANY INFO</Typography>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                        <li>About Us</li>
                        <li>Latest Posts</li>
                        <li>Contact Us</li>
                        <li>Shop</li>
                    </ul>
                </Box>

                {/** Column 2 */}
                <Box>
                    <Typography variant="body2" fontWeight="bold">HELP LINKS</Typography>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                        <li>Tracking</li>
                        <li>Order Status</li>
                        <li>Delivery</li>
                        <li>Shipping Info</li>
                        <li>FAQ</li>
                    </ul>
                </Box>

                {/** Column 3 */}
                <Box>
                    <Typography variant="body2" fontWeight="bold">USEFUL LINKS</Typography>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                        <li>Special Offers</li>
                        <li>Gift Cards</li>
                        <li>Advertising</li>
                        <li>Terms of Use</li>
                    </ul>
                </Box>

                {/** Column 4 */}
                <Box>
                    <Typography variant="body2" fontWeight="bold" mb={1}>GET IN THE KNOW</Typography>
                    <Box component="form" sx={{ display: "flex", gap: 1 }}>
                        <InputBase
                            placeholder="Enter email"
                            sx={{
                                backgroundColor: "#fff",
                                px: 1,
                                borderRadius: "4px",
                                flex: 1,
                                height: "36px"
                            }}
                        />
                        <Button variant="contained" color="success" sx={{ minWidth: "40px" }}>
                            <IoIosArrowForward />
                        </Button>
                    </Box>
                </Box>
            </Box>

            {/* Divider */}
            <Box sx={{ borderTop: "1px solid rgba(0,0,0,0.1)", mx: 3 }} />

            {/* Bottom Section */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    justifyContent: "space-between",
                    alignItems: "center",
                    px: 3,
                    py: 2,
                    gap: 2
                }}
            >
                <Box>
                    <Typography variant="body2">© 2020 NorthStar eCommerce</Typography>
                    <Typography variant="body2">Privacy Policy Terms & Conditions</Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 2, flexWrap: "wrap" }}>
                    <SiVisa style={{ fontSize: "40px", color: "#1a1f71" }} />
                    <FaCcMastercard style={{ fontSize: "40px", color: "#1a1f71" }} />
                    <FaCcPaypal style={{ fontSize: "40px", color: "#1a1f71" }} />
                    <img src={'../public/visa-electron.svg'} alt="Visa Electron" style={{ width: "40px" }} />
                </Box>
            </Box>
        </Box>
    );
}
