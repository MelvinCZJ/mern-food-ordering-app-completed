import { CartItem } from "@/pages/DetailPage";
import { Restaurant } from "@/types";
import { CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { MinusSquare, PlusSquare, Trash } from "lucide-react";

type Props = {
  restaurant: Restaurant;
  cartItems: CartItem[];
  removeFromCart: (cartItem: CartItem) => void;
  addOneToCart: (cartItem: CartItem) => void;
  removeOneFromCart: (cartItem: CartItem) => void;
};

const OrderSummary = ({
  cartItems,
  restaurant,
  removeFromCart,
  addOneToCart,
  removeOneFromCart,
}: Props) => {
  const getTotalCost = () => {
    const totalCartItemsInCents = cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );

    const totalWithDeliveryInCents =
      totalCartItemsInCents + restaurant.deliveryPrice;

    return (totalWithDeliveryInCents / 100).toFixed(2);
  };

  return (
    <>
      <CardHeader>
        <CardTitle className="text-2xl font-bold tracking-tight flex justify-between">
          <span>Your Order</span>
          <span>${getTotalCost()}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        {cartItems.map((cartItem) => (
          <div className="flex justify-between">
            <span className="font-bold">
              <Badge variant="outline" className="text-xl mr-2">
                {cartItem.quantity}
              </Badge>
              {cartItem.name}
            </span>
            <span className="flex items-center gap-2 select-none">
              <PlusSquare
                className="cursor-pointer"
                color="black"
                size={20}
                onClick={() => addOneToCart(cartItem)}
              />
              <MinusSquare
                className="cursor-pointer"
                color="black"
                size={20}
                onClick={() => removeOneFromCart(cartItem)}
              />
              <Trash
                className="cursor-pointer"
                color="red"
                size={20}
                onClick={() => removeFromCart(cartItem)}
              />
              ${((cartItem.price * cartItem.quantity) / 100).toFixed(2)}
            </span>
          </div>
        ))}
        <Separator />
        <div className="flex justify-between">
          <span>Delivery</span>
          <span>${(restaurant.deliveryPrice / 100).toFixed(2)}</span>
        </div>
        <Separator />
      </CardContent>
    </>
  );
};

export default OrderSummary;
