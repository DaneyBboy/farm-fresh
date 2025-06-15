import ProductList from "../Components/ProductList";
import Typography from '@mui/material/Typography';
import { FaShippingFast } from "react-icons/fa";
import { CgSupport } from "react-icons/cg";
import { RxReset } from "react-icons/rx";
import { FaFingerprint } from "react-icons/fa";
import Container from '@mui/system/Container';
import { Button } from "@mui/material";



export default function Home() {

    return (
        <>
            <div className="back-image">
                <h2 className="align-right">From Fresh Farm</h2>
                <h2 className="align-right">To Kitchen</h2>
                <button className="align-right"> Shop Now</button>
            </div>
            <Typography marginTop={"1em"} fontFamily={"sans-Lato"} align="center" variant="h4">Discover NEW Fresh & Organic</Typography>
            <Typography marginBottom={"1em"} align="center" variant="h6">Freshly Procured Items</Typography>

            <section className="hero">
                <ProductList />
            </section>
            <section style={{ display: "flex", justifyContent: "center", padding:"1em" }}>
                <div style={{textAlign:"center", padding:"0em 1em"}}>
                    <FaShippingFast style={{ fontSize: "40px", color: "#024E82" }} />
                    <div>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Free Shipping</Typography>
                        <Typography variant="p">Enjoy free shipping on all orders above $100</Typography>

                    </div>

                </div>

                <div style={{textAlign:"center", padding:"0em 1em"}}>
                    <CgSupport style={{ fontSize: "40px", color: "#024E82" }} />
                    <div>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>SUPPORT 24/7</Typography>
                        <Typography variant="p">Our support team is there to help you for queries</Typography>
                    </div>
                </div>
                <div style={{textAlign:"center", padding:"0em 1em"}}>
                    <RxReset style={{ fontSize: "40px", color: "#024E82" }} />
                    <div>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>EASY RETURN</Typography>
                        <Typography variant="p">Simply return it while delivery</Typography>
                    </div>
                </div>
                <div style={{textAlign:"center", padding:"0em 1em"}}>
                    <FaFingerprint style={{ fontSize: "40px", color: "#024E82" }} />
                    <div><Typography variant="h6" sx={{ fontWeight: 'bold' }}>100% PAYMENT SECURE</Typography>
                        <Typography variant="p">Our payments are secured with 256 bit encryption</Typography>
                    </div>
                </div>
            </section>
            <section style={{height:"250px",display: "flex", textAlign: "center", gap: "1em", padding: "1.5rem" }}>
                <Container sx={{backgroundColor:"#000000", width:"100%", display:"flex", flexDirection:"column", justifyContent:"center", gap:"0.5rem"}}>
                    <Typography variant="h5" color="white" sx={{ textTransform:"uppercase", lineHeight:"48px"}}>peace of mind</Typography>
                    <Typography variant="body" color="white" sx={{padding:"0 20%"}}>A one-stop platform for all your kitchen needs, hassle-free. Buy with a peace of mind.</Typography>
                    <Button sx={{alignSelf: "center", padding: "10px 20px", backgroundColor: "white"}}>BUY NOW</Button>
                </Container>

                <Container sx={{backgroundColor:"#000000", width:"100%", display:"flex", flexDirection:"column", justifyContent:"center", gap:"0.5rem"}}>
                    <Typography variant="h5" color="white" sx={{ textTransform:"uppercase", lineHeight:"48px"}}>Buy 2 Get 10% OFF</Typography>
                    <Typography variant="body" color="white" sx={{padding:"0 20%"}}>End of season sale. Buy any 2 items of your choice and get 10% off.</Typography>
                    <Button sx={{alignSelf: "center", padding: "10px 20px", backgroundColor: "white"}}>BUY NOW</Button>
                </Container>
            </section>

        </>
    )
}