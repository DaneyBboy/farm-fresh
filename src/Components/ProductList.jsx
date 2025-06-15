import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Data from '../Data';
import { Box, Container } from '@mui/material';

export default function ProductList() {

  const producEle = Data.map((data, index) => {

    return (

      <Card index={index} sx={{ minWidth: 300, marginBottom: "2em" }}>
        <CardMedia
          sx={{ height: 200 }}
          image={data.url}
          title={data.name}
        />
        <CardContent sx={{ textAlign: "center" }}>
          <Typography gutterBottom variant="h5" component="div">
            {data.name}
          </Typography>
          <Typography variant="body" sx={{ color: 'info' }}>
            $ <span style={{ fontStyle: "italic", fontSize: "1.5em" }}>{data.price}</span> Per Kg
          </Typography>
        </CardContent>
      </Card>
    )
  })

  return (
    <>
      <Box sx={{mx:2, my:5}}>
        <section className="hero">
          {producEle}
        </section>

      </Box>


    </>

  );
}
