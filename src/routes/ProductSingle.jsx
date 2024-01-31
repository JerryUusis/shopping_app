import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

const ProductSingle = (props) => {

    const { title, price, description, image, rating} = props;
    const dispatch = useDispatch();
    const product = props;

    const handleAddToCart = () => {
        dispatch(addToCart(product))
    }

    return (
        <Card style={{ width: '18rem', padding:'1rem'}}>
            <Card.Img variant='top' src={image}></Card.Img>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    Price: ${price}
                    <br />
                    Rating: {rating.rate}
                    <br />
                    {description}
                </Card.Text>
                <Button variant='primary' onClick={handleAddToCart}>Add product to cart</Button>
            </Card.Body>
        </Card>
    )
}

export default ProductSingle