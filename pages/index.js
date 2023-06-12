import UnstyledTable from "@/components/UnstyledTable";
import Navbar from "@/components/Navbar";
import { Container } from 'react-bootstrap'

const data = [
  {
    image: "path/to/image1.jpg",
    alt: "Card 1 image",
    title: "Card 1 title",
    description: "Card 1 description",
  },
  {
    image: "path/to/image2.jpg",
    alt: "Card 2 image",
    title: "Card 2 title",
    description: "Card 2 description",
  },
  {
    image: "path/to/image2.jpg",
    alt: "Card 2 image",
    title: "Card 2 title",
    description: "Card 2 description",
  },
  {
    image: "path/to/image2.jpg",
    alt: "Card 2 image",
    title: "Card 2 title",
    description: "Card 2 description",
  },
  {
    image: "path/to/image2.jpg",
    alt: "Card 2 image",
    title: "Card 2 title",
    description: "Card 2 description",
  },
  {
    image: "path/to/image2.jpg",
    alt: "Card 2 image",
    title: "Card 2 title",
    description: "Card 2 description",
  },
];


export default function Home() {
  return (
    <div className="d-flex">
      <Navbar />
      <Container className="ms-4">
        <UnstyledTable />
      </Container>
    </div>
  )
}
