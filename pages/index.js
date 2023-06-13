import EnhancedTable from "@/components/EnhancedTable";
import Navbar from "@/components/Navbar";
import { Container } from 'react-bootstrap'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Photo from "@/components/Photo";


const data = [
  {
    image: "/image1.jpg",
    alt: "Card 1 image",
    title: "Card 1 title",
    description: "Card 1 description",
  }, {
    image: "path/to/image1.jpg",
    alt: "Card 1 image",
    title: "Card 1 title",
    description: "Card 1 description",
  },
  {
    image: "path/to/image1.jpg",
    alt: "Card 1 image",
    title: "Card 1 title",
    description: "Card 1 description",
  },
  {
    image: "path/to/image1.jpg",
    alt: "Card 1 image",
    title: "Card 1 title",
    description: "Card 1 description",
  },
  {
    image: "path/to/image1.jpg",
    alt: "Card 1 image",
    title: "Card 1 title",
    description: "Card 1 description",
  },
];


export default function Home() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Navbar />
      <Container className="d-flex flex-column">
        <Photo width="100%" height="200rem" alt="header" src="/hero.jpg"/>
        <EnhancedTable />
      </Container>
    </Box>
  );
}


