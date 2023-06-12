import UnstyledTable from "@/components/UnstyledTable";
import Navbar from "@/components/Navbar";
import { Col, Container, Row } from 'react-bootstrap'
import CustomCard from "@/components/CustomCard";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Photo from "@/components/Photo";


const data = [
  {
    image: "path/to/image1.jpg",
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
  const row = (Math.ceil(data.length % 4)) == 0 ? Math.ceil(data.length / 4) : Math.ceil(data.length / 3);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Navbar />
      <Container className="d-flex flex-column">
        <Photo width="100%" height="15rem" alt="header" src="../public/hero.jpg"/>
        <UnstyledTable />
        {Array.from({ length: row }).map((_, rowIndex) => (
          <Row key={rowIndex} className="w-100">
            {data.slice(rowIndex * 4, (rowIndex + 1) * 4).map((item, index) => (
              <Col key={index} sm={12} md={5} lg={4}>
                <CustomCard title={item.title} description={item.description} image={item.image} alt={item.alt} />
              </Col>
            ))}
          </Row>
        ))}
      </Container>
    </Box>
  );
}


