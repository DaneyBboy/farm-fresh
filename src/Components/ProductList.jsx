import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Data from '../Data';
import { Box, Button, Container } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/slice';


export default function ProductList() {

  const dispatch = useDispatch()

  function handleClick(product){
    console.log(product)
    dispatch(addToCart({...product, quantity:1}))
  }


  const producEle = Data.map((data, index) => {

    return (
      
      Data?<Card key={index} sx={{ minWidth: 300, marginBottom: "2em" }}>
        <CardMedia
          sx={{ height: 200 }}
          image={data.url}
          title={data.name}
        />
        <CardContent sx={{display:'flex', flexDirection:'column', textAlign: "center" }}>
          <Typography gutterBottom variant="h5" component="div">
            {data.name}
          </Typography>
          <Typography  variant="body" sx={{ color: 'info', marginBottom:'1em' }}>
            $ <span style={{ fontStyle: "italic", fontSize: "1.5em" }}>{data.price}</span> Per Kg
          </Typography>
          <Button onClick={()=>handleClick(data)} variant='outlined'>Add to Cart</Button>
        </CardContent>
        
      </Card>:new Error("page not found")      
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
