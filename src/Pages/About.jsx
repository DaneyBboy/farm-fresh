import { Box, Container, Grid, Paper, Typography } from "@mui/material"
import React from "react"
import { FaQuoteLeft } from "react-icons/fa";

export default function About() {

    const features = [
        { icon: "🚜", label: "Direct-from-farm sourcing" },
        { icon: "📱", label: "Easy-to-use mobile and web experience" },
        { icon: "🌍", label: "Eco-friendly packaging" },
        { icon: "🧺", label: "Curated baskets for your weekly needs" },
        { icon: "❤️", label: "Passionate about healthy communities" },
    ];
    return (
        <>
            <div
                style={{
                    backgroundImage: `url(../public/farmer.jpg)`,
                    width: '100%',
                    minHeight: '348px',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Adds a dark overlay
                    backgroundBlendMode: 'multiply', // Blends the dark color with the image
                    backgroundAttachment: "fixed"
                }}
            >
                <div style={{ display: "flex", flexDirection: "column", textAlign: "justify", alignItems: "center" }}>
                    <Typography paddingBottom={'0.5em'} color="white" variant="h3">🥕 About Us</Typography>
                    {/* <Typography paddingBottom={'0.5em'} variant="h4" color="white">🌱 Our Story</Typography> */}
                    <Typography variant="body1" color="white" width="80%">Welcome to Farm Fresh Basket, your trusted source for naturally grown fruits and vegetables, delivered straight from the farm to your doorstep. Born from the vision of simplifying healthy eating, we are a tech-powered platform committed to providing fresh, seasonal, and sustainably grown produce to urban homes.
                        <br /><br />What started as a weekend project by a passionate developer (yes, that’s me!) has grown into a trusted online storefront serving fresh produce with a conscience.</Typography>
                </div>
            </div>
            <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '4em' }}>
                <Typography textAlign={'center'} variant="h4" fontWeight={'bold'} padding={'1.5em 0em'}>🧑‍🌾 Meet Our Founder</Typography>
                <Typography variant="body1" width={'80%'} textAlign={'justify'} paddingBottom={'2em'}>Dhanraj, a full-stack developer, always believed that technology can bridge the gap between farms and families. With hands-on experience in building scalable web applications, Dhanraj used his MERN Stack skills to create a seamless, user-friendly platform that supports local farmers and delivers freshness at speed.</Typography>
                <Typography fontStyle={'italic'} paddingLeft={'0.3em'} borderLeft={'0.3em solid rgb(73, 67, 67)'} fontSize={'1.2em'} variant="caption">“I wanted to do something meaningful with my skills. What’s better than combining tech and good food?” – Dhanraj</Typography>
            </section>
            <section>
                <Typography textAlign={'center'} variant="h4" fontWeight={'bold'}>Testimonials</Typography>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '2rem', margin: '4em 0' }}>
                    <img width={'10%'} src="../public/unsplash_6W4F62sN_yI.png" />
                    <div style={{ width: '50%' }}>
                        <FaQuoteLeft />
                        <Typography width={'70%'} fontSize={'1.125rem'} variant="body1">“I never imagined online vegetables could be this fresh. The quality is top-notch, and I love supporting a local-first business!”</Typography>
                        <Typography fontSize={'1rem'} fontWeight={'bold'} variant="body1">Ritika S</Typography>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '2rem', margin: '4em 0' }}>
                    <img width={'10%'} src="../public/customer1.png" />
                    <div style={{ width: '50%' }}>
                        <FaQuoteLeft />
                        <Typography width={'70%'} fontSize={'1.125rem'} variant="body1">“I never imagined online vegetables could be this fresh. The quality is top-notch, and I love supporting a local-first business!”</Typography>
                        <Typography fontSize={'1rem'} fontWeight={'bold'} variant="body1">Tiffany</Typography>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '2rem', margin: '4em 0' }}>
                    <img width={'10%'} src="../public/customer3.png" />
                    <div style={{ width: '50%' }}>
                        <FaQuoteLeft />
                        <Typography width={'70%'} fontSize={'1.125rem'} variant="body1">“I never imagined online vegetables could be this fresh. The quality is top-notch, and I love supporting a local-first business!”</Typography>
                        <Typography fontSize={'1rem'} fontWeight={'bold'} variant="body1">Daney</Typography>
                    </div>
                </div>

                <Container>
                    <Box sx={{ p: 4, backgroundColor: "#f9fff9", borderRadius: 4 }}>
                        <Typography textAlign={'center'} variant="h5" fontWeight="bold" color="green" mb={3}>
                            🌾 Why Choose Us?
                        </Typography>

                        <Grid container spacing={5}>
                            {features.map((feature, index) => (
                                <Grid item xs={12} sm={6} key={index}>
                                    <Paper
                                        elevation={3}
                                        sx={{
                                            p: 2,
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 2,
                                            borderLeft: "6px solid #9CCC65",
                                            backgroundColor: "#f1fbe8",
                                            transition: "all 0.3s",
                                            "&:hover": {
                                                backgroundColor: "#e5f7d5",
                                                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                                            },
                                        }}
                                    >
                                        <Typography fontSize="1.8rem">{feature.icon}</Typography>
                                        <Typography fontWeight="600" fontSize="1rem" color="green">
                                            {feature.label}
                                        </Typography>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>

                </Container>
            </section>
        </>

    )
}