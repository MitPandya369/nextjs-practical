'use client';
import { useCart } from '@/context/CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  let totalAmount: number = 0;
  const newCart = Array.from(
    new Set(
      cart.map((obj) => {
        totalAmount += Number(obj.price);
        return JSON.stringify(obj);
      })
    )
  ).map((str) => JSON.parse(str));

  return (
    <div>
      <ul>
        {newCart.map((item) => (
          <CartCard item={item} removeFromCart={removeFromCart} key={item.id} />
        ))}
      </ul>
      <p className="mb-3 font-normal">
        totalAmount: <span className="font-bold">${totalAmount}</span>
      </p>
    </div>
  );
};

function CartCard({
  item,
  removeFromCart
}: {
  item: any;
  removeFromCart: any;
}) {
  return (
    <div className="flex flex-col justify-between p-4 leading-normal">
      <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">
        {item.name} - ${item.price}
      </h5>
      <p className="mb-3 font-normal text-gray-700">
        <button onClick={() => removeFromCart(item.id)}>Remove</button>
      </p>
    </div>
  );
}

export default Cart;
