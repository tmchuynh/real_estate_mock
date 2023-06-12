import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Card(image) {
    const [title, text, button, src] = image
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <Button variant="primary">{button}</Button>
      </Card.Body>
    </Card>
  );
}

export default Card;