import { Card } from "react-bootstrap";

const CartCard = (props) => {
  const { title, price, description, image, rating } = props;
  return (
    <Card style={{ width: "18rem", padding: "1rem" }}>
      <Card.Img variant="top" src={image}></Card.Img>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>Price: ${price}</Card.Text>
        <Card.Text>Rating: {rating.rate}/5</Card.Text>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CartCard;
