/* eslint-disable react/prop-types */
import "./ReviewItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
const ReviewItem = ({ product, handleRemove }) => {
  const { id, img, name, price, quantity } = product;
  return (
    <div className="review-item">
      <img src={img} alt="" />
      <div className="review-details">
        <p className="product-title">{name}</p>
        <p>
          Price: $ <span className="orange">{price}</span>
        </p>
        <p>
          Order Quantity:<span className="orange">{quantity}</span>
        </p>
      </div>
      <button onClick={() => handleRemove(id)} className="btn-delete">
        <FontAwesomeIcon className="delete-icon" icon={faTrashAlt} />
      </button>
    </div>
  );
};

export default ReviewItem;
