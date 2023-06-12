import Figure from 'react-bootstrap/Figure';

const Photo = (props) => {
  return (
    <Figure
    style={{margin: 0, paddingTop: "1rem"}}>
      <Figure.Image
        style={{ objectFit: "cover", padding: 0, margin: 0 }}
        width={props.width}
        height={props.height}
        alt={props.alt}
        src={props.src}
      />
    </Figure>
  );
}

export default Photo;