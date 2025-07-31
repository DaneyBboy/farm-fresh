import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import { useContext } from "react";
import { AddtoCart } from "../Context";



export default function Login() {

  const { Auth } = useContext(AddtoCart)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    Auth(data)

  };

  return (
    <div style={{ backgroundImage: `url('/login-image.jpeg')`, minHeight: "80vh", display: "flex", flexDirection: 'column', justifyContent: 'center' }}>
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ padding: 4 }}>
          <Typography variant="h5" align="center" gutterBottom>
            Login
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <TextField
              label="Email"
              type="email"
              placeholder="abc@domain.com"
              fullWidth
              {...register("email", { required: "Please enter your email" })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />

            <TextField
              label="Password"
              type="password"
              fullWidth
              {...register("password", { required: "Please enter your password" })}
              error={!!errors.password}
              helperText={errors.password?.message}
            />

            <Button variant="contained" color="primary" type="submit" fullWidth>
              Sign In
            </Button>
          </Box>
        </Paper>
      </Container>
    </div>
  );
}
