import Figure from 'react-bootstrap/Figure';

const Photo = (props) => {
  return (
    <Figure>
      <Figure.Image
        width={props.width}
        height={props.height}
        alt={props.alt}
        src={props.src}
      />
    </Figure>
  );
}

export default Photo;