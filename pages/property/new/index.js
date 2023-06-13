import Navbar from "@/components/Navbar";
import { Container } from 'react-bootstrap'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Photo from "@/components/Photo";
import Form from "@/components/Form";


export default function Home() {
    return (
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Navbar />
        <Container className="d-flex flex-column">
          <Photo width="100%" height="200rem" alt="header" src="/hero.jpg"/>
          <Form />
        </Container>
      </Box>
    );
  }